function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.price = function() {
  return ((this.toppings.length - 1) * 2.5) + this.pizzaSize * 3.5;
}

String.prototype.convertToppingsToArray = function() {
  return this.split(", ");
}

function resetFields() {
  $("input#toppings").val("");
  $("select#size").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
  $("div.new-pizza").not(':first').remove();
}



$(document).ready(function() {
  $("#add-pizza").click(function () {
    $("#all-pizzas").append('<div class="new-pizza">' +
                                '<div class="form-group">' +
                                  '<label for="toppings">Toppings</label>' +
                                  '<input type="text" class="form-control" id="toppings" placeholder="Separate, toppings, with, a, commma, and, space">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="size">Size</label>' +
                                  '<select id="size" class="form-control">' +
                                    '<option value="1">Small</option>' +
                                    '<option value="2">Medium</option>' +
                                    '<option value="3">Large</option>' +
                                    '<option value="4">Extra Large</option>' +
                                    '<option value="5">Kill Me</option>' +
                                  '</select>' +
                                '</div>' +
                              '</div>');
  });



  $("form#order-pizzas").submit(function(event) {
    event.preventDefault();
    total = 0;
    sizes = ["Small", "Medium", "Large", "Extra Large", "Kill Me"]

    $(".new-pizza").each(function() {
      var inputtedToppings = $(this).find('input#toppings').val();
      var inputtedSize = parseFloat($(this).find('select#size').val());

      $("ul#ordered-pizzas").append("<li>" + sizes[inputtedSize - 1] + " pizza with " + inputtedToppings);
      var newPizza = new Pizza(inputtedToppings.convertToppingsToArray(), inputtedSize);
      total = parseFloat(total);
      total += newPizza.price();
      total = total.toFixed(2);
      debugger;
    });

    $("#total").text(total);
    $("#show-total").show();
  //
  //
  //
  //
  //
  //   $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  //
  //
  //
  //   $(".contact").last().click(function() {
  //     $("#show-contact").toggle();
  //     $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
  //     $(".first-name").text(newContact.firstName);
  //     $(".last-name").text(newContact.lastName);
  //
  //     $("ul#addresses").text("");
  //     newContact.addresses.forEach(function(address) {
  //       $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
  //     });
  //   });

    resetFields();
  });
});
