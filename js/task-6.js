let input;
let total = 0;

input = prompt('Введите число');

while (Number) {
  if (Number(input) > 0) {
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
