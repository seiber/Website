
// Get the modal
var modal = document.getElementById("mymodal");
var modal1 = document.getElementById("mymodal1");
var modal2 = document.getElementById("mymodal2");
var modal3 = document.getElementById("mymodal3");
var modal4 = document.getElementById("mymodal4");
var modal5 = document.getElementById("mymodal5");
var modal6 = document.getElementById("mymodal6");
var modal7 = document.getElementById("mymodal7");



// Get the button that opens the modal
var btn = document.getElementById("viewBTN");
var btn1 = document.getElementById("viewBTN1");
var btn2 = document.getElementById("viewBTN2");
var btn3 = document.getElementById("viewBTN3");
var btn4 = document.getElementById("viewBTN4");
var btn5 = document.getElementById("viewBTN5");
var btn6 = document.getElementById("viewBTN6");
var btn7 = document.getElementById("viewBTN7");


var i = 0;
var txt = 'My name is Dakota Seiber. I began studying Computer Science because I liked programming, and problem solving. This led me to achieve my Bachelors of Science studying Computer Science at University of Central Arkansas. Since graduating, I have worked at Conway Country Club, and began further improving my programming skillset. I post multiple times weekly on my github of the projects I am currently working on.';
var speed = 40;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];

// When the user clicks the button, open the modal 
btn.onclick = function()
{
  modal.style.display = "block";
}
btn1.onclick = function() 
{
  modal1.style.display = "block";
}
btn2.onclick = function() 
{
  modal2.style.display = "block";
}

btn3.onclick = function() 
{
  modal3.style.display = "block";
}

btn4.onclick = function() 
{
  modal4.style.display = "block";
}

btn5.onclick = function() 
{
  modal5.style.display = "block";
}

btn6.onclick = function() 
{
  modal6.style.display = "block";
}

btn7.onclick = function() 
{
  modal7.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
  modal.style.display = "none";
}

span1.onclick = function()
 {
  modal1.style.display = "none";
}
span2.onclick = function()
 {
  modal2.style.display = "none";
}
span3.onclick = function()
 {
  modal3.style.display = "none";
}
span4.onclick = function()
 {
  modal4.style.display = "none";
}
span5.onclick = function()
 {
  modal5.style.display = "none";
}
span6.onclick = function()
 {
  modal6.style.display = "none";
}
span7.onclick = function()
 {
  modal7.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal3.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal5.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal6.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal7.style.display = "none";
  }
}



//calling when menu button is clicked
function myFunction() 
{
    //HTML ID = myDropdown, toggling "show" on CSS class "menu-content"
    document.getElementById("myDropdown").classList.toggle("show");
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