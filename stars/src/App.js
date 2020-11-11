import './App.css';

function App() {
  // fetch('https://swapi.dev/api/people/1/').then((res) => {
  //   return res.json()
  // }).then((res) => {
  //   console.log(res)
  // })
  const url = 'https://swapi.dev/api/people/1/'
  const getRes = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  }
  getRes(url).then((body) => {
    console.log(body)
  }).catch((err) => {
    console.log(err)
  }) 
  return (
    <div className="App">

    </div>
  );
}

export default App;
