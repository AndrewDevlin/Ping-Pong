//back-end logic
var output = ''
//alert('p')
var makeList = function(num) {
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
  }    //alert('p')
};

//front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //alert(k)
    var inputNum = $("#user-number").val();
    makeList(inputNum)

    //var output = ''

    //for (var index = 1; index <= inputNum; index += 1)
      //if (index % 3 === 0 && index % 5 !== 0) {
        //output = output + "<span class=ping>" + "ping," + "</span>"
      //}
      //else if (index % 5 === 0 && index % 3 !== 0) {
        //output = output + "<span class=pong>" + "pong," + "</span>"
      //}
      //else if (index % 15 === 0) {
        //output = output + "<span class=ping-pong>" + "ping-pong," + "</span>"
      //}
      //else {
        //output = output + index + ","
      //}

    output = output.split(',');

    $('#results').empty();
    for (index = 0; index < output.length; index++) {
      $("#results").append("<li>" + output[index]);
    }
  });
});
