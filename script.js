// Dữ liệu sản phẩm mở rộng
const products = [
    {
        id: 1,
        name: "Nike Air Force 1",
        price: 2890000,
        category: "sneaker",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        description: "Giày thể thao cổ điển với thiết kế iconic và độ bền cao",
        features: ["Da cao cấp", "Đế Air cushioning", "Thiết kế cổ điển", "Phù hợp nhiều hoạt động"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 3200000,
        category: "sneaker",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        description: "Giày chạy bộ với công nghệ Boost mang lại sự thoải mái tối đa",
        features: ["Công nghệ Boost", "Upper Primeknit", "Torsion System", "Continental Rubber"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 3,
        name: "Oxford Classic",
        price: 2500000,
        category: "formal",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
        description: "Giày tây sang trọng phù hợp cho các dịp trang trọng",
        features: ["Da bò thật", "Đế cao su chống trượt", "Thiết kế thanh lịch", "Phù hợp công sở"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 4,
        name: "Converse Chuck Taylor",
        price: 1890000,
        category: "casual",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=300&fit=crop",
        description: "Giày vải classic với phong cách retro độc đáo",
        features: ["Vải canvas bền", "Đế cao su vulcanized", "Thiết kế vintage", "Dễ phối đồ"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 5,
        name: "Vans Old Skool",
        price: 2100000,
        category: "casual",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop",
        description: "Giày skate iconic với thiết kế stripe đặc trưng",
        features: ["Waffle Outsole", "Padded collar", "Reinforced toecaps", "Skate-inspired"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 6,
        name: "Clarks Desert Boot",
        price: 2800000,
        category: "boots",
        image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=300&fit=crop",
        description: "Boot da lộn cao cấp với phong cách lịch lãm",
        features: ["Da lộn chính hãng", "Đế crepe tự nhiên", "Thiết kế desert boot", "Phong cách British"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 7,
        name: "New Balance 574",
        price: 2400000,
        category: "sneaker",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
        description: "Giày thể thao với sự kết hợp hoàn hảo giữa phong cách và thoải mái",
        features: ["ENCAP midsole", "Suede và mesh upper", "Classic 574 silhouette", "All-day comfort"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 8,
        name: "Dr. Martens 1460",
        price: 3500000,
        category: "boots",
        image: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=300&fit=crop",
        description: "Boot da bền bỉ với thiết kế punk rock đặc trưng",
        features: ["Smooth leather", "AirWair sole", "Goodyear welt", "8-eye design"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 9,
        name: "Puma Suede Classic",
        price: 2200000,
        category: "casual",
        image: "https://images.unsplash.com/photo-1606107557132-6cf13f55ff41?w=400&h=300&fit=crop",
        description: "Giày da lộn cổ điển với thiết kế iconic của Puma",
        features: ["Suede upper", "Rubber outsole", "Vintage styling", "Street-ready"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 10,
        name: "Reebok Classic",
        price: 1950000,
        category: "sneaker",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
        description: "Giày thể thao retro với phong cách thập niên 80",
        features: ["Leather upper", "Low-cut design", "Die-cut EVA midsole", "Retro styling"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 11,
        name: "Timberland Boot",
        price: 3800000,
        category: "boots",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d28?w=400&h=300&fit=crop",
        description: "Boot cao cổ chống thấm nước với độ bền vượt trội",
        features: ["Waterproof leather", "Padded collar", "Steel shank", "Rubber lug outsole"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    },
    {
        id: 12,
        name: "Gucci Ace Sneaker",
        price: 12000000,
        category: "formal",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop",
        description: "Giày sneaker cao cấp với thiết kế luxury từ Gucci",
        features: ["Italian leather", "Embroidered details", "Rubber sole", "Luxury design"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true
    }
];

// Dữ liệu người dùng (localStorage)
let users = JSON.parse(localStorage.getItem('wwed_users')) || [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "user@example.com",
        phone: "0123456789",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        password: "123456",
        status: "active"
    }
];

// Dữ liệu đơn hàng (localStorage)
let orders = JSON.parse(localStorage.getItem('wwed_orders')) || [];

// Dữ liệu giỏ hàng và user hiện tại
let cart = JSON.parse(localStorage.getItem('wwed_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('wwed_current_user')) || null;

// Cấu hình phân trang
const PRODUCTS_PER_PAGE = 6;
let currentPage = 1;
let filteredProducts = [...products];
let currentProductInModal = null;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const pagination = document.getElementById('pagination');

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', function() {
    updateAuthDisplay();
    displayProducts();
    updateCartDisplay();
    setupEventListeners();
    
    // Cập nhật dữ liệu vào localStorage
    localStorage.setItem('wwed_products', JSON.stringify(products));
});

// Setup Event Listeners
function setupEventListeners() {
    // Auth buttons
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginModal);
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', showRegisterModal);
    }
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            closeModal(modalId);
        });
    });
    
    // Modal background click to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
    
    // Switch forms
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    
    if (loginModal) {
        const switchToRegisterBtn = loginModal.querySelector('.switch-form a');
        if (switchToRegisterBtn) {
            switchToRegisterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                switchToRegister();
            });
        }
    }
    
    if (registerModal) {
        const switchToLoginBtn = registerModal.querySelector('.switch-form a');
        if (switchToLoginBtn) {
            switchToLoginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                switchToLogin();
            });
        }
    }
    
    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', register);
    }
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterProducts(filter);
        });
    });
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length > 19) formattedValue = formattedValue.substr(0, 19);
            e.target.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
}

// Authentication Functions
function updateAuthDisplay() {
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    
    if (currentUser) {
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        userName.textContent = currentUser.name;
    } else {
        authButtons.style.display = 'flex';
        userInfo.style.display = 'none';
    }
}

function showLoginModal() {
    document.getElementById('login-modal').classList.add('active');
}

function showRegisterModal() {
    document.getElementById('register-modal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function switchToRegister() {
    closeModal('login-modal');
    showRegisterModal();
}

function switchToLogin() {
    closeModal('register-modal');
    showLoginModal();
}

function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const user = users.find(u => u.email === email && u.password === password && u.status === 'active');
    
    if (user) {
        currentUser = user;
        localStorage.setItem('wwed_current_user', JSON.stringify(currentUser));
        updateAuthDisplay();
        closeModal('login-modal');
        showAlert('Đăng nhập thành công!', 'success');
    } else {
        showAlert('Email hoặc mật khẩu không chính xác!', 'error');
    }
}

function register(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        showAlert('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showAlert('Email đã được sử dụng!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
        password,
        status: 'active'
    };
    
    users.push(newUser);
    localStorage.setItem('wwed_users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('wwed_current_user', JSON.stringify(currentUser));
    
    updateAuthDisplay();
    closeModal('register-modal');
    showAlert('Đăng ký thành công!', 'success');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('wwed_current_user');
    updateAuthDisplay();
    showAlert('Đăng xuất thành công!', 'success');
}

// Hiển thị sản phẩm
function displayProducts(productList) {
    productsGrid.innerHTML = '';
    
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Thêm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    
    // Animation effect
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    button.innerHTML = '<i class="fas fa-check"></i> Đã thêm!';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
    }, 1000);
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
    
    updateCartModal();
}

// Cập nhật modal giỏ hàng
function updateCartModal() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Giỏ hàng của bạn đang trống</p>';
        cartTotal.textContent = '0đ';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Cập nhật số lượng
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
    }
}

// Xóa khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Mở giỏ hàng
function openCart() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Đóng giỏ hàng
function closeCart() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Product Display Functions
function displayProducts() {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    updatePagination();
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="showProductDetail(${product.id})">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="description">${product.description}</p>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
                <button class="view-detail" onclick="showProductDetail(${product.id})">
                    <i class="fas fa-eye"></i> Xem chi tiết
                </button>
            </div>
        </div>
    `;
    return card;
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹ Trước';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevBtn);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';
        pageBtn.onclick = () => changePage(i);
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Sau ›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextBtn);
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayProducts();
    scrollToProducts();
}

// Search and Filter Functions
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayProducts();
    
    // Show search results message
    if (searchTerm.trim() !== '') {
        showAlert(`Tìm thấy ${filteredProducts.length} sản phẩm cho "${searchTerm}"`, 'info');
    }
}

function filterProducts(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    currentPage = 1;
    displayProducts();
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredProducts = products.filter(product => {
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesPrice && matchesSearch;
    });
    
    currentPage = 1;
    displayProducts();
    
    showAlert(`Tìm thấy ${filteredProducts.length} sản phẩm phù hợp`, 'info');
}

function resetFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('searchInput').value = '';
    
    filteredProducts = [...products];
    currentPage = 1;
    displayProducts();
}

// Product Detail Functions
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductInModal = product;
    
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productPrice').textContent = formatPrice(product.price);
    document.getElementById('productCategory').textContent = getCategoryName(product.category);
    document.getElementById('productDescription').textContent = product.description;
    
    // Features
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Reset quantity
    document.getElementById('quantityInput').value = 1;
    
    document.getElementById('product-modal').classList.add('active');
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantityInput');
    const currentValue = parseInt(quantityInput.value);
    const newValue = currentValue + change;
    
    if (newValue >= 1 && newValue <= 10) {
        quantityInput.value = newValue;
    }
}

function addToCartFromDetail() {
    if (!currentUser) {
        showAlert('Vui lòng đăng nhập để mua hàng!', 'error');
        closeModal('product-modal');
        showLoginModal();
        return;
    }
    
    const productId = currentProductInModal.id;
    const size = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    
    addToCart(productId, size, quantity);
    closeModal('product-modal');
}

// Cart Functions
function addToCart(productId, size = '40', quantity = 1) {
    if (!currentUser) {
        showAlert('Vui lòng đăng nhập để mua hàng!', 'error');
        showLoginModal();
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            quantity
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showAlert(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.productId === productId && item.size === size));
    updateCartDisplay();
    saveCartToStorage();
}

function updateCartQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.productId === productId && item.size === size);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.querySelector('.cart-count');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        cartTotalElement.textContent = '0đ';
        cartCountElement.textContent = '0';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>Size: ${item.size}</p>
                <p class="item-price">${formatPrice(item.price)}</p>
            </div>
            <div class="quantity-controls">
                <button onclick="updateCartQuantity(${item.productId}, '${item.size}', ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.productId}, '${item.size}', ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.productId}, '${item.size}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalElement.textContent = formatPrice(total);
    cartCountElement.textContent = totalItems;
}

function openCart() {
    document.getElementById('cart-modal').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('active');
}

function saveCartToStorage() {
    localStorage.setItem('wwed_cart', JSON.stringify(cart));
}

// Checkout Functions
function showCheckout() {
    if (!currentUser) {
        showAlert('Vui lòng đăng nhập để thanh toán!', 'error');
        closeCart();
        showLoginModal();
        return;
    }
    
    if (cart.length === 0) {
        showAlert('Giỏ hàng trống!', 'error');
        return;
    }
    
    closeCart();
    resetCheckoutForm();
    document.getElementById('checkout-modal').classList.add('active');
    showCheckoutStep(1);
}

function resetCheckoutForm() {
    // Reset all form inputs
    document.querySelectorAll('#checkout-modal input, #checkout-modal select, #checkout-modal textarea').forEach(input => {
        input.value = '';
        input.checked = false;
    });
    
    // Hide all address and payment forms
    document.getElementById('savedAddress').style.display = 'none';
    document.getElementById('newAddressForm').style.display = 'none';
    document.getElementById('transferInfo').style.display = 'none';
    document.getElementById('cardPaymentForm').style.display = 'none';
}

function showCheckoutStep(step) {
    // Update step indicators
    document.querySelectorAll('.step').forEach((stepEl, index) => {
        stepEl.classList.toggle('active', index + 1 === step);
    });
    
    // Show/hide step content
    document.querySelectorAll('.checkout-step').forEach((stepEl, index) => {
        stepEl.style.display = index + 1 === step ? 'block' : 'none';
    });
    
    if (step === 1) {
        // Load saved address
        document.getElementById('userSavedAddress').textContent = currentUser.address;
    } else if (step === 3) {
        // Update order summary
        updateOrderSummary();
    }
}

function nextStep() {
    const currentStepEl = document.querySelector('.step.active');
    const currentStep = parseInt(currentStepEl.dataset.step);
    
    if (validateCurrentStep(currentStep)) {
        showCheckoutStep(currentStep + 1);
    }
}

function prevStep() {
    const currentStepEl = document.querySelector('.step.active');
    const currentStep = parseInt(currentStepEl.dataset.step);
    
    if (currentStep > 1) {
        showCheckoutStep(currentStep - 1);
    }
}

function validateCurrentStep(step) {
    if (step === 1) {
        const addressType = document.querySelector('input[name="addressType"]:checked');
        if (!addressType) {
            showAlert('Vui lòng chọn địa chỉ giao hàng!', 'error');
            return false;
        }
        
        if (addressType.value === 'new') {
            const receiverName = document.getElementById('receiverName').value;
            const receiverPhone = document.getElementById('receiverPhone').value;
            const receiverAddress = document.getElementById('receiverAddress').value;
            const district = document.getElementById('district').value;
            
            if (!receiverName || !receiverPhone || !receiverAddress || !district) {
                showAlert('Vui lòng điền đầy đủ thông tin giao hàng!', 'error');
                return false;
            }
        }
    } else if (step === 2) {
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethod) {
            showAlert('Vui lòng chọn phương thức thanh toán!', 'error');
            return false;
        }
        
        if (paymentMethod.value === 'card') {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            const cardHolderName = document.getElementById('cardHolderName').value;
            
            if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
                showAlert('Vui lòng điền đầy đủ thông tin thẻ!', 'error');
                return false;
            }
        }
    }
    
    return true;
}

function toggleAddressForm() {
    const addressType = document.querySelector('input[name="addressType"]:checked');
    const savedAddress = document.getElementById('savedAddress');
    const newAddressForm = document.getElementById('newAddressForm');
    
    if (addressType.value === 'saved') {
        savedAddress.style.display = 'block';
        newAddressForm.style.display = 'none';
    } else {
        savedAddress.style.display = 'none';
        newAddressForm.style.display = 'block';
    }
}

function togglePaymentForm() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const transferInfo = document.getElementById('transferInfo');
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    
    // Hide all payment forms first
    transferInfo.style.display = 'none';
    cardPaymentForm.style.display = 'none';
    
    if (paymentMethod.value === 'transfer') {
        transferInfo.style.display = 'block';
    } else if (paymentMethod.value === 'card') {
        cardPaymentForm.style.display = 'block';
    }
}

function updateOrderSummary() {
    const addressType = document.querySelector('input[name="addressType"]:checked');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    // Shipping summary
    let shippingInfo = '';
    if (addressType.value === 'saved') {
        shippingInfo = `
            <p><strong>Người nhận:</strong> ${currentUser.name}</p>
            <p><strong>Điện thoại:</strong> ${currentUser.phone}</p>
            <p><strong>Địa chỉ:</strong> ${currentUser.address}</p>
        `;
    } else {
        const receiverName = document.getElementById('receiverName').value;
        const receiverPhone = document.getElementById('receiverPhone').value;
        const receiverAddress = document.getElementById('receiverAddress').value;
        const district = document.getElementById('district').value;
        
        shippingInfo = `
            <p><strong>Người nhận:</strong> ${receiverName}</p>
            <p><strong>Điện thoại:</strong> ${receiverPhone}</p>
            <p><strong>Địa chỉ:</strong> ${receiverAddress}, ${getDistrictName(district)}</p>
        `;
    }
    
    document.getElementById('summaryShipping').innerHTML = shippingInfo;
    
    // Payment summary
    const paymentNames = {
        'cash': 'Thanh toán tiền mặt khi nhận hàng',
        'transfer': 'Chuyển khoản ngân hàng',
        'card': 'Thanh toán qua thẻ'
    };
    
    document.getElementById('summaryPayment').innerHTML = `<p>${paymentNames[paymentMethod.value]}</p>`;
    
    // Products summary
    let productsHtml = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        productsHtml += `
            <div class="summary-product">
                <p>${item.name} (Size: ${item.size}) x ${item.quantity}</p>
                <p>${formatPrice(itemTotal)}</p>
            </div>
        `;
    });
    
    document.getElementById('summaryProducts').innerHTML = productsHtml;
    document.getElementById('summaryTotal').textContent = formatPrice(total);
}

function placeOrder() {
    const addressType = document.querySelector('input[name="addressType"]:checked');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    // Create order object
    const order = {
        id: 'ORD' + Date.now(),
        customerId: currentUser.id,
        customerName: currentUser.name,
        customerEmail: currentUser.email,
        customerPhone: currentUser.phone,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: paymentMethod.value,
        status: 'pending',
        date: new Date().toISOString(),
        district: ''
    };
    
    // Add shipping info
    if (addressType.value === 'saved') {
        order.shippingAddress = currentUser.address;
        order.receiverName = currentUser.name;
        order.receiverPhone = currentUser.phone;
        // Try to extract district from address (simplified)
        order.district = extractDistrictFromAddress(currentUser.address);
    } else {
        order.receiverName = document.getElementById('receiverName').value;
        order.receiverPhone = document.getElementById('receiverPhone').value;
        order.shippingAddress = document.getElementById('receiverAddress').value;
        order.district = document.getElementById('district').value;
    }
    
    // Save order
    orders.push(order);
    localStorage.setItem('wwed_orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    saveCartToStorage();
    
    // Close modal and show success
    closeModal('checkout-modal');
    showAlert(`Đặt hàng thành công! Mã đơn hàng: ${order.id}`, 'success');
}

// Order History Functions
function showOrderHistory() {
    if (!currentUser) {
        showAlert('Vui lòng đăng nhập!', 'error');
        return;
    }
    
    const userOrders = orders.filter(order => order.customerId === currentUser.id);
    const orderHistoryList = document.getElementById('orderHistoryList');
    
    if (userOrders.length === 0) {
        orderHistoryList.innerHTML = '<p class="no-orders">Bạn chưa có đơn hàng nào.</p>';
    } else {
        orderHistoryList.innerHTML = '';
        
        userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(order => {
            const orderElement = createOrderHistoryItem(order);
            orderHistoryList.appendChild(orderElement);
        });
    }
    
    document.getElementById('order-history-modal').classList.add('active');
}

function createOrderHistoryItem(order) {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-item';
    
    const statusNames = {
        'pending': 'Chưa xử lý',
        'confirmed': 'Đã xác nhận',
        'delivered': 'Đã giao',
        'cancelled': 'Đã hủy'
    };
    
    const paymentNames = {
        'cash': 'Tiền mặt',
        'transfer': 'Chuyển khoản',
        'card': 'Thẻ'
    };
    
    orderDiv.innerHTML = `
        <div class="order-header">
            <span class="order-id">${order.id}</span>
            <span class="order-status ${order.status}">${statusNames[order.status]}</span>
        </div>
        <div class="order-info">
            <p><strong>Ngày đặt:</strong> ${formatDate(order.date)}</p>
            <p><strong>Thanh toán:</strong> ${paymentNames[order.paymentMethod]}</p>
            <p><strong>Địa chỉ:</strong> ${order.shippingAddress}</p>
        </div>
        <div class="order-products">
            <strong>Sản phẩm:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}
        </div>
        <div class="order-total">
            <strong>Tổng tiền: ${formatPrice(order.total)}</strong>
        </div>
    `;
    
    return orderDiv;
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'sneaker': 'Giày Thể Thao',
        'formal': 'Giày Tây',
        'casual': 'Giày Casual',
        'boots': 'Giày Boot'
    };
    return categoryNames[category] || category;
}

function getDistrictName(districtCode) {
    const districtNames = {
        'quan1': 'Quận 1',
        'quan2': 'Quận 2',
        'quan3': 'Quận 3',
        'quan4': 'Quận 4',
        'quan5': 'Quận 5',
        'quan6': 'Quận 6',
        'quan7': 'Quận 7',
        'quan8': 'Quận 8',
        'quan9': 'Quận 9',
        'quan10': 'Quận 10',
        'quan11': 'Quận 11',
        'quan12': 'Quận 12'
    };
    return districtNames[districtCode] || districtCode;
}

function extractDistrictFromAddress(address) {
    // Simple extraction - look for district patterns
    const districtPattern = /quận\s*(\d+)/i;
    const match = address.match(districtPattern);
    return match ? `quan${match[1]}` : 'quan1';
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(alert);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Additional CSS for alerts (add to style.css)
const alertStyles = `
.alert {
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    z-index: 3000;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease;
}

.alert-success {
    background: #28a745;
}

.alert-error {
    background: #dc3545;
}

.alert-info {
    background: #17a2b8;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;

// Add alert styles to page
const styleElement = document.createElement('style');
styleElement.textContent = alertStyles;
document.head.appendChild(styleElement);
