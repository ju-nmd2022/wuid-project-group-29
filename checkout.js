/* --------- variables ------- */

let isPersonalInformationFilled = false;
let isShippingMethodChosen = false;
let isPaymentMethodFilled = false;

const personalInformation = document.getElementById("personal-information");
const shippingMethod = document.getElementById("shipping-method");
const paymentMethod = document.getElementById("payment-method");
const purchaseButton = document.getElementById("purchase-button");

const cityInput = document.getElementsByClassName("longer");
const normalSpeed = document.getElementsByClassName("shipping-speed-normal");
const cvvCvc = document.getElementsByClassName("pay-short");

/* ---------Is Personal Information Filled?--------- */

/* https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event */

cityInput.addEventListener('input', (showShippingMethod) {
    shippingMethod.style.display='block';
    console.log("hej");
}

function showShippingMethod(){
    shippingMethod.style.display='block';
    console.log("hej")
}
