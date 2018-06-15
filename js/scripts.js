
//var size = 0;

function Pizza(pizzasize) {
  this.pizzasize = pizzasize ;
  this.pizzaingredients = [];
};

// Price Prototype Method
Pizza.prototype.price = function() {
  if (this.pizzasize === "Large") {
    return 21;
  //  return size * 3;
} else if (this.pizzasize === "Medium") {
    return 14;
  } else {
    return 7;
  }
  if (this.pizzaingredients.length === 0) {
  price *= 1;
} else {
  price += this.pizzaingredients.length;
}

return price;
};

function resetFields() {
  $("select#pizza-size").val();
  $("select#movie-name").val();



}

// Front-End User Logic
$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("select#pizza-size").val();
    var newPizza = new Pizza(inputtedPizzaSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzaingredients.push($(this).val());
    });

    $("ul#pizza-order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza Order" + "</button></span></li>");

    $(".pizzaOrder").last().click(function() {
      $("#pizza-order-detail").show();
      $(".pizza-size").text(newPizza.pizzasize);
      $(".pizza-ingredients").text(newPizza.pizzaingredients);
      $(".order-total").text(newPizza.price());
      alert(inputtedPizzaSize);

    });
    resetFields();
  });
});
