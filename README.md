# 🛒 AbandonCart Recovery Script

A lightweight, plug-and-play JavaScript snippet to reduce cart abandonment and boost conversions — perfect for small eCommerce stores, streetwear brands, and custom sites without expensive plugins.

## 🔥 Features

- Detects cart activity and user intent to exit
- Triggers a modern, luxury-styled popup offer
- Offers a custom discount or message
- Optionally sends data to your webhook or CRM
- Fully customizable (cart logic, messages, discount codes, etc.)

---

## ⚙️ How to Use

### 1. 🧩 Add the Script

Paste the full script into your site's HTML, right before the closing `</body>` tag.

```html
<!-- Insert your <script> here -->
```

### 2. 🛍 Customize Your Cart Logic

Replace this mock cart setup with your own cart logic:

```js
localStorage.setItem('cart', JSON.stringify([
  { id: 1, name: "T-Shirt", price: 29.99 },
  { id: 2, name: "Hoodie", price: 49.99 }
]));
```

If your site already tracks cart items, update the logic to pull directly from your real cart source.

---

### 3. 🎯 Customize the Offer Message

Inside the `showPopup()` function, you can update:
- Headline
- Offer text (e.g. "Want 10% off?")
- Button actions and appearance
- Discount code logic

```js
<p>You’ve got some fire in your cart. Want 10% off to seal the deal?</p>
```

---

### 4. 📬 Add a Webhook (Optional)

To send cart data to your webhook (for CRM, Google Sheets, etc.), replace the placeholder:

```js
fetch("https://your-webhook-url.com", {
```

---

## 💡 Tips

- You can use sessionStorage instead of localStorage if your cart resets on reload.
- Works on custom HTML/CSS/JS sites with no backend.
- Use EmailJS or Zapier webhook to connect with emails or automation.

---

## 🧠 License

MIT-style — use it, remix it, make it better.
Created with ❤️ by bakcrooms