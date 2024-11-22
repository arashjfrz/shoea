import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import {El} from './elmain.js'


// fetch
async function fetchData() {
    const response = await fetch('http://localhost:5575/Products');
    const data = await response.json();
    return data;
}

// products
function renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productEl = El({
            element: 'div',
            className: 'product',
            children: [
                El({ element: 'h2', children: [product.name] }),
                El({ element: 'p', children: [`Price: $${product.price}`] }),
                El({ element: 'button', children: ['Add to Basket'], eventListener})
            ]})
        })}