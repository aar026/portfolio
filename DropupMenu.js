/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {

  	document.getElementById("myDropdown").classList.toggle("show");
	if(document.getElementById("myDropdown").classList.contains("show") === true){
	document.getElementById("Menu").style.transform = 'rotate(90deg)';
	}
	else if(!document.getElementById("myDropdown").classList.contains("show")){
			document.getElementById("Menu").style.transform = 'rotate(0deg)';
	}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')){
	var img = document.getElementById('Menu');
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
		img.style.transform = 'rotate(0deg)';
        openDropdown.classList.remove('show');
		
      }
    }
  }
	
			 
	
};// JavaScript Document