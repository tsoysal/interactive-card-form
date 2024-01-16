import './sass/main.scss';

const cardNo = document.querySelector('.cardSection__cardFront__Numbers');
const cardHolder = document.querySelector('.cardSection__cardFront__HolderName');
const cardMonth = document.querySelector('.month');
const cardYear = document.querySelector('.year');
const cardCvc = document.querySelector('.cardSection__cardBack__cvc');

const cardNoInput = document.querySelector('input[name="number"]');
const cardHolderInput = document.querySelector('input[name="name"]');
const cardMonthInput = document.querySelector('input[name="month"]');
const cardYearInput = document.querySelector('input[name="year"]');
const cardCvcInput = document.querySelector('input[name="cvc"]');

cardHolderInput.addEventListener('input', (e) => {
    cardHolder.innerText = e.target.value;
    if (e.target.value == "") {
        cardHolder.innerText = "JANE APPLESEED";
    }
})
cardNoInput.addEventListener('input', (e) => {
    cardNo.innerText = e.target.value;
    if (e.target.value == "") {
        cardNo.innerText = "0000 0000 0000 0000";
    }
})
cardMonthInput.addEventListener('input', (e) => {
    cardMonth.innerText = e.target.value;
    if (e.target.value == "") {
        cardMonth.innerText = "00";
    }
})
cardYearInput.addEventListener('input', (e) => {
    cardYear.innerText = e.target.value;
    if (e.target.value == "") {
        cardYear.innerText = "00";
    }
})
cardCvcInput.addEventListener('input', (e) => {
    cardCvc.innerText = e.target.value;
    if (e.target.value == "") {
        cardCvc.innerText = "000";
    }
});

function checkLetters(val) {
    const letters = /^[A-Za-z]+$/;
    if (val.match(letters)) {
        return true;
    } else {
        return false;
    }
}
