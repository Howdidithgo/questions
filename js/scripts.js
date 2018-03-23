var add = function(number1, number2, number3, number4, number5) {

  return number1 + number2 + number3 + number4 + number5;

};


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var number4 = parseInt($("#add4").val());
    var number5 = parseInt($("#add5").val());
    var result = add(number1, number2, number3, number4, number5);
    $(".output").text(result);
      });

      $("#score1").click(function() {
   $(".java").show();
    });

       $("#score2").click(function() {
    $(".java").show();
  });
      $("#score3").click(function() {
    $(".ruby").show();
 });

  });
