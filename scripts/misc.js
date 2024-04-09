/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

//#region funds
function addFunds(){
    addFundsMulti(btnUpgLvl * 1);	
}

/**
 * Add funds with a multiplier
 * @param {*} number 
 */
function addFundsMulti(number){
	zoodollars = zoodollars + number;
	var zoodollars_asCurrency = zoodollars.toLocaleString('en-US'); // ('us-US', { style: 'currency', currency: 'USD' }));
	$("#zoodollars").html(zoodollars_asCurrency);
}

function upgradeFunds(){
	if(zoodollars >= btnUpgCost){
		btnUpgLvl = btnUpgLvl + 1;		
		zoodollars = zoodollars - btnUpgCost;
		btnUpgCost = Math.floor(10 * Math.pow(1.1,btnUpgLvl));
		document.getElementById("btnUpg").innerHTML = "Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
		document.getElementById("zoodollars").innerHTML = zoodollars;
	}
	else{
		openToast("Cannot upgrade - not enough funds!"); 
	}
}
//#endregion

function addDay(number){
    day += number;
    document.getElementById("day").innerHTML = day;
}

function darkModeSwitch(){
	// CSS VALUES...
	//--darkmodebody: #131d26;
	//--darkmodetext: #ffffff;
	// Get the root element
	// Get the styles (properties and values) for the root
	//alert("The value of --darkmodebody is: " + rs.getPropertyValue('--darkmodebody'));
  //document.getElementById("p2").style.color="blue";
	var r = document.querySelector(':root');
  	var rs = getComputedStyle(r);
	if (isDarkMode == false) { // but darkmode is already on???
		isDarkMode = !isDarkMode;
		r.style.setProperty('--darkmodebody', '#131d26');
		r.style.setProperty('--darkmodetext', '#ffffff');
		// TODO Get values and store in temp?
	} else {
		isDarkMode = !isDarkMode;
		r.style.setProperty('--darkmodebody', '#ffffff');
		r.style.setProperty('--darkmodetext', '#131d26');
	}
}