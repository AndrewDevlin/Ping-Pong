var makeList = function(num) {
  var output = []
  for (var index = 1; index <= num; index += 1) {
    if (index % 15 === 0) {
      output.push('ping-pong')
    }
    else if (index % 3 === 0) {
      output.push('ping')
    }
    else if (index % 5 === 0) {
      output.push('pong')
    }
    else {
      output.push(index)
    }
  }
  return output
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var inputNum = $("#user-number").val();
    if (inputNum < 1) {
      alert('Please enter a number >= 0')
    }
    var output = makeList(inputNum)
    output = output.split(',');

    for (index = 0; index < output.length; index++) {
      $("#results").append("<li>" + output[index]);
    }
  });
});
