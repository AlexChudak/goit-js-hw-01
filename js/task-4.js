const credits = 23580;
const pricePerDroid = 300;

let totalPrice;
let cash;

let message;

const request = prompt('Сколько дроидов Вы хотите купить?');

totalPrice = request * pricePerDroid;
cash = credits - totalPrice;

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (request === null) {
  message = 'Отменено пользователем!';
} else {
  message = `Вы купили ${request} дроидов, на счету осталось ${cash} кредитов.`;
}
alert(message);
