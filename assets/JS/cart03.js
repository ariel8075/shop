/*cart03確定訂單*/
// Get the modal
var modal = document.getElementById("endok");

// Get the button that opens the modal
var btn = document.getElementById("gohome");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("endclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   location.replace("index.html");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
     location.replace("index.html");
  }
}
