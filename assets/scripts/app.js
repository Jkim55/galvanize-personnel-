
// $(document).ready(function(){  // not req since js scripts are at the end
  $.ajax({
    url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
    type: 'GET',
    error: function(error){
      console.error(error["statusText"])}, // log error
    success: (function(data) {
      for(var obj of data) {
        var newOption = $("<option>");
        newOption.attr("value", obj["img"]);
        newOption.text(obj["title"])
        $("#role").append(newOption);
        }
    })
  })
// })


$("#role").change(function() {
  $("#image").attr("src", $("#role").val())
})

$("#button").click(function(event){
  event.preventDefault()
  var userData={
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    role: $("#role option:selected").text()
  }
  $.ajax({
    type: 'POST',
    url:'http://galvanize-student-apis.herokuapp.com/gpersonnel/users',
    data: userData,
    error: function(error){
      console.error(error["status"]);
      $(".save-status").hide().text("Not quite").fadeIn(500).delay(2000).fadeOut(500)
    },
    success:$(".save-status").hide().text("Success!").fadeIn(500).delay(2000).fadeOut(500)
  })
})
