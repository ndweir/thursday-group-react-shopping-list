import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingListForm from '../ShoppingListForm/ShoppingListForm.jsx';

function App() {

    let [allItems, setAllItems] = useState([])
    let [items, setItems] = useState([]);
    let [itemInput, setItemInput] = useState('');

    // fetch shopping items
    const fetchShoppingList = () => {
        // get request
        axios.get('/api/shoppingList').then(response => {
        console.log('response data:   ', response.data)   
        setAllItems(response.data)
        }).catch(err => {
            console.error('GET Error', err)
        })
    }





    return (
        <div className="App">
            <Header />
            <main>
                <div>
                    <h2>Add an Item</h2>
                    <ShoppingListForm fetchShoppingList = {fetchShoppingList} />
                </div>
                
                <div>
                    <h2>Shopping List</h2>
                    current items buy and purchase here!
                </div>
            </main>
        </div>
    );
}

export default App;
