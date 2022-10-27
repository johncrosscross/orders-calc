
const qtyCD = document.getElementById('cakedonuts');
const qtyGD = document.getElementById('glazeddonuts');

const priceCD = 9.99;
const priceGD = 6.99;

document.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		calculation();
	} else {
		return;
	}
});


function calculation() {
	if (isNaN(qtyCD.value) || isNaN(qtyGD.value)) {
		alert('Invalid characters!');
		qtyCD.value = '';
		qtyGD.value = '';
		return;
	} else {
	let total = document.getElementById('total');
	total.value = '$' + ((qtyGD.value * parseFloat(priceGD)) + (qtyCD.value * parseFloat(priceCD))).toFixed(2);
	} 
}

function Clear() {
	total.value = '';
	qtyCD.value = '';
	qtyGD.value = '';
}