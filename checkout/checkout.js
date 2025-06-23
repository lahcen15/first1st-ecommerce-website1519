const cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
const summaryDiv = document.getElementById('checkout-summary');
const form = document.getElementById('checkout-form');
const orderSuccess = document.getElementById('order-success');

function renderCartSummary() {
  if (!cart.length) {
    summaryDiv.innerHTML = `<p>Your cart is empty.</p>`;
    if (form) form.style.display = 'none';
    return;
  }

  let total = 0;
  let html = `<h3>Order Summary</h3><ul style="padding-left:0; list-style:none;">`;
cart.forEach((item, idx) => {
  const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
  total += price * item.qty;
  html += `
    <li style="margin-bottom:8px; display:flex; flex-direction:column; align-items:flex-start; gap:4px;">
      <div style="display:flex; align-items:center; width:100%;">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;object-fit:cover;border-radius:5px; background-color : white;">` : ''}
        <b style="flex:1; margin-left:10px;">${item.name}</b> x ${item.qty} — <span style="margin-left:6px;">$${(price * item.qty).toFixed(2)} </span>
        <button class="show-details-btn" data-idx="${idx}" style="margin-left:10px; padding:2px 10px; border-radius:5px; border:1px solid #ccc; background:#f5f5f5; cursor:pointer;font-size:1.2em; display:flex; align-items:center; justify-content:center;">
          <span class="arrow-icon" style="transition: transform 0.2s;">▼</span>
        </button>
      </div>
      <div class="product-details" id="details-${idx}" style="display:none; background:#f7f7f7; padding:8px 12px; border-radius:6px; margin-top:6px; width:100%;">
        <div>Color: <span>${item.color || 'Not selected'}</span></div>
  ${item.category === 'cap' ? '' : `<div class="size-detail">Size: <span>${item.size || 'Not selected'}</span></div>`}
      </div>
    </li>`;
});


html += `</ul>
  <div style="margin-top:12px; font-weight:600;">
    <div style="margin-bottom: 3px;"> Delivery fees : <span class="delivery-fees">Please choose a delivery point to view delivery fees . </span> </div>
    Total : <span class="total">$${ (total).toFixed(2)}</span>
  </div>
`;
summaryDiv.innerHTML = html;

// Add event listeners for details buttons
document.querySelectorAll('.show-details-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const idx = btn.getAttribute('data-idx');
    const detailsDiv = document.getElementById(`details-${idx}`);
    const isOpen = detailsDiv.style.display === 'block';
    detailsDiv.style.display = isOpen ? 'none' : 'block';
    btn.classList.toggle('open', !isOpen);
    // No need to change text, just rotate the arrow
  });
});
}

renderCartSummary();

// 3. Handle form submission
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation (HTML5 required already does most)
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const address = formData.get('address').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const state = formData.get('state').trim();
    const city = formData.get('city').trim();
    const moreinfo = formData.get('moreinfo').trim();


    if (!name || !address || !email || !phone || !state || !city) {
    alert('Please fill in all required fields.');
    return;
    }

    // Here you could send the order to a server or show a confirmation
    if (orderSuccess) {
  orderSuccess.innerHTML = `
    <div style="background: #f5fafd; border: 1.5px solid #2196f3; border-radius: 10px; padding: 28px 18px; max-width: 420px; margin: 32px auto 0 auto; box-shadow: 0 2px 12px #2196f31a;">
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
        <span style="font-size: 2.2em; color: #4caf50; margin-right: 10px;">✔️</span>
        <span style="font-size: 1.35em; font-weight: 600; color: #1769aa;">Order Confirmed!</span>
      </div>
      <div style="margin-bottom: 10px; color: #222;">
        Thank you, <b>${name}</b>! Your order has been placed successfully.
      </div>
      <div style="margin-bottom: 10px; color: #444;">
        <b>Delivery address:</b> ${address}, ${city}, ${state}
      </div>
      <div style="margin-bottom: 10px; color: #444;">
        <b>Contact:</b> ${phone}
      </div>
      <div style="margin-bottom: 10px; color: #444;">
        <b>Payment method:</b> Payment on Delivery
      </div>
      <div style="margin-top: 12px; color: #2196f3;">
        You will receive a confirmation email at <b>${email}</b>.
      </div>
    </div>
  `;
  orderSuccess.style.display = 'block';
}

    // Clear the cart
    localStorage.removeItem('cart');
  });
}







