const API_URL = 'http://localhost:5575/Products';  
import { El } from "../elmain";
async function fetchProducts() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error('Network response was not ok: ' + response.statusText);

        }

        const data = await response.json();

        return data; // Adjust based on your API response structure  

    } catch (error) {

        console.error('There has been a problem with your fetch operation:', error);

        return [];

    }

}

    function renderProducts(filter = '', sort = '') {

        const productList = El({
    
            element: 'main',
    
            className: 'product-list',
    
        }); 

    

        fetchProducts().then((data) => {

            let filteredProducts = data
    
            // Filtering  
    
            if (filter) {
    
                filteredProducts = filteredProducts.filter(product =>
    
                    product.brand.toLowerCase().includes(filter.toLowerCase())
    
                );
    
            }
    
    
    
            // Sorting  
    
            if (sort === 'price-asc') {
    
                filteredProducts.sort((a, b) => a.price - b.price);
    
            } else if (sort === 'price-desc') {
    
                filteredProducts.sort((a, b) => b.price - a.price);
    
            }
    
            filteredProducts.forEach(product => {
    
                const productDiv = El({
    
                    element: 'div',
    
                    className: 'product',//
    
                    children: [
    
                        El({
    
                            element: 'img',
    
                            
    
                                src: product.images,
    
                                alt: product.brand,
    
                            
    
                            className: 'product-image',
    
                        }),
    
                        El({
    
                            element: 'h2',
    
                            children: [product.brand],
    
                            className: 'product-name',
    
                        }),
    
                        El({
    
                            element: 'p',
    
                            children: [`$${product.price}`],
    
                            className: 'product-price',
    
                        }),
    
                        El({
    
                            element: 'button',
    
                            children: ['Add to Basket'],
    
                            eventListener: [{
    
                                event: 'click',
    
                                callback: () => addToBasket(product.id),
    
                            }],
    
                            className: 'add-to-basket-button',
    
                        }),
    
                    ],
    
                });
    
                console.log(productDiv)
    
                productList.append(productDiv)
    
            })
    
        });
    
        return productList
    
    
    
    
    
    }

 

const basket = [];  

function addToBasket(productId) {  
    const product = products.find(p => p.id === productId);  
    if (!basket.includes(product)) {  
        basket.push(product);  
        alert(`${product.brand} added to basket!`);  
    } else {  
        alert(`${product.brand} is already in your basket.`);  
    }  
}  

// Create Header  
const header = El({  
    element: 'header',  
    className: 'flex items-center justify-center bg-red-300',  
    children: [  
        El({  
            element: 'h1',  
            children: ['Sneaker Shop'],  
            className: 'text-white text-2xl font-bold',  
        }),  
        El({  
            element: 'input',  
            restAttrs: {  
                type: 'text',  
                placeholder: 'Search...',  
            },  
            className: 'p-2 rounded mx-2',  
        }),  
        El({  
            element: 'select',  
            className: 'p-2 rounded mx-2',  
            children: [  
                El({ element: 'option', children: ['Most Popular'], value: 'popular' }),  
                El({ element: 'option', children: ['Price: Low to High'], value: 'price-asc' }),  
                El({ element: 'option', children: ['Price: High to Low'], value: 'price-desc' }),  
            ],  
        }),  
    ],  
    eventListener: [  
        {  
            event: 'input',  
            callback: (e) => {  
                const filter = e.target.value;  
                renderProducts(filter, document.querySelector('select').value);  
            },  
        },  
        {  
            event: 'change',  
            callback: (e) => {  
                const sort = e.target.value;  
                renderProducts(document.querySelector('input').value, sort);  
            },  
        },  
    ],  
});  

// Create Product List  
const productList = El({  
    element: 'main',  
    className: 'product-list',  
});  

// Create Footer  
const footer = El({  
    element: 'footer',  
    className: 'flex justify-center p-4 bg-gray-200',  
    children: [  
        El({  
            element: 'button',  
            children: ['View Basket'],  
            eventListener: [  
                {  
                    event: 'click',  
                    callback: () => {  
                        alert('Viewing basket: ' + basket.map(p => p.name).join(', '));  
                    },  
                },  
            ],  
        }),  
    ],  
});  


export {renderProducts} ;