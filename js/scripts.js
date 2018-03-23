var add = function(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15) {

  return number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10 + number11 + number12 + number13 + number14 + number15;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var number4 = parseInt($("#add4").val());
    var number5 = parseInt($("#add5").val());
    var number6 = parseInt($("#add6").val());
    var number7 = parseInt($("#add7").val());
    var number8 = parseInt($("#add8").val());
    var number9 = parseInt($("#add9").val());
    var number10 = parseInt($("#add10").val());
    var number11 = parseInt($("#add11").val());
    var number12 = parseInt($("#add12").val());
    var number13 = parseInt($("#add13").val());
    var number14 = parseInt($("#add14").val());
    var number15 = parseInt($("#add15").val());
    var result = add(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15);
    $("#output").text(result);
  });
});
