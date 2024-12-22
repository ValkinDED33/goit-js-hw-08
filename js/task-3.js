// Отримуємо посилання на інпут і спан
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухач події input
nameInput.addEventListener('input', () => {
  // Очищуємо значення від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо значення порожнє або складається лише з пробілів, використовуємо "Anonymous"
  nameOutput.textContent = trimmedValue || 'Anonymous';
});
