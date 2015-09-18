describe("Pizza", function() {
  it("Creates a pizza of the appropriate size and with the appropriate toppings", function() {
    var testPizza = new Pizza("XXL", ["green peppers", "feta cheese", "mushrooms"]);
    expect(testPizza.pizzaSize).to.equal("XXL");
    expect(testPizza.toppings).to.eql(["green peppers", "feta cheese", "mushrooms"]);
  });
});
