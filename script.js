// UNIT 3 
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('open');
  }
}

const initialState = {
  activePage: 'HOME',
  searchQuery: '',
  selectedCategory: 'ALL',
  favoritesOnly: false,
  sortOption: 'bestSeller',

  customerName: '',
  customerPhone: '',
  orderMode: 'Dine-in',
  deliveryAddress: '',
  paymentMethod: 'Cash',
  customerNote: '',

  session: {
    userId: "USR-001",
    userName: "Walk-in Guest",
    activeRole: "CUSTOMER"
  },

  orders: [],

  paymentDetails: {
    isPaid: false,
    accountNumber: '',
    referenceNumber: ''
  },

  menuItems: [
    // FOOD
    { id: 'f2', name: 'Adobo Flakes Rice Bowl', category: 'Food', subcategory: 'Rice Bowls', price: 165, isBestSeller: false, isFavorite: false, image: 'images/adobo-flakes.png' },
    { id: 'f4', name: 'Creamy Carbonara', category: 'Food', subcategory: 'Pastas', price: 175, isBestSeller: true, isFavorite: false, image: 'images/creamy-carbonara.png' },
    { id: 'f9', name: 'Crispy Kare-Kare', category: 'Food', subcategory: 'Rice Meals', price: 245, isBestSeller: true, isFavorite: false, image: 'images/crispy-karekare.png' },
    { id: 'f10', name: 'Chicken Teriyaki Rice Bowl', category: 'Food', subcategory: 'Rice Bowls', price: 180, isBestSeller: false, isFavorite: false, image: 'images/chicken-teriyaki.png' },
    { id: 'f11', name: 'Pork Sisig', category: 'Food', subcategory: 'Rice Meals', price: 190, isBestSeller: true, isFavorite: false, image: 'images/pork-sisig.png' },
    { id: 'f14', name: 'Pork BBQ', category: 'Food', subcategory: 'Rice Meals', price: 180, isBestSeller: true, isFavorite: false, image: 'images/pork-bbq.png'},

    // PASTRIES
    { id: 'p2', name: 'Chocolate Croissant', category: 'Pastries', subcategory: 'Croissant', price: 150, isBestSeller: true, isFavorite: false, image: 'images/chocolate-croissant.png' },
    { id: 'p3', name: 'Banana Loaf', category: 'Pastries', subcategory: 'Breads', price: 160, isBestSeller: false, isFavorite: false, image: 'images/banana-loaf.png' },
    { id: 'p4', name: 'Cinnamon Roll', category: 'Pastries', subcategory: 'Rolls', price: 130, isBestSeller: true, isFavorite: false, image: 'images/cinnamon-roll.png' },
    { id: 'p5', name: 'Oreo Muffin', category: 'Pastries', subcategory: 'Muffins', price: 140, isBestSeller: false, isFavorite: false, image: 'images/oreo-muffin.png' },
    { id: 'p6', name: 'Ube Cheese Roll', category: 'Pastries', subcategory: 'Rolls', price: 170, isBestSeller: true, isFavorite: false, image: 'images/ube-cheese-roll.png' },
    { id: 'p7', name: 'Cookies n Cream Loaf', category: 'Pastries', subcategory: 'Breads', price: 180, isBestSeller: true, isFavorite: false, image: 'images/cookies-cream-loaf.png' },
    { id: 'p8', name: 'Chocolate Almond Loaf', category: 'Pastries', subcategory: 'Breads', price: 200, isBestSeller: false, isFavorite: false, image: 'images/chocolate-almond-loaf.png' },
    { id: 'p9', name: 'Biscoff Roll', category: 'Pastries', subcategory: 'Rolls', price: 170, isBestSeller: true, isFavorite: false, image: 'images/biscoff-roll.png' },
    { id: 'p10', name: 'Pistachio Loaf', category: 'Pastries', subcategory: 'Breads', price: 180, isBestSeller: true, isFavorite: false, image: 'images/pistachio-loaf.png' },
    { id: 'p11', name: 'Ube Loaf', category: 'Pastries', subcategory: 'Breads', price: 190, isBestSeller: true, isFavorite: false, image: 'images/ube-loaf.png' },
    { id: 'p12', name: 'Cheese Bread', category: 'Pastries', subcategory: 'Breads', price: 200, isBestSeller: true, isFavorite: false, image: 'images/cheese-bread.png' },
    { id: 'p13', name: 'Chocolate Bread', category: 'Pastries', subcategory: 'Breads', price: 220, isBestSeller: true, isFavorite: false, image: 'images/chocolate-bread.png' },

    // DESSERTS
    { id: 'o1', name: 'Ube Cheesecake', category: 'Desserts', subcategory: 'Cakes', price: 180, isBestSeller: true, isFavorite: false, image: 'images/ube-cheesecake.png' },
    { id: 'o2', name: 'Mango Float', category: 'Desserts', subcategory: 'Cakes', price: 150, isBestSeller: false, isFavorite: false, image: 'images/mango-float.png' },  
    { id: 'o3', name: 'Tiramisu', category: 'Desserts', subcategory: 'Cakes', price: 200, isBestSeller: true, isFavorite: false, image: 'images/tiramisu.png' },
    { id: 'o4', name: 'Chocolate Chip Cookie', category: 'Desserts', subcategory: 'Cookie', price: 130, isBestSeller: false, isFavorite: false, image: 'images/chocolate-cookie.png' },
    { id: 'o5', name: 'Red Velvet Cookie', category: 'Desserts', subcategory: 'Cookie', price: 120, isBestSeller: false, isFavorite: false, image: 'images/redvelvet-cookie.png' },
    { id: 'o6', name: 'Matcha Cookie', category: 'Desserts', subcategory: 'Cookie', price: 140, isBestSeller: true, isFavorite: false, image: 'images/matcha-cookie.png' },
    { id: 'o7', name: 'Matcha Cheesecake', category: 'Desserts', subcategory: 'Cakes', price: 240, isBestSeller: true, isFavorite: false, image: 'images/matcha-cheesecake.png' },

    // DRINKS
    { id: 'd1', name: 'Spanish Latte', category: 'Drinks', subcategory: 'Coffee', price: 140, isBestSeller: true, isFavorite: true, image: 'images/spanish-latte.png' },
    { id: 'd2', name: 'Sea Salt Latte', category: 'Drinks', subcategory: 'Coffee', price: 150, isBestSeller: true, isFavorite: false, image: 'images/seasalt-latte.png' },
    { id: 'd3', name: 'Classic Latte', category: 'Drinks', subcategory: 'Coffee', price: 130, isBestSeller: false, isFavorite: false, image: 'images/classic-latte.png' },
    { id: 'd4', name: 'Java Chips Frappe', category: 'Drinks', subcategory: 'Frappe', price: 165, isBestSeller: true, isFavorite: false, image: 'images/javachip-frappe.png' },
    { id: 'd5', name: 'Matcha Latte', category: 'Drinks', subcategory: 'Non-Coffee', price: 145, isBestSeller: false, isFavorite: false, image: 'images/matcha-latte.png' },
    { id: 'd6', name: 'Sea Salt Matcha', category: 'Drinks', subcategory: 'Non-Coffee', price: 155, isBestSeller: true, isFavorite: false, image: 'images/seasalt-matcha.png' },
    { id: 'd7', name: 'Ube-Matcha Latte', category: 'Drinks', subcategory: 'Non-Coffee', price: 160, isBestSeller: false, isFavorite: true, image: 'images/ube-matcha-latte.png' },
    { id: 'd8', name: 'Dirty Matcha Latte', category: 'Drinks', subcategory: 'Coffee', price: 160, isBestSeller: false, isFavorite: false, image: 'images/dirty-matcha.png' },
    { id: 'd9', name: 'Strawberry Milk Frappe', category: 'Drinks', subcategory: 'Non-Coffee', price: 195, isBestSeller: false, isFavorite: false, image: 'images/strawberry-frappe.png' },
  ],

  draftQuantities: {},
  cart: {}
};

let state = initialState;

function clearReceiptInputs() {
  const receiptModal = document.getElementById('receipt-modal');
  if (receiptModal) receiptModal.classList.add('hidden');

  const payCheckbox = document.getElementById('pay-checkbox');
  if (payCheckbox) payCheckbox.checked = false;

  const payAccNumber = document.getElementById('pay-acc-number');
  if (payAccNumber) payAccNumber.value = '';

  const payRefNumber = document.getElementById('pay-ref-number');
  if (payRefNumber) payRefNumber.value = '';

  const customerNote = document.getElementById('customer-note-input');
  if (customerNote) customerNote.value = '';

  const deliveryAddress = document.getElementById('delivery-address-input');
  if (deliveryAddress) deliveryAddress.value = '';
}

function appReducer(currentState, action) {
  switch (action.type) {
    case 'NAVIGATE_TO':
      return { ...currentState, activePage: action.payload };

    case 'SET_SEARCH':
      return { ...currentState, searchQuery: action.payload };

    case 'SET_CATEGORY':
      return { ...currentState, selectedCategory: action.payload };

    case 'TOGGLE_FAVORITES_ONLY':
      return { ...currentState, favoritesOnly: !currentState.favoritesOnly };

    case 'TOGGLE_ITEM_FAVORITE':
      return {
        ...currentState,
        menuItems: currentState.menuItems.map(item =>
          item.id === action.payload ? { ...item, isFavorite: !item.isFavorite } : item
        )
      };

    case 'SET_SORT_OPTION':
      return { ...currentState, sortOption: action.payload };

    case 'UPDATE_DRAFT_QTY': {
      const { itemId, delta } = action.payload;
      const currentQty = currentState.draftQuantities[itemId] || 1;
      const newQty = Math.max(1, currentQty + delta);
      return {
        ...currentState,
        draftQuantities: { ...currentState.draftQuantities, [itemId]: newQty }
      };
    }

    case 'ADD_TO_CART': {
      const itemId = action.payload;
      const item = currentState.menuItems.find(i => i.id === itemId);
      const qtyToAdd = currentState.draftQuantities[itemId] || 1;
      const existingCartItem = currentState.cart[itemId];
      const newQty = existingCartItem ? existingCartItem.qty + qtyToAdd : qtyToAdd;

      return {
        ...currentState,
        cart: {
          ...currentState.cart,
          [itemId]: { item, qty: newQty }
        },
        draftQuantities: { ...currentState.draftQuantities, [itemId]: 1 }
      };
    }

    case 'REMOVE_FROM_CART': {
      const newCart = { ...currentState.cart };
      delete newCart[action.payload];
      return { ...currentState, cart: newCart };
    }

    case 'SET_CUSTOMER_NAME':
      return { ...currentState, customerName: action.payload };

    case 'SET_CUSTOMER_PHONE':
      return { ...currentState, customerPhone: action.payload };

    case 'SET_ORDER_MODE':
      return { ...currentState, orderMode: action.payload };

    case 'SET_DELIVERY_ADDRESS':
      return { ...currentState, deliveryAddress: action.payload };

    case 'SET_PAYMENT_METHOD':
      return { ...currentState, paymentMethod: action.payload };

    case 'SET_CUSTOMER_NOTE':
      return { ...currentState, customerNote: action.payload };

    case 'SET_PAYMENT_DETAILS':
      return { ...currentState, paymentDetails: action.payload };

    case 'CLEAR_CART_AND_HOME':
      clearReceiptInputs();
      return {
        ...currentState,
        cart: {},
        activePage: 'HOME',
        customerName: '',
        customerPhone: '',
        deliveryAddress: '',
        customerNote: '',
        paymentDetails: { isPaid: false, accountNumber: '', referenceNumber: '' }
      };

    default:
      return currentState;
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function checkScroll() {
  const topBtn = document.getElementById('back-to-top-btn');
  if (!topBtn) return;

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (state.activePage === 'MENU' && scrollY > 200) {
    topBtn.classList.add('visible');
  } else {
    topBtn.classList.remove('visible');
  }
}

window.addEventListener('scroll', checkScroll);
document.addEventListener('scroll', checkScroll);

function dispatch(action) {
  if (action.type === 'PLACE_ORDER') {
    handlePlaceOrder();
    return;
  }

  state = appReducer(state, action);

  if (action.type === 'NAVIGATE_TO') {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('open');
  }

  renderApp();
}

// UNIT 5
function getProcessedData() {
  let filtered = state.menuItems.filter(item => {
    const query = state.searchQuery.toLowerCase().trim();
    const matchesSearch = item.name.toLowerCase().includes(query) || item.subcategory.toLowerCase().includes(query);
    const matchesCat = state.selectedCategory === 'ALL' || item.category === state.selectedCategory;
    const matchesFav = !state.favoritesOnly || item.isFavorite;
    return matchesSearch && matchesCat && matchesFav;
  });

  filtered.sort((a, b) => {
    if (state.sortOption === 'priceLowHigh') {
      return a.price - b.price;
    } else if (state.sortOption === 'priceHighLow') {
      return b.price - a.price;
    } else {
      return b.isBestSeller - a.isBestSeller;
    }
  });

  return filtered;
}

function getCartTotals() {
  const cartEntries = Object.values(state.cart);
  const totalCount = cartEntries.reduce((sum, entry) => sum + entry.qty, 0);
  const totalPrice = cartEntries.reduce((sum, entry) => sum + (entry.item.price * entry.qty), 0);
  return { totalCount, totalPrice };
}

function renderApp() {
  // Hide all dynamic pages and display current active section
  document.querySelectorAll('.page-content').forEach(el => el.classList.remove('active'));
  const activeSection = document.getElementById(`page-${state.activePage.toLowerCase()}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Navbar button elements
  const navAbout = document.getElementById('nav-btn-about');
  const navOrder = document.getElementById('nav-btn-order');
  const navKitchen = document.getElementById('nav-btn-kitchen');
  const navAdmin = document.getElementById('nav-btn-admin');
  
  // Toggle Visibility Based on Role
  if (state.session.activeRole === "ADMIN") {
    // Hide About & Order links in Admin view
    if (navAbout) navAbout.classList.add('hidden');
    if (navOrder) navOrder.classList.add('hidden');

    // Show Admin & Kitchen Queue links
    if (navKitchen) navKitchen.classList.remove('hidden');
    if (navAdmin) navAdmin.classList.remove('hidden');
  } else {
    // Show About & Order links in Customer view
    if (navAbout) navAbout.classList.remove('hidden');
    if (navOrder) navOrder.classList.remove('hidden');

    // Hide Admin & Kitchen Queue links
    if (navKitchen) navKitchen.classList.add('hidden');
    if (navAdmin) navAdmin.classList.add('hidden');
  }

  // Highlight active menu tab
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const targetPage = btn.getAttribute('data-page');
    btn.classList.toggle('active', state.activePage === targetPage);
  });

  const { totalCount, totalPrice } = getCartTotals();
  document.getElementById('nav-cart-count').innerText = `(${totalCount})`;

  if (state.activePage === 'MENU') {
    const items = getProcessedData();
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';

    if (items.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 20px;">No Menu Found.</p>`;
    } else {
      items.forEach(item => {
        const draftQty = state.draftQuantities[item.id] || 1;
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div>
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="product-img">` : ''}
            <div class="item-card-header">
              ${item.isBestSeller ? '<span class="badge">Best Seller</span>' : '<span style="font-size: 11px; color: #888;">' + item.subcategory + '</span>'}
              <button class="fav-btn" onclick="dispatch({ type: 'TOGGLE_ITEM_FAVORITE', payload: '${item.id}' })">
                ${item.isFavorite ? '⭐' : '☆'}
              </button>
            </div>
            <h3 class="item-title">${item.name}</h3>
            <small style="color: #666; display: block; margin-bottom: 5px;">${item.category} • ${item.subcategory}</small>
            <div class="item-price">₱${item.price.toFixed(2)}</div>
          </div>
          
          <div class="card-footer">
            <div class="quantity-picker">
              <button class="qty-btn" onclick="dispatch({ type: 'UPDATE_DRAFT_QTY', payload: { itemId: '${item.id}', delta: -1 } })">-</button>
              <span><strong>${draftQty}</strong></span>
              <button class="qty-btn" onclick="dispatch({ type: 'UPDATE_DRAFT_QTY', payload: { itemId: '${item.id}', delta: 1 } })">+</button>
            </div>
            <button class="add-cart-btn" onclick="dispatch({ type: 'ADD_TO_CART', payload: '${item.id}' })">Add to Cart</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    document.getElementById('sort-select').value = state.sortOption;
    document.getElementById('btn-fav-toggle').classList.toggle('active', state.favoritesOnly);

    document.querySelectorAll('.cat-btn').forEach(btn => {
      const cat = btn.innerText === 'All Menu' ? 'ALL' : btn.innerText;
      btn.classList.toggle('active', state.selectedCategory === cat);
    });

    const floatingBar = document.getElementById('view-orders-bar');
    if (totalCount > 0 && state.session.activeRole === "CUSTOMER") {
      floatingBar.classList.remove('hidden');
      document.getElementById('bar-items-count').innerText = `${totalCount} item(s) selected`;
      document.getElementById('bar-total-price').innerText = `| Total: ₱${totalPrice.toFixed(2)}`;
    } else {
      floatingBar.classList.add('hidden');
    }
  }

  if (state.activePage === 'ORDER') {
    document.getElementById('customer-name').value = state.customerName;
    document.getElementById('customer-phone').value = state.customerPhone;
    document.getElementById('order-mode-select').value = state.orderMode;
    document.getElementById('payment-method-select').value = state.paymentMethod;

    const deliveryGroup = document.getElementById('delivery-address-group');
    const paymentStepNum = document.getElementById('payment-step-num');
    if (state.orderMode === 'Delivery') {
      deliveryGroup.classList.remove('hidden');
      paymentStepNum.innerText = '3';
    } else {
      deliveryGroup.classList.add('hidden');
      paymentStepNum.innerText = '2';
    }

    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = '';

    const cartEntries = Object.entries(state.cart);
    if (cartEntries.length === 0) {
      cartList.innerHTML = `<p style="text-align:center; color:#888;">No Item in your Cart.</p>`;
    } else {
      cartEntries.forEach(([itemId, entry]) => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item-row';
        itemRow.innerHTML = `
          <div>
            <strong>${entry.item.name}</strong><br>
            <small>₱${entry.item.price.toFixed(2)} x ${entry.qty}</small>
          </div>
          <div>
            <strong>₱${(entry.item.price * entry.qty).toFixed(2)}</strong>
            <button style="margin-left:8px; color:red; border:none; background:none; cursor:pointer;" onclick="dispatch({ type: 'REMOVE_FROM_CART', payload: '${itemId}' })">✕</button>
          </div>
        `;
        cartList.appendChild(itemRow);
      });
    }

    document.getElementById('cart-total-amount').innerText = `₱${totalPrice.toFixed(2)}`;
  }

  if (state.activePage === 'KITCHEN') {
    renderWorkflowView();
  }

  if (state.activePage === 'ADMIN') {
    renderAdminView();
  }

  checkScroll();
}

// UNIT 4
function handlePlaceOrder() {
  const { totalCount, totalPrice } = getCartTotals();
  if (totalCount === 0) {
    alert('Choose Item before Checking Out!');
    return;
  }

  if (!state.customerName.trim()) {
    alert('Please enter your name!');
    return;
  }

  if (!state.customerPhone.trim()) {
    alert('Please enter your phone number!');
    return;
  }

  if (state.orderMode === 'Delivery' && !state.deliveryAddress.trim()) {
    alert('Input your Delivery Address!');
    return;
  }

  // If GCash or QRPH selected, trigger payment modal first
  if (state.paymentMethod === 'GCash' || state.paymentMethod === 'QRPH') {
    openPaymentModal(totalPrice);
    return;
  }

  finalizeReceipt();
}

function openPaymentModal(amount) {
  const modal = document.getElementById('payment-modal');
  document.getElementById('qr-payment-title').innerText = `${state.paymentMethod} Payment`;
  document.getElementById('qr-amount-display').innerText = `₱${amount.toFixed(2)}`;
  
  // Custom QR Image per payment type
  const qrImage = document.getElementById('qr-code-img');
  qrImage.src = state.paymentMethod === 'GCash' ? 'images/gcash.png' : 'images/qrph.png';

  modal.classList.remove('hidden');
}

function closePaymentModal() {
  document.getElementById('payment-modal').classList.add('hidden');
}

function confirmPayment() {
  const isPaid = document.getElementById('pay-checkbox').checked;
  const accNum = document.getElementById('pay-acc-number').value.trim();
  const refNum = document.getElementById('pay-ref-number').value.trim();

  if (!isPaid) {
    alert('Please confirm that you have already paid!');
    return;
  }
  if (!accNum) {
    alert('Please enter your Account/Phone Number!');
    return;
  }
  if (!refNum) {
    alert('Please enter the Reference Number!');
    return;
  }

  state.paymentDetails = {
    isPaid: true,
    accountNumber: accNum,
    referenceNumber: refNum
  };

  closePaymentModal();
  finalizeReceipt();
}

function finalizeReceipt() {
  const { totalPrice } = getCartTotals();
  const orderItems = Object.values(state.cart).map(entry => ({
    id: entry.item.id,
    name: entry.item.name,
    price: entry.item.price,
    quantity: entry.qty
  }));

  // Create new order record for Admin Table & Kitchen Queue
  const newOrder = {
    id: "ORD-" + Math.floor(1000 + Math.random() * 9000),
    ownerId: state.session.userId,
    customerName: state.customerName,
    customerPhone: state.customerPhone,
    orderMode: state.orderMode,
    deliveryAddress: state.deliveryAddress,
    paymentMethod: state.paymentMethod,
    items: orderItems,
    total: totalPrice,
    status: "PENDING",
    timestamp: new Date().toLocaleTimeString(),
    statusHistory: [
      {
        timestamp: new Date().toLocaleTimeString(),
        fromStatus: "NEW",
        toStatus: "PENDING",
        action: "Order Placed",
        updatedBy: state.customerName
      }
    ]
  };

  if (!state.orders) state.orders = [];
  state.orders.push(newOrder);

  document.getElementById('receipt-date').innerText = new Date().toLocaleString();
  document.getElementById('receipt-mode').innerText = state.orderMode;
  document.getElementById('receipt-payment').innerText = state.paymentMethod;
  document.getElementById('receipt-name').innerText = state.customerName;
  document.getElementById('receipt-contact').innerText = state.customerPhone;

  // Digital payment receipt details
  const refContainer = document.getElementById('receipt-reference-container');
  if (state.paymentMethod === 'GCash' || state.paymentMethod === 'QRPH') {
    refContainer.classList.remove('hidden');
    document.getElementById('receipt-account-num').innerText = state.paymentDetails.accountNumber;
    document.getElementById('receipt-ref-num').innerText = state.paymentDetails.referenceNumber;
  } else {
    refContainer.classList.add('hidden');
  }

  const addressContainer = document.getElementById('receipt-address-container');
  if (state.orderMode === 'Delivery') {
    addressContainer.classList.remove('hidden');
    document.getElementById('receipt-address').innerText = state.deliveryAddress;
  } else {
    addressContainer.classList.add('hidden');
  }

  const noteContainer = document.getElementById('receipt-note-container');
  if (state.customerNote.trim()) {
    noteContainer.classList.remove('hidden');
    document.getElementById('receipt-note').innerText = state.customerNote;
  } else {
    noteContainer.classList.add('hidden');
  }

  const receiptList = document.getElementById('receipt-items-list');
  receiptList.innerHTML = '';
  Object.values(state.cart).forEach(entry => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.margin = '5px 0';
    row.innerHTML = `
      <span>${entry.qty}x ${entry.item.name}</span>
      <span>₱${(entry.item.price * entry.qty).toFixed(2)}</span>
    `;
    receiptList.appendChild(row);
  });

  document.getElementById('receipt-total-amount').innerText = `₱${totalPrice.toFixed(2)}`;
  document.getElementById('receipt-modal').classList.remove('hidden');
}

// UNIT 6 & 7 & 9 & 10 (Role Management & Order Workflow)

const ROLE_PERMISSION = {
  CUSTOMER: new Set(["menu.view", "order:create", "order:view-own"]),
  ADMIN: new Set(["menu.view", "order:create", "order:view-own", "order:view-all", "order:update-status", "menu:manage-items", "metrics:view-dashboard"])
};

function hasPermission(permission, recordOwnerId = null) {
  const currentRole = state.session.activeRole;
  const permissions = ROLE_PERMISSION[currentRole];
    
  if (!permissions || !permissions.has(permission)) return false;
  if (permission === "order:view-own" && recordOwnerId) {
    if (currentRole === "CUSTOMER" && recordOwnerId !== state.session.userId) {
      return false;
    }
  }
  return true;
}

function switchUserRole(newRole) {
  state.session.activeRole = newRole;
  state.session.userName = newRole === "CUSTOMER" ? "Walk-in Guest" : "Admin User";
  
  const badge = document.getElementById("role-badge");
  if (badge) {
    badge.textContent = newRole;
    badge.className = `badge status-${newRole === "CUSTOMER" ? "pending" : "ready"}`;
  }

  // Auto-navigate when role switches
  if (newRole === "ADMIN") {
    state.activePage = "ADMIN";
  } else {
    state.activePage = "HOME";
  }

  console.log(`Persona switched to: ${newRole}`);
  renderApp();
}

const ORDER_TRANSITIONS = {
  PENDING:   ["CONFIRMED", "CANCELLED"],
  CONFIRMED: ["PREPARING", "CANCELLED"],
  PREPARING: ["READY", "CANCELLED"],
  READY:     ["COMPLETED"],
  COMPLETED: [],
  CANCELLED: [],
};

function canTransition(currentStatus, targetStatus) {
  if (!ORDER_TRANSITIONS[currentStatus]) return false;
  return ORDER_TRANSITIONS[currentStatus].includes(targetStatus);
}

function transitionOrderStatus(orderId, nextStatus, actionLabel) {
  // Permission Guard Check
  if (!hasPermission("order:update-status")) {
    alert("Permission Denied: Your current persona cannot update kitchen orders.");
    return;
  }

  const order = state.orders?.find(o => o.id === orderId);
  if (!order) {
    console.error(`Order #${orderId} not found.`);
    return;
  }

  // State Transition Guard Check
  if (!canTransition(order.status, nextStatus)) {
    console.error(`[WORKFLOW ERROR] Invalid state jump: ${order.status} ➔ ${nextStatus}`);
    alert(`Illegal transition: Cannot move order directly from '${order.status}' to '${nextStatus}'.`);
    return;
  }

  const prevStatus = order.status;
  order.status = nextStatus;

  if (!order.statusHistory) order.statusHistory = [];
  order.statusHistory.push({
    timestamp: new Date().toLocaleTimeString(),
    fromStatus: prevStatus,
    toStatus: nextStatus,
    action: actionLabel || `Moved to ${nextStatus}`,
    updatedBy: state.session.userName
  });

  console.log(`[WORKFLOW SUCCESS] Order #${orderId} changed from ${prevStatus} ➔ ${nextStatus}`);
  renderApp();
}

function renderWorkflowView() {
  const container = document.getElementById("kitchen-orders-list");
  if (!container) return;

  container.innerHTML = "";

  if (!state.orders || state.orders.length === 0) {
    container.innerHTML = "<p class='empty-msg'>No active kitchen orders in queue.</p>";
    return;
  }

  state.orders.forEach(order => {
    const allowedNext = ORDER_TRANSITIONS[order.status] || [];
    
    const actionButtonsHTML = allowedNext.map(nextState => `
      <button type="button" 
              class="btn-action-status" 
              onclick="transitionOrderStatus('${order.id}', '${nextState}', 'Advance to ${nextState}')">
        Mark as ${nextState}
      </button>
    `).join(" ");

    const historyHTML = (order.statusHistory || []).map(h => `
      <li><small>${h.timestamp}</small> - <b>${h.fromStatus} ➔ ${h.toStatus}</b> by ${h.updatedBy}</li>
    `).join("");

    const card = document.createElement("div");
    card.className = "order-card";

    card.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p>Customer: <b>${order.customerName || "Walk-in Guest"}</b></p>
      <p>Status: <span class="badge status-${order.status.toLowerCase()}">${order.status}</span></p>
      <div class="actions-region" style="margin: 0.5rem 0;">
        ${actionButtonsHTML || "<em>Terminal State (No further actions)</em>"}
      </div>
      <details class="history-log">
        <summary>Status Audit Log (${(order.statusHistory || []).length})</summary>
        <ul>${historyHTML || "<li>No transitions recorded yet.</li>"}</ul>
      </details>
    `;
    
    container.appendChild(card);
  });
}

function renderAdminView() {
  const tableBody = document.getElementById("admin-pending-orders-body");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  // Filter pending orders from state
  const pendingOrders = (state.orders || []).filter(o => o.status === "PENDING");

  if (pendingOrders.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-table-msg">No pending orders at the moment.</td>
      </tr>
    `;
    return;
  }

  // Render each pending order as a table row
  pendingOrders.forEach(order => {
    const itemsSummary = (order.items || [])
      .map(item => `${item.quantity || 1}x ${item.name || item.title}`)
      .join(", ") || "No items recorded";

    const totalAmount = order.total 
      ? Number(order.total).toFixed(2) 
      : (order.items || []).reduce((sum, i) => sum + ((i.price || 0) * (i.quantity || 1)), 0).toFixed(2);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>#${order.id}</strong></td>
      <td>${order.customerName || "Walk-in Guest"}</td>
      <td>${itemsSummary}</td>
      <td>₱${totalAmount}</td>
      <td><span class="badge status-pending">${order.status}</span></td>
      <td>${order.timestamp || new Date().toLocaleTimeString()}</td>
      <td>
        <button type="button" 
                class="btn-action-status" 
                onclick="transitionOrderStatus('${order.id}', 'CONFIRMED', 'Admin Confirmed')">
          Confirm Order
        </button>
        <button type="button" 
                class="btn-action-cancel" 
                onclick="transitionOrderStatus('${order.id}', 'CANCELLED', 'Admin Cancelled')">
          Cancel
        </button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Initial render call to bootstrap application
renderApp();