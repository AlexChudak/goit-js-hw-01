let input;
let total = 0;

input = prompt('Введите число');

while (input !== null) {
  if (Number(input) !== null) {
    input = Number(input);
    total += input;
    console.log(input);
  }
  if (input === null) {
    alert(`Сумма ровна ${total}`);
    break;
  }
  input = prompt('Введите число');
}
