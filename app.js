import { items } from './js/data.js';

let collection = [];

items.map(item => {
  document.querySelector('.item-list').innerHTML += `
    <div style="margin:2rem 1rem">
      <img style="height:60px" src="${item.image}">
      <h3>${item.name}</h3>
      <p>${item.desc}</h3>
      <button class="add" data-id=${item.id}>Add to collection</button>
    </div>
  `
});

let addBtns = [...document.querySelectorAll(".add")];
addBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addItem(e.target);
  });
});

function updateCollection() {
  document.querySelector('.collection').innerHTML = '';
  collection.forEach((item) => {
    document.querySelector('.collection').innerHTML += `
      <div style="margin:2rem 1rem">
        <img style="height:60px" src="${item.image}">
      </div>
    `
  });
};

function addItem(target) {
  let itemID = target.dataset.id;
  let item = items.find((item) => itemID == item.id);
  collection.push(item);
  updateCollection();
}

console.log(collection);