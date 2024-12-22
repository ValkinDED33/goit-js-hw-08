// Генерація випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення квадратів
function createBoxes(amount) {
  destroyBoxes(); // Очищення попередньої колекції
  let size = 30; // Початковий розмір квадрата
  const boxes = []; // Масив для нових елементів

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.borderRadius = '4px';
    boxes.push(box);
    size += 10; // Збільшуємо розмір для наступного квадрата
  }

  // Додаємо всі квадрати за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробка натискання на кнопку Create
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  // Перевірка валідності значення
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищення інпуту
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Обробка натискання на кнопку Destroy
destroyBtn.addEventListener('click', destroyBoxes);
