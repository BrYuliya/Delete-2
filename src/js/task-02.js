const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingrEl = document.querySelector('#ingredients');

const newList = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  liEl.classList.add('item');

  return liEl;
});

console.log(newList);

ingrEl.append(...newList);





