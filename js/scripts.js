$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //back-end lagic
    var num = $("#user-number").val();
    var list = []

    for(var index = 1; index <= num; index += 1)
    list = list + index

    

    //front-end logic

    $("#results p").text(list);
  });
});
