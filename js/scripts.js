
function Ticket(name, size, topping) {
  this.name = name;
  this.movie = size;
  this.type = topping;
}
Ticket.prototype.price = function () {
  if (this.movie == 

  alert( "The cost of your pizza is:$" + parseInt(this.movie + this.type + this.time) + ".00");
}


function resetFields() {
  $("input#name").val();
  $("select#movie-name").val();
  $("select#ticket-type").val();
  $("select#ticket-time").val();
  $("input#ticket-date").val();
}

$(function () {
var total = 0;
$("form#ticket-form").submit(function(event) {
  event.preventDefault();

  var nameinput = $("input#name").val();
  var movieinput = $("select#movie-name").val();
  var typeinput = $("select#ticket-type").val();
  var timeinput = $("select#ticket-time").val();
  var dateinput = $("input#ticket-date").val();

  var newTicket = new Ticket(nameinput, movieinput, typeinput, timeinput, dateinput)

$("ul#purchased").append("<li><span class='ticket'>" + newTicket.name + "</span></li>")

$(".ticket").last().click(function() {
  $("#show-ticket").show();
  $("show-ticket h2").text(newTicket.name);
//  $(".mname").text(newTicket.name);
  $(".mchoice").text(newTicket.movie);
  $(".mtype").text(newTicket.price());
  $(".mtime").text(newTicket.time);
  $(".mdate").text(newTicket.date);
});
resetFields();

});
});
