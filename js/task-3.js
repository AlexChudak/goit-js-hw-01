const ADMIN_PASSWORD = 'jqueryismyjam';
let message = 'Доступ запрещен, неверный пароль!';

const passwordQuestion = prompt('Введите пароль админа');
// message = 'Отменено пользователем!';
// alert(message);
if (passwordQuestion === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (passwordQuestion === null) {
  message = 'Отменено пользователем!';
}

alert(message);
