<script>
localStorage.setItem('cart', JSON.stringify([
  { id: 1, name: "T-Shirt", price: 29.99 },
  { id: 2, name: "Hoodie", price: 49.99 }
]));

let inactivityTime = 0;
let maxInactivity = 30;
function resetTimer() {
  inactivityTime = 0;
}
window.onmousemove = resetTimer;
window.onkeypress = resetTimer;

let popupShown = false;
document.addEventListener("mouseleave", function(e) {
  if (e.clientY < 0 && !popupShown) {
    showPopup();
    popupShown = true;
  }
});

setInterval(() => {
  inactivityTime++;
  if (inactivityTime >= maxInactivity && !popupShown) {
    showPopup();
    popupShown = true;
  }
}, 1000);

function showPopup() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div style="
      position: fixed; top: 20%; left: 50%; transform: translateX(-50%);
      background: #111; color: #f5f5f5;
      padding: 28px;
      width: 90%;
      max-width: 420px;
      font-family: 'Helvetica Neue', sans-serif;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
      border-radius: 20px;
      text-align: center;
      z-index: 9999;
      animation: fadeIn 0.3s ease;
    ">
      <h2 style="font-size: 24px; margin-bottom: 10px;">Don’t Bounce Yet 👀</h2>
      <p style="font-size: 16px; margin-bottom: 24px;">You’ve got some fire in your cart. Want 10% off to seal the deal?</p>
      <div style="display: flex; justify-content: center; gap: 12px;">
        <button id="accept-offer" style="
          background-color: #fff;
          color: #111;
          padding: 10px 20px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        ">Apply Discount</button>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: transparent;
          color: #aaa;
          font-weight: 500;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        ">No Thanks</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById('accept-offer').onclick = () => {
    sendCartToCRM(cart);
    popup.remove();
    alert("10% discount applied! 🖤");
  };
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

function sendCartToCRM(cart) {
  fetch("https://your-webhook-url.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart, timestamp: new Date().toISOString() })
  }).catch(err => console.error("Webhook error:", err));
}
</script>