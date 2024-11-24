const products = await fetchProducts();  
let filteredProducts = products;  

// Filtering  
if (filter) {  
    filteredProducts = filteredProducts.filter(product =>  
        product.name.toLowerCase().includes(filter.toLowerCase())  
    );  
}  

// Sorting  
if (sort === 'price-asc') {  
    filteredProducts.sort((a, b) => a.price - b.price);  
} else if (sort === 'price-desc') {  
    filteredProducts.sort((a, b) => b.price - a.price);  
}  
let listpro=[];
filteredProducts.forEach(product => {  
    const productDiv = El({  
        element: 'div',  
        className: 'product',  
        children: [  
            El({  
                element: 'img',  
                restAttrs: {  
                    src: product.image,  
                    alt: product.name,  
                },  
                className: 'product-image',  
            }),  
            El({  
                element: 'h2',  
                children: [product.name],  
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
   listpro.push(productDiv);  
})
return listpro;
