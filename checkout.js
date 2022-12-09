/* --------- variables ------- */
let isPersonalInformationFilled = false;
let isShippingMethodChosen = false;
let isPaymentMethodFilled = false;

window.addEventListener('load', function() {
const shippingMethod = document.getElementById("shipping-method");
const paymentMethod = document.getElementById("payment-method");
const purchaseButton = document.getElementById("purchase-button");

const cityInput = document.getElementById("longer");
const normalSpeed = document.getElementById("normal");
const cvvCvc = document.getElementById("pay-short");

/* ---------Is Personal Information Filled?--------- */
cityInput.addEventListener('input', function() {
    if (isPersonalInformationFilled = true) {
    shippingMethod.style.display = 'flex';
    console.log("Personal Information filled");
    }
})

/* ---------Is Deliver Option Chosen?--------- */
normalSpeed.addEventListener('click', function() {
    if (isShippingMethodChosen = true) {
        paymentMethod.style.display = 'block';
        console.log("Delivery Option chosen");
    }
})

/* ---------Is Card Information Filled?--------- */
cvvCvc.addEventListener('input', function() {
    if (isPaymentMethodFilled = true) {
    purchaseButton.style.display = 'flex';
    console.log("Card Details filled");
    }
})

})