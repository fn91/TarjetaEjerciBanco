import { accountFormat, formatDateShort } from '../../node_modules/@labsjavascript/utils/main.js';

const cardNumber = document.querySelector('.card-number');
const cardDate = document.querySelector('.card-date');

cardNumber.textContent = accountFormat(cardNumber.textContent);
cardDate.textContent = formatDateShort('2025-12-31');