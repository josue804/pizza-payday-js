describe("Pizza", function() {
  it("Creates a pizza of the appropriate size and with the appropriate toppings", function() {
    var testPizza = new Pizza(["green peppers", "feta cheese", "mushrooms"], 4);
    expect(testPizza.toppings).to.eql(["green peppers", "feta cheese", "mushrooms"]);
    expect(testPizza.pizzaSize).to.equal(4);
  });

  it("calculates the cost of a pizza based off toppings and size", function() {
    var testPizza = new Pizza(["pepperoni", "italian sausage", "bacon", "mozzarella"], 4);
    expect(testPizza.price()).to.equal(21.50);
  });
});
