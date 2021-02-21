
// Get the modal
var modal = document.getElementById("mymodal");

// Get the button that opens the modal
var btn = document.getElementById("viewBTN");
var i = 0;
var txt = 'My name is Dakota Seiber. I began studying Computer Science because I liked programming, and problem solving. This led me to achieve my Bachelors of Science studying Computer Science at University of Central Arkansas. Since graduating, I have worked at Conway Country Club, and began further improving my programming skillset. I post multiple times weekly on my github of the projects I am currently working on.';
var speed = 40;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//calling when menu button is clicked
function myFunction() 
{
    //HTML ID = myDropdown, toggling "show" on CSS class "menu-content"
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onload = function typeWriter() 
{
  if (i < txt.length) 
  {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }