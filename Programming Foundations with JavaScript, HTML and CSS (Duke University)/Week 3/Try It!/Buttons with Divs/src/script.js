function buttonOne() {
  alert("Button 1 clicked.");
}

function getChoice() {
  var choice = confirm("OK or Cancel?");
  
  if (choice) {
    var message = "You pressed OK!";
    alert(message);
  } else {
    var message = "Are you sure you want to cancel?";
    confirm(message);
  }
}