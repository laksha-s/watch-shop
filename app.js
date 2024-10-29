let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Login functionality not yet implemented for ${username}.`);
});

// Handle Signup Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    alert(`Signup functionality not yet implemented for ${newUsername}.`);
});

// Cart Functionality
function addToCart(productName, price, image) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        alert(`${productName} is already in your cart.`);
    } else {
        cart.push({ name: productName, price: price, image: image });
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('notification').innerText = `${productName} has been added to the cart!`;
    }
}

function addToCartFromModal() {
    const title = document.getElementById('modal-title').innerText;
    const price = document.getElementById('modal-price').innerText;
    const image = document.getElementById('modal-image').src;
    addToCart(title, price, image);
    closeModal();
}

function openModal(title, price, image) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-image').src = image;
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('notification').innerText = "";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Ensure the modal closes when the "x" is clicked
document.querySelector('.close').onclick = closeModal;
