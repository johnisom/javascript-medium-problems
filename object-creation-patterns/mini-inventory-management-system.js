// Exercise 6

const Item = function Item(itemName, category, quantity) {
  const strippedItemName = itemName.replace(/[^a-z]/i, '');
  const firstPart = strippedItemName.slice(0, 3).toUpperCase();
  const secondPart = category.slice(0, 2).toUpperCase();

  if (!/^\w+$/.test(category) ||
      category.length < 5 ||
      strippedItemName.length < 5 ||
      typeof quantity !== 'number') return { notValid: true };

  this.skuCode = firstPart + secondPart;
  this.itemName = itemName;
  this.category = category;
  this.quantity = quantity;

  return this;
};

const ItemManager = {
  items: [],
  create(...args) {
    const newItem = new Item(...args);
    if (newItem.notValid) return false;
    this.items.push(newItem);
    return true;
  },
  update(skuCode, props) {
    Object.assign(this.getItemBySkuCode(skuCode), props);
  },
  delete(skuCode) {
    const index = this.getIndexBySkuCode(skuCode);
    this.items.splice(index, 1);
  },
  inStock() {
    return this.items.filter(({ quantity }) => quantity > 0);
  },
  itemsInCategory(itemCategory) {
    return this.items.filter(({ category }) => category === itemCategory);
  },
  getIndexBySkuCode(skuCode) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].skuCode === skuCode) return i;
    }

    return undefined;
  },
  getItemBySkuCode(skuCode) {
    return this.items[this.getIndexBySkuCode(skuCode)];
  }
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  createReporter(skuCode) {
    const item = this.items.getItemBySkuCode(skuCode);

    return {
      itemInfo() {
        Object.entries(item).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      },
    };
  },
  reportInStock() {
    console.log(this.items.inStock().map(({ itemName }) => itemName).join());
  },
};
