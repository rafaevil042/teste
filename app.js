// app.js

function calculateDiscountPercentage() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const desiredPrice = parseFloat(document.getElementById('desired-price').value);

    if (isNaN(originalPrice) || isNaN(desiredPrice) || originalPrice <= 0 || desiredPrice <= 0) {
        alert('Por favor, insira valores válidos e positivos.');
        return;
    }

    if (desiredPrice >= originalPrice) {
        alert('O preço desejado deve ser menor que o preço original.');
        return;
    }

    const discountPercentage = ((originalPrice - desiredPrice) / originalPrice) * 100;

    document.getElementById('result').innerHTML = `
        <p>Você precisa dar um desconto de: ${discountPercentage.toFixed(2)}%</p>
    `;
}
