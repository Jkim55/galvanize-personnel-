// $(document).ready(function(){  // not req since js scripts are at the end
  $.ajax({
    url: "https://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
    type: 'GET',
    error:(error)=>{
      console.error(error["statusText"])}, // log error
    success: ((data)=>{
      for(let obj of data) {
        let newOption = $("<option>");
        newOption.attr("value", obj["img"]);
        newOption.text(obj["title"])
        $("#role").append(newOption);
      }
    })
  })
// })


$("#role").change(()=>{
  $("#image").attr("src", $("#role").val())
})

$("#button").click((event)=>{
  event.preventDefault()
  let userData={
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    role: $("#role option:selected").text()
  }
  $.ajax({
    type: 'POST',
    url:'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
    data: userData,
    error: (error)=>{
      let messageObj = JSON.parse(error['responseText'])
      console.error(messageObj['message']);
      $(".save-status").text(error['responseText']['message']).fadeIn(500).delay(2000).fadeOut(500)
    },
    success:(data)=>{
      console.log(data['message'])
      $(".save-status").text(data['message']).fadeIn(500).delay(2000).fadeOut(500)
    }
  })
})
