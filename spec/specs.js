describe("Pizza", function() {
  it("Creates a pizza of the appropriate size and with the appropriate toppings", function() {
    var testPizza = new Pizza(["green peppers", "feta cheese", "mushrooms"], "Extra Large");
    expect(testPizza.toppings).to.eql(["green peppers", "feta cheese", "mushrooms"]);
    expect(testPizza.pizzaSize).to.equal("Extra Large");
  });
});
