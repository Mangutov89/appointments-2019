//user interface (front-end)

$(document).ready(function() {
  $("form#appointment").submit(function(event){
    event.preventDefault();
    var name = ($("#name").val());
    var description = ($("#description").val());
    var date = ($("#date").val());
    var time = ($("#time").val());
    var result = ("Your booking is successful!");
    $("#output").text(result);
  });
});
