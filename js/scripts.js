function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.price = function() {
  return ((this.toppings.length - 1) * 2.5) + this.pizzaSize * 3.5;
}
