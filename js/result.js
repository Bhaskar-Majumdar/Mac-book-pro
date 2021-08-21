//Variables for three parts
const memory = document.getElementById('memory');
const storage = document.getElementById('storage');
const delivery = document.getElementById('delivery');

//Event handle Listeners
memory.addEventListener('click', optionHandler)
storage.addEventListener('click', optionHandler)
delivery.addEventListener('click', optionHandler)

//Variables for price calculated
const memoryCost = document.getElementById('memoryCost').lastElementChild.lastChild;
const storageCost = document.getElementById('storageCost').lastElementChild.lastChild;
const deliveryCost = document.getElementById('deliveryCost').lastElementChild.lastChild;
const totalPrice = document.getElementById('totalPrice').lastElementChild.lastChild;
const total = document.getElementById('total').lastElementChild;
const promoCodeForm = document.getElementById('promoCodeForm')

// option handler function for condition part
function optionHandler(call) {
    text = call.target.innerText;
    if (text.indexOf('memory') != -1) {
        memoryCost.innerText = updatePrice(text)
    }
    else if (text.indexOf('storage') != -1) {
        storageCost.innerText = updatePrice(text)
    }
    else {
        deliveryCost.innerText = updatePrice(text)
    }
    const currentPrice = 1299 + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText)
    total.innerText = currentPrice;
    totalPrice.innerText = currentPrice;
}
// Price updating function
function updatePrice(text) {
    if (text.includes('16GB')) {
        return 180;
    }
    else if (text.includes('512GB')) {
        return 100;
    }
    else if (text.includes('1TB')) {
        return 180;
    }
    else if (text.includes('Aug 21')) {
        return 20;
    }
    else {
        return 0;
    }
}
//Promo Code
const button = document.querySelector('.btn-danger')
promoCodeForm.addEventListener('submit', (call) => {
    let code = inputField.value.trim()
    if (code === 'stevekaku') {
        inputField.setAttribute('disabled', true);
        button.setAttribute('disabled', true);
        memory.removeEventListener('click', optionHandler)
        storage.removeEventListener('click', optionHandler)
        delivery.removeEventListener('click', optionHandler)
        total.innerText = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.2
        alert('Applied This Promo Code Successfully!!');
    }
    else {
        alert('Promo Code Is Wrong!! Try Again');
    }
    inputField.value = '';
    call.preventDefault();
})