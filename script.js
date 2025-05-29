//your code here

let totalPrice = 0;

function grandPrice() {
    const nameInput = document.getElementById("item-name-input");
    const priceInput = document.getElementById("item-price-input");
    const price = parseFloat(priceInput.value);
	totalPrice +=  price;
    document.getElementById("total-price").innerText = totalPrice;

     nameInput.value = "";
     priceInput.value = "";
}

