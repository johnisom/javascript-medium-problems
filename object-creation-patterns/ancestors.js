// Exercise 1

Object.prototype.ancestors = function ancestors() {
  const parent = Object.getPrototypeOf(this);
  if (parent === Object.prototype) return ['Object.prototype'];
  if (this === Object.prototype) return [];
  return [parent.name, ...parent.ancestors()];
};
