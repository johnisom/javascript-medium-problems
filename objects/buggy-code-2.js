// Exercise 2

/**
 * The object is being mutated without meaning to so the result of discounting
 * multiple times is compounding. To avoid this, we just simply won't reassign
 * the price property.
 */

var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    var discount = this.price * percent / 100;
    return this.price - discount;
  },
};
