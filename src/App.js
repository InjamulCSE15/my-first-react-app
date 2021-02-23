import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const products = [
        {name: 'Apple iPhone 8  64GB, Black', price: '$179.00'},
        {name: 'Apple iPhone 7  32GB, Silver', price: '$150.00'},
        {name: 'Apple iPhone 7  64GB, Black', price: '$200.12'},
        {name: 'Apple iPhone X  128GB, Gray', price: '$500.12'},
        {name: 'Apple iPhone X  64GB, white', price: '$439.12'},
        {name: 'Apple iPhone X  64GB, Black', price: '$439.12'},
        {name: 'Apple iPhone X  64GB, Gray', price: '$439.12'},
    ]
    const brandNames = ['Apple', 'Samsung', 'Nokia', 'Motorola', 'LG']
    return (<div className="App" >
        <header className="App-header" >
        <Counter></Counter>
        {
            products.map(product => <Product product= {product}></Product>)
        }
        <ul>
            {
                brandNames.map(brandName => <li>{brandName}</li>)
            }
        </ul>


            </header > 
            </div>
    );
}

function Counter() {

    const [count, setCount] = useState(0);
    const addCart = () => setCount(count + 1); 
    const removeCart = () => setCount(count - 1);
    return (
        <div>
            <h3>Product in Cart: {count}</h3>
            <button onClick= {removeCart}>Remove from Cart</button>
            <button onClick= {addCart}>Add to Cart</button>
        </div>
    )
}

function Product(props) {
const productStyle={
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: 'auto',
    width: 'auto',
    padding: '5px',
    margin: '10px',
    float: 'left'
}
const {name, price} = props.product;

    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button>Add to Cart</button><br/>
            <button>Buy Now</button>
        </div>
    )        
}

export default App;