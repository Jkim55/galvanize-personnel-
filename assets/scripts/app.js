
  $.ajax({
    url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
    type: 'GET',
    error: function(err){console.error(err)}, // log in red
    success: (function(data) {
      for(obj of data) {
        var newOption = $("<option>");
        newOption.attr("value", obj["img"]);
        newOption.text(obj["title"])
        $("#role").append(newOption);
        }
    })
  })

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
    error: function(err){
      console.error(err);
      $(".save-status").text("Success")
    },
    success:$(".save-status").text("Success").fadeIn(500).delay(2000).fadeOut(500)
  })
})
