var makeList = function(num) {
  var output = ''
  if (num < 1) {
    alert('Please enter a nuber >= 0')
  }
  else {
    for (var index = 1; index <= num; index += 1) {

      if (index % 3 === 0 && index % 5 !== 0) {
        output = output + "<span class=ping>" + "ping," + "</span>"
      }
      else if (index % 5 === 0 && index % 3 !== 0) {
        output = output + "<span class=pong>" + "pong," + "</span>"
      }
      else if (index % 15 === 0) {
        output = output + "<span class=ping-pong>" + "ping-pong," + "</span>"
      }
      else {
        output = output + index + ","
      }
    }
  }
  return output
};

//front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var inputNum = $("#user-number").val();
    var output = makeList(inputNum)
    output = output.split(',');

    for (index = 0; index < output.length; index++) {
      $("#results").append("<li>" + output[index]);
    }
  });
});
