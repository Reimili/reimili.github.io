window.onload = function () {
	let btn_price = document.getElementById("button");
	btn_price.addEventListener("click", function (e) {
		e.preventDefault();
		let good = document.getElementById("product");
		let count = document.getElementById("number").value;
		let priceEl = good.options[good.selectedIndex];
		let price = priceEl.getAttribute("data-price");
		let price_field = document.getElementById("sum");

		if (/^\d+$/.test(count)) {
			price_field.innerHTML = price * count + "₽";
		} else {
			price_field.innerHTML = "Введите корректное число товаров";
		}
	});
};