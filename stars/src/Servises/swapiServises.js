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
    return res
  }
  async getAllPeople() {
    const res = await this.getResourses(`people`)
    return res.results;
  }
  async getPlanet(id) {
    const res = await this.getResourses(`planets/${id}/`)
    return res
  }
  async getAllPlanets() {
    const res = await this.getResourses(`planets`)
    return res.results;
  }
  async getStarship(id) {
    const res = await this.getResourses(`starships/${id}/`)
    return res
  }
  async getAllStarships() {
    const res = await this.getResourses(`starships`)
    return res.results;
  }
}
const swapi = new SwapiResourses();