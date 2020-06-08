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
  
  for (let [key, value] in Object.entries(collection)) {
    insertParam(key, value);
  }
};

function addItem(target) {
  let itemID = target.dataset.id;
  let item = items.find((item) => itemID == item.id);
  collection.push(item);
  updateCollection();
  console.log(collection);
}

function insertParam(key, value) {
  key = encodeURIComponent(key);
  value = encodeURIComponent(value);

  // kvp looks like ['key1=value1', 'key2=value2', ...]
  var kvp = document.location.search.substr(1).split('&');
  let i=0;

  for(; i<kvp.length; i++) {
    if (kvp[i].startsWith(key + '=')) {
      let pair = kvp[i].split('=');
      pair[1] = value;
      kvp[i] = pair.join('=');
      break;
    }
  }

  if(i >= kvp.length) {
    kvp[kvp.length] = [key,value].join('=');
  }

  // can return this or...
  let params = kvp.join('&');

  // reload page with new params
  document.location.search = params;
}