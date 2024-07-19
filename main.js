const cartContainer = document.getElementById('cart');
const buttons = document.querySelectorAll('.btn');

// Save the data from the cart
function saveCart(e) {
    const cartt = JSON.parse(localStorage.getItem('cartitems')) || [];
    const click = e.target.closest('.product');
    const imgsr = click.querySelector('img').src;
    const title = click.querySelector('.title').textContent;
    const description = click.querySelector('.description').textContent;
    cartt.push({ imgsr, title, description });

    localStorage.setItem('cartitems', JSON.stringify(cartt));
}

// Load items into the cart
function load() {
    const cartt = JSON.parse(localStorage.getItem('cartitems')) || [];
    cartt.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-items';
        cartItem.innerHTML = `
            <img src="${item.imgsr}" alt="${item.title}" class="self-start">
            <div>
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

load();

buttons.forEach(b => b.addEventListener('click', function(e) {
    const click = e.target.closest('.product');
    const imgsr = click.querySelector('img').src;
    const title = click.querySelector('.title').textContent;
    const description = click.querySelector('.description').textContent;
    const createe = document.createElement('div');
    createe.className = 'cart-items';
    createe.innerHTML = `
        <img src="${imgsr}" alt="" class="self-start">
        <div>
            <p class="title">${title}</p>
            <p class="description">${description}</p>
        </div>
    `;
    cartContainer.appendChild(createe);

    // Save the item to local storage
    saveCart(e);
}));
