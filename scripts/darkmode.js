/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

/**
 * Default = switch mode
 * Dark Mode on or off
 * Save to settings
 * @param {*} darkMode 
 */
function darkMode_Set(darkMode){
	//console.log("darkMode_Set - " + darkMode);

	// when called without var set - switch mode - variable is undefined or null
	if (typeof darkMode === 'undefined' || darkMode === null) {
		isDarkMode = !isDarkMode;
	}	
	else isDarkMode = darkMode;

	if (isDarkMode === true) setPageDark();
	if (isDarkMode === false) setPageLight();
	
	if (hasSettingsLoaded) {
		settingsSave();
	}
}

function setPageDark(){
	// CSS VALUES...
	//--darkmodebody: #131d26;
	//--darkmodetext: #ffffff;
	// Get the root element
	// Get the styles (properties and values) for the root
	//alert("The value of --darkmodebody is: " + rs.getPropertyValue('--darkmodebody'));
  //document.getElementById("p2").style.color="blue";
  
  	var r = document.querySelector(':root');
  	var rs = getComputedStyle(r);
	r.style.setProperty('--darkmodebody', '#131d26');
	r.style.setProperty('--darkmodetext', '#ffffff');
}

function setPageLight(){
  	var r = document.querySelector(':root');
  	var rs = getComputedStyle(r);
	r.style.setProperty('--darkmodebody', '#ffffff');
	r.style.setProperty('--darkmodetext', '#131d26');
}
