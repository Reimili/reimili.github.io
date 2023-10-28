function calculatePrice() {
	let selectedProduct = document.getElementById("product").value;
	let amount = document.getElementById("amount").value;
	let isNumber = /^[0-9]*(\.[0-9]+)?$/.test(amount);
	let price = getProductPrice(selectedProduct);
  
	if (isNumber) {
		let parsedAmount = parseFloat(amount);
		if (Number.isInteger(parsedAmount)) {
			let cost = price * parsedAmount;
			document.getElementById("result").textContent = cost + " руб";
		}
	} else {
		document.getElementById("result").textContent =
		"Неверное количество товара";
	}
  }
  
  function getProductPrice(productName) {
	switch (productName) {
	case "1":
		return 89;
	case "2":
		return 32;
	case "3":
		return 10;
	case "4":
		return 0;
	case "5":
		return 37890;
	default:
		return 0;
	}
  }