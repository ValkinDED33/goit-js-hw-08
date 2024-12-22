// Отримуємо доступ до форми
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Отримуємо значення інпутів форми через elements
  const { email, password } = event.currentTarget.elements;

  // Очищуємо значення від пробілів по краях
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка на заповненість полів
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо поля форми
  loginForm.reset();
});
