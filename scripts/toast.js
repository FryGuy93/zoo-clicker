/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// toast with message - notification...
function openToast(MyInfo) {
	$('.toast').toast("show");

	if(MyInfo == undefined) MyInfo = "Hi";

	var d = new Date();
	var mydate = d.toLocaleString();

	document.getElementById("toast-time").innerHTML = mydate;
	document.getElementById("toast-body").innerHTML = MyInfo;
	document.getElementById("liveToast").style.backgroundColor = "white";
}
// Red toast with error message
function openToast_Error(MyInfo) {
	MyInfo = "ERROR: " + MyInfo;
	openToast(MyInfo);
	document.getElementById("liveToast").style.backgroundColor = "red"; // override

}

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

// TESTING
// When the user clicks on div, open the popup
function openPopup() {
	//https://getbootstrap.com/docs/5.3/components/toasts/#overview
	//toast library - https://www.youtube.com/watch?v=HhpbzPMCKDc

	//const toastElList = document.querySelectorAll('.toast')
	//const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, "show"))
	$('.toast').toast("show");

	//var popup = document.getElementById("myPopup");
	// Show
	//popup.classList.add("anim");

	// After 3.0s - hide
    setTimeout(function(){ 
		//popup.classList.remove("anim");
		//div.style.display = "none"; 
		$('.toast').toast("hide");
	}, 1800);
  }

