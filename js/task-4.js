const credits = 23580;
const pricePerDroid = 300;

let totalPrice;
let cash;

const request = prompt('Сколько дроидов Вы хотите купить?');

totalPrice = request * pricePerDroid;
cash = credits - totalPrice;

if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else if (request === null) {
  alert('Отменено пользователем!');
} else {
  alert(`Вы купили ${request} дроидов, на счету осталось ${cash} кредитов.`);
}
