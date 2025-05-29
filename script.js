let totalPrice = 0;


function grandPrice() {
    const nameInput = document.getElementById("item-name-input");
    const priceInput = document.getElementById("item-price-input");
    const name = nameInput.value.trim()
    const price = parseFloat(priceInput.value);

    const row = document.createElement("tr");
    
    // create cell for name
    const cellName = document.createElement("td");
    cellName.setAttribute("data-ns-test", "item-name");
    cellName.innerText = name;
    
    // create cell for price
    const cellPrice = document.createElement("td");
    cellPrice.setAttribute("data-ns-test", "item-name");
    cellPrice.innerText = price;

    row.appendChild(cellName);
    row.appendChild(cellPrice);
    document.getElementById("item-table").appendChild(row);


	totalPrice +=  price;
    document.getElementById("total-price").innerText = totalPrice;

     nameInput.value = "";
     priceInput.value = "";
}
