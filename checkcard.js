const cartItems = [  
    {  
        id: 1,  
        name: 'Air Jordan 3 Retro',  
        price: 105.00,  
        quantity: 1,  
        size: 42,  
        color: 'Black'  
    },  
    {  
        id: 2,  
        name: 'Running Sportwear',  
        price: 240.00,  
        quantity: 2,  
        size: 41,  
        color: 'Silver'  
    },  
    {  
        id: 3,  
        name: 'New Balance 996',  
        price: 125.00,  
        quantity: 1,  
        size: 42,  
        color: 'Brown Grey'  
    }  
];  

// Utility function to create elements  
function El({ element, className, children, eventListener }) {  
    const el = document.createElement(element);  
    if (className) el.className = className;  
    if (children) {  
        children.forEach(child => {  
            if (typeof child === 'string') {  
                el.appendChild(document.createTextNode(child));  
            } else {  
                el.appendChild(child);  
            }  
        });  
    }  
    if (eventListener) {  
        eventListener.forEach(({ event, callback }) => {  
            el.addEventListener(event, callback);  
        });  
    }  
    return el;  
}  

// Function to render the cart  
function renderCart() {  
    const cartContainer = El({  
        element: 'div',  
        className: 'p-4',  
        children: [  
            El({  
                element: 'h1',  
                className: 'text-2xl font-bold mb-4',  
                children: ['My Cart']  
            }),  
            ...cartItems.map(item => {  
                return El({  
                    element: 'div',  
                    className: 'flex justify-between items-center border-b py-4',  
                    children: [  
                        El({  
                            element: 'div',  
                            className: 'flex items-center',  
                            children: [  
                                El({  
                                    element: 'img',  
                                    src: 'https://via.placeholder.com/100', // Placeholder image  
                                    className: 'h-16 w-16 object-cover rounded-md mr-4',  
                                    alt: item.name  
                                }),  
                                El({  
                                    element: 'div',  
                                    children: [  
                                        El({  
                                            element: 'h2',  
                                            className: 'font-semibold',  
                                            children: [item.name]  
                                        }),  
                                        El({  
                                            element: 'p',  
                                            className: 'text-gray-600',  
                                            children: [`$${item.price.toFixed(2)}`]  
                                        }),  
                                        El({  
                                            element: 'p',  
                                            className: 'text-gray-500',  
                                            children: [`Size: ${item.size} | Color: ${item.color}`]  
                                        })  
                                    ]  
                                })  
                            ]  
                        }),  
                        El({  
                            element: 'div',  
                            className: 'flex items-center',  
                            children: [  
                                El({  
                                    element: 'button',  
                                    className: 'bg-gray-200 px-2 py-1 rounded-l',  
                                    children: ['-'],  
                                    eventListener: [{  
                                        event: 'click',  
                                        callback: () => adjustQuantity(item.id, -1)  
                                    }]  
                                }),  
                                El({  
                                    element: 'span',  
                                    className: 'px-4',  
                                    children: [item.quantity]  
                                }),  
                                El({  
                                    element: 'button',  
                                    className: 'bg-gray-200 px-2 py-1 rounded-r',  
                                    children: ['+'],  
                                    eventListener: [{  
                                        event: 'click',  
                                        callback: () => adjustQuantity(item.id, 1)  
                                    }]  
                                }),  
                                El({  
                                    element: 'button',  
                                    className: 'ml-4 text-red-500',  
                                    children: ['🗑️'],  
                                    eventListener: [{  
                                        event: 'click',  
                                        callback: () => confirmRemoval(item.id)  
                                    }]  
                                })  
                            ]  
                        })  
                    ]  
                });  
            }),  
            El({  
                element: 'h2',  
                className: 'mt-4 font-bold',  
                children: [`Total Price: $${calculateTotal().toFixed(2)}`]  
            }),  
            El({  
                element: 'button',  
                className: 'bg-black text-white py-2 px-4 rounded mt-4',  
                children: ['Checkout'],  
                eventListener: [{  
                    event: 'click',  
                    callback: () => alert('Proceeding to checkout')  
                }]  
            })  
        ]  
    });  

    document.body.append(cartContainer);  
}  

// Function to calculate total price  
function calculateTotal() {  
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);  
}  

// Function to adjust quantity  
function adjustQuantity(id, change) {  
    const item = cartItems.find(i => i.id === id);  
    if (item) {  
        item.quantity += change;  
        if (item.quantity < 1) item.quantity = 1; // Prevent negative quantity  
        renderCart(); // Re-render to update the UI  
    }  
}  

// Function for confirmation removal modal  
function confirmRemoval(id) {  
    const item = cartItems.find(i => i.id === id);  
    if (item) {  
        const confirm = window.confirm(`Remove ${item.name} from cart?`);  
        if (confirm) {  
            cartItems.splice(cartItems.indexOf(item), 1);  
            renderCart(); // Re-render to update the UI  
        }  
    }  
}  

// Initial Render of the Cart  
renderCart();