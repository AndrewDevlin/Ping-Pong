$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //back-end lagic
    var inputNum = $("#user-number").val();
    var numbers = []
    var output = []

  for (var index = 1; index <= inputNum; index += 1)
    numbers = numbers + index

  for (var index = 1; index <= numbers.length; index += 1)
    if (index % 3 === 0 && index % 5 !== 0) {
       output = output + "ping"
      }
      else if (index % 5 === 0 && index % 3 !== 0) {
        output = output + "pong"
      }
      else if (index % 15 === 0) {
        output = output + "ping-pong"
      }
      else {
        output = output + index
      }


    //front-end logic

    $("#results p").text(output);
  });
});
