let country;
let price;
let answerTlc;

const answer = prompt('введите название страны для доставки');

if (answer === null) {
} else {
  answerTlc = answer.toLowerCase();

  switch (answerTlc) {
    case 'китай': {
      country = 'Китай';
      price = '100';
      break;
    }
    case 'чили': {
      country = 'Чили';
      price = '250';
      break;
    }
    case 'австралия': {
      country = 'Австралия';
      price = '170';
      break;
    }
    case 'индия': {
      country = 'Индия';
      price = '80';
      break;
    }
    case 'ямайка': {
      country = 'Ямайка';
      price = '120';
      break;
    }

    default:
      alert('В вашей стране доставка не доступна');
  }
}

alert(`Доставка в ${country} будет стоить ${price} кредитов`);

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
