'use strict'

const numberOfItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfItem.length}`);

const CategiresEl = document.querySelectorAll('li.item');
CategiresEl.forEach((category) => {
console.log(`Category: ${category.firstElementChild.textContent}`)
console.log(`Elements: ${category.lastElementChild.children.length}`)
})

