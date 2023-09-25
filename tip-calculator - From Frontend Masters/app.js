// Pobieranie DOM
const inputBill = document.querySelector(".input-bill");

const btns = document.querySelectorAll(".procent");

const custom = document.querySelector(".custom");

const resetBtn = document.querySelector(".reset");

const numberPeople = document.querySelector(".people");

const tipAmount = document.querySelector(".tip-amount-value");

const totalAmount = document.querySelector(".total-value");





function selectTip(){
const billCost = Number(inputBill.value);
const peopleNumber = Number(numberPeople.value);
const tipValue = Number(this.innerHTML);
const tipAmountConst = Math.ceil((billCost * (tipValue / 100) / peopleNumber) * 100) / 100;
const totalAmountConst = Math.ceil((billCost / peopleNumber + tipAmountConst) * 100) / 100;
tipAmount.innerHTML = tipAmountConst;
totalAmount.innerHTML = totalAmountConst
}

function customTip(){
const billCost = Number(inputBill.value);
const peopleNumber = Number(numberPeople.value);
const tipValue = custom.value;
const tipAmountConst = Math.ceil((billCost * (tipValue / 100) / peopleNumber) * 100) / 100;
const totalAmountConst = Math.ceil((billCost / peopleNumber + tipAmountConst) * 100) / 100;
tipAmount.innerHTML = tipAmountConst;
totalAmount.innerHTML = totalAmountConst
}

function resetAll(){
    numberPeople.value = null;
    inputBill.value = null;
    tipAmount.innerHTML = null;
    totalAmount.innerHTML = null;
}








// Nasluchiwanie

btns.forEach((button) => button.addEventListener("click", selectTip));

custom.addEventListener(("keyup"), customTip);

resetBtn.addEventListener("click", resetAll);