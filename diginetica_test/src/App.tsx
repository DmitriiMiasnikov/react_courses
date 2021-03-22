import './App.css';

function App() {

  let arr = [];
  let elem1 = document.evaluate( '//div[@class="product-item"]/@data-id', document, null, XPathResult.ANY_TYPE, null );
  let p = elem1.iterateNext();
  while (p) {
      arr.push(p);
      p = elem1.iterateNext();
  }
  console.log(arr);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
