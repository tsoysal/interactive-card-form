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

cardNoInput.addEventListener('input', (e)=> {
    cardNo.innerText = e.target.value;
})
cardHolderInput.addEventListener('input', (e)=> {
    cardHolder.innerText = e.target.value;
})
cardMonthInput.addEventListener('input', (e)=> {
    cardMonth.innerText = e.target.value;
})
cardYearInput.addEventListener('input', (e)=> {
    cardYear.innerText = e.target.value;
})
cardCvcInput.addEventListener('input', (e)=> {
    cardCvc.innerHTML = e.target.value;
});