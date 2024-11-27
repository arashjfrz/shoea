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
    className: 'bg-white shadow-md p-4 absolute top-0 right-0 left-0 w-full mx-auto',
    children: [

        El({
            element: 'div',
            className: 'mx-auto mb-4 flex items-center justify-center w-96',
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

        El({  
            element: 'div',  
            className: 'grid grid-cols-4 gap-1  overflow-auto justify-center items-center',  
            children: [  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-2 py-2 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1.png" }), // Nike logo  
                        El({ element: 'span', className: '', children: ["Nike"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (1).png" }), // Adidas logo  
                        El({ element: 'span', className: '', children: ["Adidas"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (2).png" }), // Puma logo  
                        El({ element: 'span', className: '', children: ["Puma"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (3).png" }), // Asics logo  
                        El({ element: 'span', className: '', children: ["Asics"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (4).png" }), // Reebok logo  
                        El({ element: 'span', className: '', children: ["Reebok"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (5).png" }), // New Balance logo  
                        El({ element: 'span', className: '', children: ["New Ba.."] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (6).png" }), // Converse logo  
                        El({ element: 'span', className: '', children: ["Converse"] }),  
                    ]}),  
                ]}),  
                El({ element: 'button', className: 'flex flex-col items-center text-gray-600 hover:text-blue-500', children: [  
                    El({ element: 'div', className: 'border-none px-1 py-1 rounded-full', children: [  
                        El({ element: 'img', className: 'bg-gray-200 rounded-full w-10 h-10 p-2', src: "public/image 1 (7).png" }), // More logo  
                        El({ element: 'span', className: '', children: ["More..."] }),  
                    ]}),  
                ]}),  
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
                El({ element: 'div', className: 'border p-2 rounded-lg', children: [  
                    El({ element: 'img', className: 'w-6', src: "" }),  
                    El({ element: 'a', className: '', href: "", children: "all" }),  
                ]}),  
                El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Nike'] }),  
                El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Adidas'] }),  
                El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Puma'] }),  
                El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Asics'] }),  
            ],  
        })]})


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


// Create Footer  
const footer = El({  
    element: 'div',  
    className: 'flex justify-around items-center bg-gray-100 p-2 fixed bottom-0 w-full', // Make it fixed to the bottom  
    children: [  
        El({ element: 'div', className: 'flex flex-col items-center', children: [  
            El({ element: 'img', className: 'w-6 h-6', src: "public/house-door-fill.png", alt: "Home" }),  
            El({ element: 'span', className: 'text-sm', children: ["Home"] }),  
        ]}),  
        El({ element: 'div', className: 'flex flex-col items-center', children: [  
            El({ element: 'img', className: 'w-6 h-6', src: "public/cart2.png", alt: "Cart" }),  
            El({ element: 'span', className: 'text-sm', children: ["Cart"] }),  
        ]}),  
        El({ element: 'div', className: 'flex flex-col items-center', children: [  
            El({ element: 'img', className: 'w-6 h-6', src: "public/bag.png", alt: "Orders" }),  
            El({ element: 'span', className: 'text-sm', children: ["Orders"] }),  
        ]}),  
        El({ element: 'div', className: 'flex flex-col items-center', children: [  
            El({ element: 'img', className: 'w-6 h-6', src: "public/wallet2.png", alt: "Wallet" }),  
            El({ element: 'span', className: 'text-sm', children: ["Wallet"] }),  
        ]}),  
        El({ element: 'div', className: 'flex flex-col items-center', children: [  
            El({ element: 'img', className: 'w-6 h-6', src: "public/person.png", alt: "Profile" }),  
            El({ element: 'span', className: 'text-sm', children: ["Profile"] }),  
        ]}),  
    ],  
});
document.body.appendChild(footer);

export {renderProducts} ;