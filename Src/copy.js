// const products = await fetchProducts();  
// let filteredProducts = products;  

// // Filtering  
// if (filter) {  
//     filteredProducts = filteredProducts.filter(product =>  
//         product.name.toLowerCase().includes(filter.toLowerCase())  
//     );  
// }  

// // Sorting  
// if (sort === 'price-asc') {  
//     filteredProducts.sort((a, b) => a.price - b.price);  
// } else if (sort === 'price-desc') {  
//     filteredProducts.sort((a, b) => b.price - a.price);  
// }  
// let listpro=[];
// filteredProducts.forEach(product => {  
//     const productDiv = El({  
//         element: 'div',  
//         className: 'product',  
//         children: [  
//             El({  
//                 element: 'img',  
//                 restAttrs: {  
//                     src: product.image,  
//                     alt: product.name,  
//                 },  
//                 className: 'product-image',  
//             }),  
//             El({  
//                 element: 'h2',  
//                 children: [product.name],  
//                 className: 'product-name',  
//             }),  
//             El({  
//                 element: 'p',  
//                 children: [`$${product.price}`],  
//                 className: 'product-price',  
//             }),  
//             El({  
//                 element: 'button',  
//                 children: ['Add to Basket'],  
//                 eventListener: [{  
//                     event: 'click',  
//                     callback: () => addToBasket(product.id),  
//                 }],  
//                 className: 'add-to-basket-button',  
//             }),  
//         ],  
//     });  
//    listpro.push(productDiv);  
// })
// return listpro;

// const headerContainer = El({  
//     element: 'div',  
//     className: 'bg-white shadow-md p-4 flex flex-col items-center',  
//     children: [  

//         El({  
//             element: 'div',  
//             className: 'flex items-center mb-4',  
//             children: [  
//                 El({  
//                     element: 'div',  
//                     className: 'w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3',  
//                     children: ['A'],  
//                 }),  
//                 El({  
//                     element: 'span',  
//                     className: 'text-lg font-semibold',  
//                     children: [' Arash Jaafari'], 
//                 }),  
//             ],  
//         })]})
// const headerContainer = El({
//     element: 'div',
//     className: 'bg-white shadow-md p-4 fixed top-0 right-0 left-0 w-full',
//     children: [

//         El({
//             element: 'div',
//             className: 'mx-auto mb-4 flex items-center justify-center w-96',
//             children: [
//                 El({
//                     element: 'div',
//                     className: 'w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3',
//                     children: ['A'],
//                 }),
//                 El({
//                     element: 'span',
//                     className: 'text-lg font-semibold',
//                     children: [' Arash Jaafari'],
//                 }),
//             ],
//         }),

//         // Search bar section  
//         El({
//             element: 'div',
//             className: 'flex items-center w-full',
//             children: [
//                 El({
//                     element: 'input',
//                     className: 'flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
//                     placeholder: 'Search for brands...',
//                     type: 'text',
//                     eventListener: [{
//                         event: 'input',
//                         callback: (e) => {
//                             console.log('Searching for:', e.target.value); // Your search logic here  
//                         }
//                     }]
//                 }),
//                 El({
//                     element: 'button',
//                     className: 'bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 transition',
//                     children: ['Search'],
//                     eventListener: [{
//                         event: 'click',
//                         callback: () => {
//                             console.log('Search button clicked');
//                         }
//                     }]
//                 }),
//             ],
//         }),

//         El({
//             element: 'div',
//             className: 'flex space-x-4 overflow-auto w-full',
//             children: [
//                 El({ element: 'button',
//                      className: 'text-gray-600 hover:text-blue-500', 
//                      children: [
//                         El({ element: 'div', className: 'border p-2 rounded-lg', 
//                         children: [
//                     El({ element: 'img', className: 'w-6 bg-gray-600 rounded-full', src:"public/image 1.png" }),
//                     El({ element: 'text', className:"", href:"", children:["Nike"]  }),
//                     ]}),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Adidas'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Puma'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Asics'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Reebok'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['New Balance'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['Converse'] }),
//                 El({ element: 'button', className: 'text-gray-600 hover:text-blue-500', children: ['More...'] }),
//             ],
//         }),

//         // Most Popular Section  
//         El({
//             element: 'h2',
//             className: 'mt-4 font-semibold text-lg',
//             children: ['Most Popular'],
//         }),

//         // Popular Brands  
//         El({
//             element: 'div',
//             className: 'flex space-x-2 mt-2',
//             children: [
//                 El({ element: 'div', className: 'border p-2 rounded-lg', children: [
//                     El({ element: 'img', className: 'w-6', src:"" }),
//                     El({ element: 'a', className: '', href:"", children:"all"  }),

//                 ] }),
//                 El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Nike'] }),
//                 El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Adidas'] }),
//                 El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Puma'] }),
//                 El({ element: 'button', className: 'border p-2 rounded-lg', children: ['Asics'] }),
//             ],
//         }),
//     ],
// })]});
function createProductList(products) {
    const productListContainer = El({ element: 'div', className: 'product-list' });

    products.forEach(product => {
        const productItem = El({
            element: 'div',
            className: 'product-item cursor-pointer',
            children: [

                El({
                    element: 'img',
                    src: product.image,
                    alt: product.name,
                    className: 'w-full h-40 object-cover',
                }),
                El({
                    element: 'h2',
                    className: 'text-lg font-bold',
                    children: [product.name],
                }),
            ],
            eventListener: [{
                event: 'click',
                callback: () => createProductDetailPage(product),
            }],
        });
        productListContainer.append(productItem);
    });

    document.body.append(productListContainer);

}  