class SwapiResourses {
  _apiBase = 'https://swapi.dev/api/'
  async getResourses(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw Error(`Couldnt fetch ${url}`)
    const body = await res.json();
    return body;
  }
  async getPerson(id) {
    const res = await this.getResourses(`people/${id}/`)
    return this._transformPerson(res)
  }
  async getAllPeople() {
    const res = await this.getResourses(`people`)
    return this.results.map(this._transformPerson(res));
  }
  async getPlanet(id) {
    const res = await this.getResourses(`planets/${id}/`)
    return this._transformPlanet(res)
  }
  async getAllPlanets() {
    const res = await this.getResourses(`planets`)
    return res.results.map(this._transformPlanet(res));;
  }
  async getStarship(id) {
    const res = await this.getResourses(`starships/${id}/`)
    return this._transformStarship(res)
  }
  async getAllStarships() {
    const res = await this.getResourses(`starships`)
    return res.results.map(this._transformStarship(res));;
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}
export const swapi = new SwapiResourses();