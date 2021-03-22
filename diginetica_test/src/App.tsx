import './App.css';

function App() {
  const _1 = `false, 1 и '1' имеют типы number и string соответственно, === это сравнение без приведения типов, поэтому они не равны, == вывело бы true потому что такое сравнение привело бы к единому типу`;
  const _2 = `оператор + произведет конкатенация строк, прочитает оба массива как строки и склеит две строки '1,2,3' и '4,5,6' - '1,2,34,5,6'. сложить два массива в один массив можно через  [1, 2, 3].concat([4, 5, 6]) или так [...[1, 2, 3], ...[4,5,6]]`;
  const _3 = `{b: 2}, потому что объект это ссылка на область памяти и приравняв два объекта мы скопировали не сам объект а ссылку на него, соответственно они ссылаются на одну и ту же область памяти.
  var b = {...a} скопировал бы объект a и создал бы новый, следовательно изменив один объект, мы не меняет другой объект`;
  const _4 = `/^\d*[.,]\d{0,3}/g`;
  const _6 = `'сообщение'
  после объявление переменной text, мы вызвали функцию setText которая изменила значение переменной text`;
  const _7 = `<a href="http://example.com/" onClick={() => {fetch(https://httpbin.org/status/200)}}>promo</a>`;
   
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
