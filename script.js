    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        renderProducts(products);
    }

    function renderProducts(products) {
        const container = document.getElementById('productContainer');
        container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}"/>
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
            card.addEventListener('click', () => openModal(product));
            container.appendChild(card);
        });
    }

    function openModal(product) {
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('productModal').style.display = 'flex';
    }

        document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('productModal').style.display = 'none';
    });
    
     fetchProducts();
