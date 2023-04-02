function product(name, amount) {
  this.name = name;
  this.amount = amount;
}
var inStorage = [
  "Chips",
  "5",
  "CocaCola",
  "9",
  "Bananas",
  "14",
  "Pasta",
  "4",
  "Beer",
  "2",
];
var ordered = [
  "Flour",
  "44",
  "Oil",
  "12",
  "Pasta",
  "7",
  "Tomatoes",
  "70",
  "Bananas",
  "30",
];

var storage = [];
var order = [];

for (let index = 0; index < inStorage.length; index++) {
  storage.push(new product(inStorage[index], inStorage[index + 1]));
  index++;
}

for (let index = 0; index < ordered.length; index++) {
  order.push(new product(ordered[index], ordered[index + 1]));
  index++;
}

var asideList = [];
for (let i = 0; i < storage.length; i++) {
  for (let j = 0; j < order.length; j++) {
    if (storage[i].name === order[j].name) {
      storage[i].amount =
        parseInt(storage[i].amount) + parseInt(order[j].amount);
    } else {
      asideList.push(order[j]);
    }
  }
}
table = {};
let resultList = storage
  .concat(asideList)
  .filter(({ name }) => !table[name] && (table[name] = 1));

resultList.forEach((e) => {
  console.log(`${e.name} -> ${e.amount}`);
});
