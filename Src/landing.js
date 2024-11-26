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

const headerContainer = El({  
    element: 'div',  
    className: 'bg-white shadow-md p-4 flex flex-col items-center',  
    children: [  
         
        El({  
            element: 'div',  
            className: 'flex items-center mb-4',  
            children: [  
                El({  
                    element: 'div',  
                    className: 'w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3',  
                    children: ['A'],  
                }),  
                El({  
                    element: 'span',  
                    className: 'text-lg font-semibold',  
                    children: [' Arash Jaafari'], 
                }),  
            ],  
        }),          

        // Search bar section  
        El({  
            element: 'div',  
            className: 'flex items-center w-full',  
            children: [  
                El({  
                    element: 'input',  
                    className: 'flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',  
                    placeholder: 'Search for brands...',  
                    type: 'text',  
                    eventListener: [{  
                        event: 'input',  
                        callback: (e) => {  
                            console.log('Searching for:', e.target.value); // Your search logic here  
                        }  
                    }]  
                }),  
                El({  
                    element: 'button',  
                    className: 'bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 transition',  
                    children: ['Search'],  
                    eventListener: [{  
                        event: 'click',  
                        callback: () => {  
                            console.log('Search button clicked');  
                        }  
                    }]  
                }),  
            ],  
        }),  
    ],  
});  
El({  
    element: 'div',  
    className: 'flex space-x-4 overflow-auto w-full',  
    children: [  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Nike'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Adidas'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Puma'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Asics'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Reebok'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['New Balance'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Converse'] }),  
        El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['More...'] }),  
    ],  
}),  

// Most Popular Section  
El({  
    element: 'h2',  
    className: 'mt-4 font-semibold text-lg',  
    children: ['Most Popular'],  
}),  

// Popular Brands  
El({  
    element: 'div',  
    className: 'flex space-x-2 mt-2',  
    children: [  
        El({ element: 'button', className: 'border p-2 rounded-lg', children: ['All'] }),  
        El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Nike'] }),  
        El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Adidas'] }),  
        El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Puma'] }),  
        El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Asics'] }),  
    ],  
}),  
 


// Append the header container to the body or main app element  
document.body.append(headerContainer);  

    function renderProducts(filter = '', sort = '') {

        const productList = El({
    
            element: 'main',
    
            className: 'grid grid-cols-1 sm:grid-cols-2 gap-4 p-4',
    
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
    
                    className: 'product bg-white rounded-lg shadow-md p-4 m-2',//
    
                    children: [
    
                        El({
    
                            element: 'img',
    
                            
    
                                src: product.images,
    
                                alt: product.brand,
    
                            
    
                            className: 'product-image w-full h-48 object-cover rounded-md',
    
                        }),
    
                        El({
    
                            element: 'h2',
    
                            children: [product.brand],
    
                            className: 'product-name text-lg font-semibold mt-2',
    
                        }),
    
                        El({
    
                            element: 'p',
    
                            children: [`$${product.price}`],
    
                            className: 'product-price text-gray-500 mt-1',
    
                        }),
    
                        El({
    
                            element: 'button',
    
                            children: ['Add to Basket'],
    
                            eventListener: [{
    
                                event: 'click',
    
                                callback: () => addToBasket(product.id),
    
                            }],
    
                            className: 'add-to-basket-button bg-blue-500 text-white py-2 px-8 rounded mt-3 hover:bg-blue-600 transition',
    
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