function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
    showTotalPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

function showTotalPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber < 5) {
        let amount = amountNumber * price + 500;
        showAmount.innerHTML = amount;
    } else if (amountNumber > 5) {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
    










