// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const refsEl = document.querySelectorAll('ul#categories li.item');

const headsEl = document.querySelectorAll('h2');
console.log('Number of categories:', headsEl.length);

headsEl.forEach(function (element, name) {
    console.log('Category:', element.innerHTML);
});


refsEl.forEach(function (element, name) {
    console.log('Elements:', element.lastElementChild.children.length);
});

// не розумію, чому не виходить помістити category і elements один під одним
// коли вкладаю один refsEl в headsEl і там вивожу, то category дублюється 3 рази


   





