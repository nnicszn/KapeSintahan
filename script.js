// Function to toggle Mobile Hamburger Menu
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

  orderMode: 'Dine-in',
  deliveryAddress: '',
  paymentMethod: 'Cash',
  customerNote: '',

  menuItems: [
    // FOOD
    { id: 'f2', name: 'Adobo Flakes Rice Bowl', category: 'Food', subcategory: 'Rice Bowls', price: 165, isBestSeller: false, isFavorite: false },
    { id: 'f4', name: 'Creamy Carbonara', category: 'Food', subcategory: 'Pastas', price: 175, isBestSeller: true, isFavorite: false },
    { id: 'f9', name: 'Crispy Kare-Kare', category: 'Food', subcategory: 'Rice Meals', price: 245, isBestSeller: true, isFavorite: false },
    { id: 'f10', name: 'Chicken Teriyaki Rice Bowl', category: 'Food', subcategory: 'Rice Bowls', price: 180, isBestSeller: false, isFavorite: false },
    { id: 'f11', name: 'Pork Sisig', category: 'Food', subcategory: 'Rice Meals', price: 190, isBestSeller: true, isFavorite: false },
    { id: 'f14', name: 'Pork BBQ', category: 'Food', subcategory: 'Rice Meals', price: 180, isBestSeller: true, isFavorite: false },

    // PASTRIES
    { id: 'p2', name: 'Chocolate Croissant', category: 'Pastries', subcategory: 'Croissant', price: 150, isBestSeller: true, isFavorite: false },
    { id: 'p3', name: 'Banana Loaf', category: 'Pastries', subcategory: 'Breads', price: 160, isBestSeller: false, isFavorite: false },
    { id: 'p4', name: 'Cinnamon Roll', category: 'Pastries', subcategory: 'Rolls', price: 130, isBestSeller: true, isFavorite: false },
    { id: 'p5', name: 'Oreo Muffin', category: 'Pastries', subcategory: 'Muffins', price: 140, isBestSeller: false, isFavorite: false },
    { id: 'p6', name: 'Ube Cheese Roll', category: 'Pastries', subcategory: 'Rolls', price: 170, isBestSeller: true, isFavorite: false },
    { id: 'p7', name: 'Cookies n Cream Loaf', category: 'Pastries', subcategory: 'Breads', price: 180, isBestSeller: true, isFavorite: false },
    { id: 'p8', name: 'Chocolate Almond Loaf', category: 'Pastries', subcategory: 'Breads', price: 200, isBestSeller: false, isFavorite: false },
    { id: 'p9', name: 'Biscoff Roll', category: 'Pastries', subcategory: 'Rolls', price: 170, isBestSeller: true, isFavorite: false },
    { id: 'p10', name: 'Pistachio Loaf', category: 'Pastries', subcategory: 'Breads', price: 180, isBestSeller: true, isFavorite: false },
    { id: 'p11', name: 'Ube Loaf', category: 'Pastries', subcategory: 'Breads', price: 190, isBestSeller: true, isFavorite: false },
    { id: 'p12', name: 'Cheese Bread', category: 'Pastries', subcategory: 'Breads', price: 200, isBestSeller: true, isFavorite: false },
    { id: 'p13', name: 'Chocolate Bread', category: 'Pastries', subcategory: 'Breads', price: 220, isBestSeller: true, isFavorite: false },


    // DESSERTS
    { id: 'o1', name: 'Ube Cheesecake', category: 'Desserts', subcategory: 'Cakes', price: 180, isBestSeller: true, isFavorite: false },
    { id: 'o2', name: 'Mango Float', category: 'Desserts', subcategory: 'Cakes', price: 150, isBestSeller: false, isFavorite: false },  
    { id: 'o3', name: 'Tiramisu', category: 'Desserts', subcategory: 'Cakes', price: 200, isBestSeller: true, isFavorite: false },
    { id: 'o4', name: 'Chocolate Chip Cookie', category: 'Desserts', subcategory: 'Cookie', price: 130, isBestSeller: false, isFavorite: false },
    { id: 'o5', name: 'Red Velvet Cookie', category: 'Desserts', subcategory: 'Cookie', price: 120, isBestSeller: false, isFavorite: false },
    { id: 'o6', name: 'Matcha Cookie', category: 'Desserts', subcategory: 'Cookie', price: 140, isBestSeller: true, isFavorite: false },
    { id: 'o7', name: 'Matcha Cheesecake', category: 'Desserts', subcategory: 'Cakes', price: 240, isBestSeller: true, isFavorite: false },
    

    // DRINKS
    { id: 'd1', name: 'Spanish Latte', category: 'Drinks', subcategory: 'Coffee', price: 140, isBestSeller: true, isFavorite: true },
    { id: 'd2', name: 'Sea Salt Latte', category: 'Drinks', subcategory: 'Coffee', price: 150, isBestSeller: true, isFavorite: false },
    { id: 'd3', name: 'Classic Latte', category: 'Drinks', subcategory: 'Coffee', price: 130, isBestSeller: false, isFavorite: false },
    { id: 'd4', name: 'Java Chips Frappe', category: 'Drinks', subcategory: 'Frappe', price: 165, isBestSeller: true, isFavorite: false },
    { id: 'd5', name: 'Matcha Latte', category: 'Drinks', subcategory: 'Non-Coffee', price: 145, isBestSeller: false, isFavorite: false },
    { id: 'd6', name: 'Sea Salt Matcha', category: 'Drinks', subcategory: 'Non-Coffee', price: 155, isBestSeller: true, isFavorite: false },
    { id: 'd7', name: 'Ube-Matcha Latte', category: 'Drinks', subcategory: 'Non-Coffee', price: 160, isBestSeller: false, isFavorite: true },
    { id: 'd8', name: 'Dirty Matcha Latte', category: 'Drinks', subcategory: 'Coffee', price: 160, isBestSeller: false, isFavorite: false },
    { id: 'd9', name: 'Strawberry Milk Frappe', category: 'Drinks', subcategory: 'Non-Coffee', price: 195, isBestSeller: false, isFavorite: false },
  ],

  draftQuantities: {},
  cart: {}
};

let state = initialState;


function appReducer(currentState, action) {
  console.log(`[STATE TRACE LOG] Action: ${action.type}`, action, `PrevState:`, currentState);

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

    case 'SET_ORDER_MODE':
      return { ...currentState, orderMode: action.payload };

    case 'SET_DELIVERY_ADDRESS':
      return { ...currentState, deliveryAddress: action.payload };

    case 'SET_PAYMENT_METHOD':
      return { ...currentState, paymentMethod: action.payload };

    case 'SET_CUSTOMER_NOTE':
      return { ...currentState, customerNote: action.payload };

    case 'PLACE_ORDER':
      return currentState;

    case 'CLEAR_CART_AND_HOME':
      return {
        ...currentState,
        cart: {},
        activePage: 'HOME',
        deliveryAddress: '',
        customerNote: ''
      };

    default:
      return currentState;
  }
}

function dispatch(action) {
  state = appReducer(state, action);

  if (action.type === 'NAVIGATE_TO') {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('open');
  }

  renderApp();
}


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
  document.getElementById(`page-${state.activePage.toLowerCase()}`).classList.add('active');

  const pages = ['HOME', 'ABOUT', 'MENU', 'ORDER'];
  document.querySelectorAll('.nav-btn').forEach((btn, index) => {
    btn.classList.toggle('active', state.activePage === pages[index]);
  });

  const { totalCount, totalPrice } = getCartTotals();
  document.getElementById('nav-cart-count').innerText = `(${totalCount})`;

  if (state.activePage === 'MENU') {
    const items = getProcessedData();
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';

    if (items.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 20px;">Walang nahanap na menu item.</p>`;
    } else {
      items.forEach(item => {
        const draftQty = state.draftQuantities[item.id] || 1;
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div>
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
    if (totalCount > 0) {
      floatingBar.classList.remove('hidden');
      document.getElementById('bar-items-count').innerText = `${totalCount} item(s) selected`;
      document.getElementById('bar-total-price').innerText = `| Total: ₱${totalPrice.toFixed(2)}`;
    } else {
      floatingBar.classList.add('hidden');
    }
  }

  if (state.activePage === 'ORDER') {
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
      cartList.innerHTML = `<p style="text-align:center; color:#888;">Walang laman ang iyong order cart.</p>`;
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

  const receiptModal = document.getElementById('receipt-modal');
  if (receiptModal) {
    receiptModal.classList.add('hidden');
  }
}

function handlePlaceOrder() {
  const { totalCount, totalPrice } = getCartTotals();
  if (totalCount === 0) {
    alert('Pumili muna ng items sa Menu bago mag-place ng order!');
    return;
  }

  if (state.orderMode === 'Delivery' && !state.deliveryAddress.trim()) {
    alert('Paki-lagay ang iyong Delivery Address!');
    return;
  }

  document.getElementById('receipt-date').innerText = new Date().toLocaleString();
  document.getElementById('receipt-mode').innerText = state.orderMode;
  document.getElementById('receipt-payment').innerText = state.paymentMethod;

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

const originalDispatch = dispatch;
dispatch = function(action) {
  if (action.type === 'PLACE_ORDER') {
    handlePlaceOrder();
  } else {
    originalDispatch(action);
  }
};

renderApp();