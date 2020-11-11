import './App.css';

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
}
const swapi = new SwapiResourses();

swapi.getAllPeople().then((res) => {
  res.forEach(el => console.log(el.name))
}) 
swapi.getPerson(3).then((person) => {
  console.log(person)
}) 

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
