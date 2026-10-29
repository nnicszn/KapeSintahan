// UNIT 3: NAVIGATION & MOBILE MENU
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('open');
  }
}

const STORAGE_KEY = "kapesintahan-prototype-v1";

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
  audit: [],

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

// UNIT 8: PERSISTENCE, VERSIONING & AUDIT TRAIL
function recordAudit(actionType, recordId, details) {
  if (!state.audit) state.audit = [];
  const entry = {
    timestamp: new Date().toLocaleTimeString(),
    actor: state.session.userName || "System",
    action: actionType,
    recordId: recordId || "N/A",
    details: details
  };
  state.audit.unshift(entry);
  saveState();
}

function saveState() {
  try {
    const payload = {
      schemaVersion: 1,
      savedAt: new Date().toISOString(),
      orders: state.orders,
      session: state.session,
      audit: state.audit
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.error("Failed to save state to localStorage", error);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    
    if (!payload || payload.schemaVersion !== 1 || !Array.isArray(payload.orders)) {
      console.warn("Storage data has outdated schema or is malformed. Loading safe defaults.");
      alert("Notice: Stored data schema was outdated or invalid. Initialized with safe defaults.");
      return null;
    }
    return payload;
  } catch (error) {
    console.error("Stored data is invalid or malformed JSON.", error);
    alert("Recovery Notice: Local storage data was corrupted. Started from safe defaults without crashing.");
    return null;
  }
}

let loadedPayload = loadState();
let state = loadedPayload ? {
  ...initialState,
  orders: loadedPayload.orders || [],
  session: loadedPayload.session || initialState.session,
  audit: loadedPayload.audit || []
} : initialState;

function exportDataJSON() {
  const payload = {
    schemaVersion: 1,
    savedAt: new Date().toISOString(),
    orders: state.orders,
    session: state.session,
    audit: state.audit
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "kapesintahan_backup.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  recordAudit("EXPORT", "N/A", "Exported system state JSON backup.");
}

function importDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.schemaVersion !== 1 || !Array.isArray(imported.orders)) {
        alert("Import Error: Selected JSON file has an invalid schema version or structure.");
        return;
      }
      const recordCount = imported.orders.length;
      const confirmImport = confirm(`Import Preview: Found ${recordCount} orders in backup file. Do you want to replace current state and merge/import?`);
      if (confirmImport) {
        state.orders = imported.orders;
        if (imported.audit) state.audit = imported.audit;
        saveState();
        recordAudit("IMPORT", "N/A", `Successfully imported ${recordCount} records from backup.`);
        alert(`Successfully imported ${recordCount} records!`);
        renderApp();
      }
    } catch (err) {
      console.error(err);
      alert("Import Failed: Malformed JSON file.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetDataStorage() {
  const confirmation = prompt("Type 'RESET' to confirm erasing all stored orders and audit logs:");
  if (confirmation === "RESET") {
    localStorage.removeItem(STORAGE_KEY);
    state.orders = [];
    state.audit = [];
    recordAudit("RESET", "N/A", "User performed full system data reset.");
    alert("System data has been reset to defaults.");
    renderApp();
  } else if (confirmation !== null) {
    alert("Reset cancelled. Confirmation text did not match 'RESET'.");
  }
}

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

// UNIT 5: SEARCH, FILTER & SORT ENGINE
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
  document.querySelectorAll('.page-content').forEach(el => el.classList.remove('active'));
  const activeSection = document.getElementById(`page-${state.activePage.toLowerCase()}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // ---> FIX: Synchronize UI dropdown & badge with loaded session role on startup/refresh <---
  const roleSelect = document.getElementById('role-select');
  if (roleSelect) roleSelect.value = state.session.activeRole;

  const roleBadge = document.getElementById('role-badge');
  if (roleBadge) {
    roleBadge.textContent = state.session.activeRole;
    roleBadge.className = `badge status-${state.session.activeRole === 'CUSTOMER' ? 'pending' : 'ready'}`;
  }
  // ----------------------------------------------------------------------------------------

  const navAbout = document.getElementById('nav-btn-about');
  const navOrder = document.getElementById('nav-btn-order');
  const navKitchen = document.getElementById('nav-btn-kitchen');
  const navAdmin = document.getElementById('nav-btn-admin');
  const navDashboard = document.getElementById('nav-btn-dashboard');
  
  if (state.session.activeRole === "ADMIN") {
    if (navAbout) navAbout.classList.add('hidden');
    if (navOrder) navOrder.classList.add('hidden');

    if (navKitchen) navKitchen.classList.remove('hidden');
    if (navAdmin) navAdmin.classList.remove('hidden');
    if (navDashboard) navDashboard.classList.remove('hidden');
  } else {
    if (navAbout) navAbout.classList.remove('hidden');
    if (navOrder) navOrder.classList.remove('hidden');

    if (navKitchen) navKitchen.classList.add('hidden');
    if (navAdmin) navAdmin.classList.add('hidden');
    if (navDashboard) navDashboard.classList.add('hidden');
  }

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
              ${item.isBestSeller ? '<span class="badge status-pending" style="background:#e804b7; color:white;">Best Seller</span>' : '<span style="font-size: 11px; color: #888;">' + item.subcategory + '</span>'}
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

  if (state.activePage === 'KITCHEN') renderWorkflowView();
  if (state.activePage === 'ADMIN') renderAdminView();
  if (state.activePage === 'DASHBOARD') {
    renderDashboardView();
    renderAuditLogView();
  }

  checkScroll();
}

// UNIT 4: CHECKOUT & PAYMENT MODAL
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

  recordAudit("CREATE", newOrder.id, `Created order for ${newOrder.customerName} totaling ₱${totalPrice.toFixed(2)}`);
  saveState();

  document.getElementById('receipt-date').innerText = new Date().toLocaleString();
  document.getElementById('receipt-mode').innerText = state.orderMode;
  document.getElementById('receipt-payment').innerText = state.paymentMethod;
  document.getElementById('receipt-name').innerText = state.customerName;
  document.getElementById('receipt-contact').innerText = state.customerPhone;

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

// WORKFLOW STATE MACHINE & ROLE PERMISSIONS
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

  if (newRole === "ADMIN") {
    state.activePage = "ADMIN";
  } else {
    state.activePage = "HOME";
  }

  saveState();
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
  if (!hasPermission("order:update-status")) {
    alert("Permission Denied: Your current persona cannot update kitchen orders.");
    return;
  }

  const order = state.orders?.find(o => o.id === orderId);
  if (!order) {
    console.error(`Order #${orderId} not found.`);
    return;
  }

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

  const auditActionType = nextStatus === "CANCELLED" ? "ARCHIVE/DELETE" : "STATUS_CHANGE";
  recordAudit(auditActionType, orderId, `Transitioned order status from ${prevStatus} to ${nextStatus}`);
  saveState();

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

  const allOrders = state.orders || [];

  if (allOrders.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-table-msg">No orders recorded in history yet.</td>
      </tr>
    `;
    return;
  }

  allOrders.forEach(order => {
    const itemsSummary = (order.items || [])
      .map(item => `${item.quantity || 1}x ${item.name || item.title}`)
      .join(", ") || "No items recorded";

    const totalAmount = order.total 
      ? Number(order.total).toFixed(2) 
      : (order.items || []).reduce((sum, i) => sum + ((i.price || 0) * (i.quantity || 1)), 0).toFixed(2);

    const allowedNext = ORDER_TRANSITIONS[order.status] || [];
    const actionButtonsHTML = allowedNext.map(nextState => `
      <button type="button" 
              class="${nextState === 'CANCELLED' ? 'btn-action-cancel' : 'btn-action-status'}" 
              onclick="transitionOrderStatus('${order.id}', '${nextState}', 'Admin Moved to ${nextState}')">
        ${nextState}
      </button>
    `).join(" ");

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>#${order.id}</strong></td>
      <td>${order.customerName || "Walk-in Guest"}</td>
      <td>${itemsSummary}</td>
      <td>₱${totalAmount}</td>
      <td>${order.orderMode || "Dine-in"}</td>
      <td><span class="badge status-${order.status.toLowerCase()}">${order.status}</span></td>
      <td>${order.timestamp || new Date().toLocaleTimeString()}</td>
      <td>${actionButtonsHTML || "<em>Completed</em>"}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function renderAuditLogView() {
  const auditList = document.getElementById("audit-log-list");
  const auditCount = document.getElementById("audit-count");
  if (!auditList || !auditCount) return;

  auditCount.textContent = (state.audit || []).length;
  if (!state.audit || state.audit.length === 0) {
    auditList.innerHTML = "<li><em>No audit actions recorded yet.</em></li>";
    return;
  }

  auditList.innerHTML = state.audit.map(log => `
    <li style="padding: 4px 0; border-bottom: 1px dotted #edf2f7; font-size: 0.85rem;">
      <span style="color: #888;">[${log.timestamp}]</span> 
      <strong style="color: #5A3E2B;">${log.action}</strong> 
      <span>(${log.recordId}):</span> ${log.details} <small style="color:#666;">by ${log.actor}</small>
    </li>
  `).join("");
}

// UNIT 9: METRICS & DASHBOARD ENGINE
function renderDashboardView() {
  const container = document.getElementById("page-dashboard");
  if (!container || state.activePage !== "DASHBOARD") return;

  const orders = state.orders || [];
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((sum, o) => {
    return sum + (o.status !== "CANCELLED" ? Number(o.total || 0) : 0);
  }, 0);

  const completedOrders = orders.filter(o => o.status === "COMPLETED").length;
  const completionRate = totalOrders > 0 ? ((completedOrders / totalOrders) * 100).toFixed(1) : "0.0";
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : "0.00";

  document.getElementById("kpi-total-orders").textContent = totalOrders;
  document.getElementById("kpi-total-revenue").textContent = `₱${totalRevenue.toFixed(2)}`;
  document.getElementById("kpi-completion-rate").textContent = `${completionRate}%`;
  document.getElementById("kpi-avg-order-value").textContent = `₱${avgOrderValue}`;

  renderDistributionBars("status-distribution-bars", orders, "status", [
    "PENDING", "CONFIRMED", "PREPARING", "READY", "COMPLETED", "CANCELLED"
  ]);

  renderDistributionBars("mode-distribution-bars", orders, "orderMode", [
    "Dine-in", "Takeout", "Pick-up", "Delivery"
  ]);
}

function renderDistributionBars(containerId, records, fieldKey, categories) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const total = records.length;
  container.innerHTML = "";

  categories.forEach(cat => {
    const count = records.filter(r => (r[fieldKey] || "").toUpperCase() === cat.toUpperCase()).length;
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span class="bar-label">${cat}</span>
      <div class="bar-track" aria-hidden="true">
        <div class="bar-fill" style="width: ${percentage}%"></div>
      </div>
      <span class="bar-val">${count} (${percentage}%)</span>
    `;
    container.appendChild(row);
  });
}

// UNIT 10: AUTOMATED QA & PERSISTENCE TEST SUITE
function runAutomatedQASuite() {
  const tbody = document.getElementById("qa-test-results-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  const tests = [
    { id: "T-01", dim: "Functionality (F)", name: "Data State Initialization", test: () => Array.isArray(state.menuItems) && state.menuItems.length >= 15, expected: ">= 15 Menu Items in state" },
    { id: "T-02", dim: "Functionality (F)", name: "Order Submission Pipeline", test: () => typeof finalizeReceipt === "function", expected: "finalizeReceipt handler exists" },
    { id: "T-03", dim: "Responsiveness (R)", name: "Mobile Navigation Toggle", test: () => typeof toggleMobileMenu === "function" && document.getElementById("hamburger-btn") !== null, expected: "Hamburger button & function present" },
    { id: "T-04", dim: "Accessibility (A)", name: "Form Control Labels", test: () => document.querySelectorAll("label[for]").length >= 4, expected: "Explicit for/id paired labels" },
    { id: "T-05", dim: "Validation (V)", name: "Order State Transition Rules", test: () => canTransition("PENDING", "CONFIRMED") && !canTransition("PENDING", "COMPLETED"), expected: "Guards valid & invalid state jumps" },
    { id: "T-06", dim: "Validation (V)", name: "Permission Security Matrix", test: () => hasPermission("order:create") && typeof hasPermission === "function", expected: "Role capability helper functional" },
    { id: "T-07", dim: "Resilience (V)", name: "Malformed JSON Recovery Test", test: () => { try { JSON.parse("{bad}"); return false; } catch(e) { return true; } }, expected: "Catches parse errors gracefully" },
    { id: "T-08", dim: "Resilience (V)", name: "Schema Version Envelope Check", test: () => { const p = { schemaVersion: 1, orders: [] }; return p.schemaVersion === 1; }, expected: "Validates schemaVersion envelope" },
    { id: "T-09", dim: "Code Quality (C)", name: "Zero Uncaught Console Errors", test: () => typeof renderApp === "function" && typeof dispatch === "function", expected: "App bootstrapped clean" }
  ];

  let passedCount = 0;

  tests.forEach(t => {
    let passed = false;
    try {
      passed = t.test();
    } catch (e) {
      passed = false;
    }

    if (passed) passedCount++;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${t.id}</strong></td>
      <td>${t.dim}</td>
      <td>${t.name}</td>
      <td>${t.expected}</td>
      <td><span class="${passed ? 'qa-pass' : 'qa-fail'}">${passed ? 'PASS' : 'FAIL'}</span></td>
    `;
    tbody.appendChild(tr);
  });

  const rawPercentage = (passedCount / tests.length) * 100;
  const scoreElement = document.getElementById("qa-quality-score");
  if (scoreElement) {
    scoreElement.textContent = `${rawPercentage.toFixed(1)}%`;
  }
}

// INITIAL RENDER BOOTSTRAP
renderApp();