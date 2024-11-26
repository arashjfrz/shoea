import { El } from "./elmain";
import { router } from "./src/navigo";
// Main Product Detail Function  
function createProductDetailPage(product) {  
    const container = El({  
        element: 'div',  
        className: 'max-w-md mx-auto my-10 bg-white rounded-lg shadow-lg overflow-hidden',  
        children: [  
            // Product Image  
            El({  
                element: 'div',  
                className: 'relative',  
                children: [  
                    El({  
                        element: 'img',  
                        src: product.image,  
                        alt: product.name,  
                        className: 'w-full h-60 object-cover',  
                    }),  
                    El({  
                        element: 'div',  
                        className: 'absolute top-3 left-3 text-white bg-black px-2 py-1 rounded',  
                        children: [`${product.unitsSold} sold`],  
                    }),  
                ],  
            }),  
            // Product Details  
            El({  
                element: 'div',  
                className: 'p-4',  
                children: [  
                    El({  
                        element: 'h1',  
                        className: 'text-xl font-bold',  
                        children: [product.name],  
                    }),  
                    El({  
                        element: 'div',  
                        className: 'text-gray-500 mt-1',  
                        children: [`${product.rating} (${product.reviews} reviews)`],  
                    }),  
                    El({  
                        element: 'h2',  
                        className: 'mt-4 font-semibold',  
                        children: ['Description'],  
                    }),  
                    El({  
                        element: 'p',  
                        className: 'text-gray-700',  
                        children: [product.description],  
                    }),  
                    // Size Selection  
                    El({  
                        element: 'div',  
                        className: 'mt-4',  
                        children: [  
                            El({  
                                element: 'span',  
                                className: 'font-semibold',  
                                children: ['Size:'],  
                            }),  
                            El({  
                                element: 'div',  
                                className: 'flex space-x-2 mt-2',  
                                children: product.sizes.map(size =>   
                                    El({  
                                        element: 'button',  
                                        className: 'border rounded-full px-3 py-1 text-gray-700 hover:bg-blue-100',  
                                        children: [size],  
                                    })  
                                ),  
                            }),  
                        ],  
                    }),  
                    // Color Selection  
                    El({  
                        element: 'div',  
                        className: 'mt-4',  
                        children: [  
                            El({  
                                element: 'span',  
                                className: 'font-semibold',  
                                children: ['Color:'],  
                            }),  
                            El({  
                                element: 'div',  
                                className: 'flex space-x-2 mt-2',  
                                children: product.colors.map(color =>   
                                    El({  
                                        element: 'button',  
                                        className: `w-8 h-8 rounded-full border ${color.bgClass} hover:ring-2`,  
                                    })  
                                ),  
                            }),  
                        ],  
                    }),  
                    // Quantity Section  
                    El({  
                        element: 'div',  
                        className: 'mt-4 flex items-center',  
                        children: [  
                            El({  
                                element: 'span',  
                                className: 'font-semibold',  
                                children: ['Quantity:'],  
                            }),  
                            El({  
                                element: 'button',  
                                className: 'bg-gray-200 rounded-full px-2 ml-2',  
                                children: ['-'],  
                                eventListener: [{  
                                    event: 'click',  
                                    callback: () => {  
                                        // Handle decrease quantity logic here  
                                        console.log('Decrease quantity');  
                                    },  
                                }],  
                            }),  
                            El({  
                                element: 'span',  
                                className: 'mx-2',  
                                children: ['2'], // Quantity display  
                            }),  
                            El({  
                                element: 'button',  
                                className: 'bg-gray-200 rounded-full px-2',  
                                children: ['+'],  
                                eventListener: [{  
                                    event: 'click',  
                                    callback: () => {  
                                        // Handle increase quantity logic here  
                                        console.log('Increase quantity');  
                                    },  
                                }],  
                            }),  
                        ],  
                    }),  
                    // Total Price  
                    El({  
                        element: 'div',  
                        className: 'mt-4 font-bold',  
                        children: [`Total price: $${product.price}`],  
                    }),  
                    // Add to Cart Button  
                    El({  
                        element: 'button',  
                        className: 'mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition',  
                        children: ['Add to Cart'],  
                        eventListener: [{  
                            event: 'click',  
                            callback: () => {  
                                // Handle add to cart logic here  
                                console.log('Added to cart');  
                            },  
                        }],  
                    }),  
                ],  
            }),  
        ],  
    });  

    document.body.append(container);  
}  

// Sample Product Data  
const productData = {  
    image: 'https://example.com/product-image.jpg',  
    name: 'Running Sportwear',  
    unitsSold: '5,371',  
    rating: '4.3',  
    reviews: '3,589',  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',  
    sizes: ['40', '41', '42', '43'],  
    colors: [  
        { bgClass: 'bg-red-400' },  
        { bgClass: 'bg-blue-400' },  
        { bgClass: 'bg-green-400' },  
        { bgClass: 'bg-purple-400' },  
    ],  
    price: '240',  
};  

// Initialize the Product Detail Page  
createProductDetailPage(productData);