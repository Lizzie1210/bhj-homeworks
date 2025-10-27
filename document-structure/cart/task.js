const cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

function updateQuantity(product, isIncrement) {
    const quantityControl = product.querySelector('.product__quantity-value');
    let currentQuantity = parseInt(quantityControl.textContent);
    
    currentQuantity = isIncrement ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
    
    quantityControl.textContent = currentQuantity;
}

function addToCart(product) {
    if (!cart) return;

    const productId = product.dataset.id;
    const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
    const imageSrc = product.querySelector('.product__image').src;
    
    let existingProduct = Array.from(cart.children).find(item => item.dataset.id === productId);
    
    if (existingProduct) {
        const currentCount = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
        existingProduct.querySelector('.cart__product-count').textContent = currentCount + quantity;
    } else {
        const newProduct = document.createElement('div');
        newProduct.classList.add('cart__product');
        newProduct.dataset.id = productId;
        
        const image = document.createElement('img');
        image.classList.add('cart__product-image');
        image.src = imageSrc;
        
        const count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.textContent = quantity;
        
        newProduct.append(image, count);
        cart.append(newProduct);
    }
}

products.forEach(product => {
    product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        updateQuantity(product, true);
    });
    
    product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        updateQuantity(product, false);
    });
    
    product.querySelector('.product__add').addEventListener('click', () => {
        addToCart(product);
    });
});
