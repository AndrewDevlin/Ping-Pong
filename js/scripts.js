$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputNum = $("#user-number").val();
    var output = ''

    for (var index = 1; index <= inputNum; index += 1)
      if (index % 3 === 0 && index % 5 !== 0) {
        output = output + "ping,"
      }
      else if (index % 5 === 0 && index % 3 !== 0) {
        output = output + "pong,"
      }
      else if (index % 15 === 0) {
        output = output + "ping-pong,"
      }
      else {
        output = output + index + ","
      }

    output = output.split(',');
    
    for (index = 0; index < output.length; index++) {
      $("#results").append("<li>" + output[index]);
    }
  });
});
