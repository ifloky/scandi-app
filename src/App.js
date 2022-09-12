import './index.scss';
import Card from './components/Card/Card'
import FormAdd from './components/FormAdd/FormAdd'
import React from 'react';


function App() {

  const [items, setItems] =React.useState([]);
  const [itemsDel, setItemsDel] =React.useState([]);
  const [isAdded, setAdded] = React.useState(true);
  

  React.useEffect(() => {
    return () => {
      fetch('https://62f65180612c13062b4ba68a.mockapi.io/items')
      .then((response) => { return response.json() })
      .then((data) => setItems(data))
    }
  }, []);

  //const listItems = [
  //  //{sku: "1fd11", name: 'Compact Disc "ACME"', price: 333, srcImg: "img/acme.jpeg", specValue: 'Special Value'},
  //  //{sku: "1fd11", name: 'Compact Disc "ACME"', price: 333, srcImg: "img/acme.jpeg", specValue: 'Special Value'},
  //  //{sku: "1fd11", name: 'Compact Disc "ACME"', price: 333, srcImg: "img/acme.jpeg", specValue: 'Special Value'},
  //  //{sku: "1fd11", name: 'Compact Disc "ACME"', price: 333, srcImg: "img/acme.jpeg", specValue: 'Special Value'},
  //  //{sku: "5sA1", name: 'Book "War&Peace"', price: 333, srcImg: "img/peace.jpg", specValue: 'Special Value'},
  //  //{sku: "5sA1", name: 'Book "War&Peace"', price: 333, srcImg: "img/peace.jpg", specValue: 'Special Value'},
  //  //{sku: "5sA1", name: 'Book "War&Peace"', price: 333, srcImg: "img/peace.jpg", specValue: 'Special Value'},
  //  //{sku: "5sA1", name: 'Book "War&Peace"', price: 333, srcImg: "img/peace.jpg", specValue: 'Special Value'},
  //  //{sku: "7A42", name: 'Soft chair "Lux"', price: 333, srcImg: "img/chair.jpg", specValue: 'Special Value'},
  //  //{sku: "7A42", name: 'Soft chair "Lux"', price: 333, srcImg: "img/chair.jpg", specValue: 'Special Value'},
  //  //{sku: "7A42", name: 'Soft chair "Lux"', price: 333, srcImg: "img/chair.jpg", specValue: 'Special Value'},
  //  //{sku: "7A42", name: 'Soft chair "Lux"', price: 333, srcImg: "img/chair.jpg", specValue: 'Special Value'},
  //]

  const add = (items) => {
    if (!isAdded) {
      setAdded(true);
    } else {
      setAdded(false)
    }
  }

  const deleteItem = (obj) => {
    setItemsDel([...itemsDel,obj]);
  }

    const massDel = () => {
    for (let i=0, n=itemsDel.length; i<n; i++) {
      let itemId = itemsDel[i];
      console.log(itemId);
      fetch(`https://62f65180612c13062b4ba68a.mockapi.io/items/${itemId}`, {method:'DELETE'})
    }
  } 

  return (
    <div className="App">
      <header className="header">
        <h1 className="namePage">{ isAdded ? 'Product List' : 'Product Add' }</h1>
        { isAdded ?  
          <div className="headButtons">
            <button className="add" onClick={add}>ADD</button>
            <button className="massDelete" onClick={massDel}>MASS DELETE</button>
          </div> : 
          <div className="headButtons">
            <button className="massDelete" onClick={add}>Cancel</button>
          </div>
        }
      </header>

      <section className="bodyPage">
        <div className="wrapper">
        {
          isAdded ? items.map((item) => (
            <Card
              key={item.id}
              srcImg={item.srcImg}
              sku={item.sku}
              name={item.name}
              price={item.price}
              specValue={item.specValue}
              onBut={(obj) => deleteItem(item.id)}
            /> 
          )) : <FormAdd />
        }
        </div>
      </section>
      
      <footer className="footer">
        <h3 className="footerText">Test assignment</h3>
      </footer>
    </div>
  );
}

export default App;
