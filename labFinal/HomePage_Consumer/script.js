
const products = [
    {
        id: 1,
        name: "Organic Potatoes",
        farmer: "John Doe",
        price: 40,
        unit: "kg",
        stock: 500,
      
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Freshly harvested organic potatoes from the valleys of Punjab. No chemical fertilizers used."
    },
    {
        id: 2,
        name: "Basmati Rice",
        farmer: "Green Fields Co-op",
        price: 120,
        unit: "kg",
        stock: 1000, 
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Premium aged Basmati rice. Long grain and aromatic, perfect for Biryani."
    },
    {
        id: 3,
        name: "Fresh Tomatoes",
        farmer: "Sarah's Farm",
        price: 30,
        unit: "kg",
        stock: 200,
        image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg://images.unsplash.com/phohttps://tse3.mm.bing.net/th/id/OIP.Po8f886SblhEN0mo_sMKKQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3to-1518994603110-1912b327bfa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        description: "Juicy red tomatoes, picked this morning. Great for curries and salads."
    },
    {
        id: 4,
        name: "Sweet Corn",
        farmer: "Rajesh Kumar",
        price: 15,
        unit: "pc",
        stock: 150,
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Sweet and tender corn cobs. High sugar content and naturally grown."
    }
];


const shopView = document.getElementById('shop-view');
const detailView = document.getElementById('detail-view');
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.getElementById('search-bar-container');
const backBtn = document.getElementById('back-btn');


document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});




function renderProducts(items) {
    productGrid.innerHTML = ""; 

    if(items.length === 0) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        
        card.onclick = () => showProductDetails(product);

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-farmer">By: ${product.farmer}</p>
                <p class="card-price">₹${product.price} / ${product.unit}</p>
            </div>
        `;
        productGrid.appendChild(card);
    });
}


function showProductDetails(product) {
    // Populate Data
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-farmer').textContent = product.farmer;
    document.getElementById('detail-price').textContent = `₹${product.price} / ${product.unit}`;
    document.getElementById('detail-stock').textContent = product.stock;
    document.getElementById('detail-desc').textContent = product.description;

    shopView.style.display = 'none';
    detailView.style.display = 'block';
    searchContainer.style.visibility = 'hidden'; 
    window.scrollTo(0,0); 
}

function goBackToShop() {
    detailView.style.display = 'none';
    shopView.style.display = 'block';
    searchContainer.style.visibility = 'visible';
}




searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
});


backBtn.addEventListener('click', goBackToShop);