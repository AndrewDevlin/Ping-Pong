var makeList = function(num) {
  var numberList = []
  for (var index = 1; index <= num; index += 1) {
    if (index % 15 === 0) {
      numberList.push('ping-pong')
    }
    else if (index % 3 === 0) {
      numberList.push('ping')
    }
    else if (index % 5 === 0) {
      numberList.push('pong')
    }
    else {
      numberList.push(index)
    }
  }
  return numberList
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var inputNum = $("#user-number").val();
    if (inputNum < 1) {
      alert('Please enter a number > 0')
    }
    var output = makeList(inputNum)
    output.forEach(function(number) {
      $("#results").append("<li>" + number + "</li>");
    })
  });
});
