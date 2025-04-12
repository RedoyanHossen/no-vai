// URL থেকে product_id পেতে (যেমন: ?product_id=1)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product_id');

// JSON ডেটা ফেচ করুন
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);
        const resultDiv = document.getElementById('result');

        if (product) {
            resultDiv.textContent = product.isIsraeli ? "YES" : "NO";
            resultDiv.className = product.isIsraeli ? "yes" : "no";
        } else {
            resultDiv.textContent = "?";
            resultDiv.style.color = "#666";
        }
    });
