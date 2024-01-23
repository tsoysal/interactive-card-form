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
    if (e.target.value == "") {
        cardHolder.innerText = "JANE APPLESEED";
    }
    if(checkLetters(e.target.value)) {
    cardHolder.innerText = e.target.value;
    }
    else {
        e.target.value = e.target.value.slice(0, e.target.value.length-1)
    }
})
cardNoInput.addEventListener('input', (e) => {
    //format card number groups
    e.target.value = e.target.value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (e.target.value == "") {
        cardNo.innerText = "0000 0000 0000 0000";
    }
    else if (e.target.value.length > 19) {
        e.target.value = e.target.value.slice(0, 19)
    }
    else {
        cardNo.innerText = e.target.value;
    }
})
cardMonthInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 2);
    cardMonth.innerText = e.target.value;
    if (e.target.value == "") {
        cardMonth.innerText = "00";
    }
})
cardYearInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 2);
    cardYear.innerText = e.target.value;
    if (e.target.value == "") {
        cardYear.innerText = "00";
    }
})
cardCvcInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 3);
    cardCvc.innerText = e.target.value;
    if (e.target.value == "") {
        cardCvc.innerText = "000";
    }
});

function checkLetters(val) {
    const letters = /^[A-Za-z\s]+$/;
    if (val.match(letters)) {
        return true;
    } else {
        return false;
    }
}
