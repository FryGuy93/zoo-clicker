/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/
/* Loading sequence - Files loaded from...
	loading.js = insert HTML into page
	vars.js = variables
	main.js = main game looping logic
	misc.js = assortment
*/

//#region
//#endregion

"use strict";

// Starting script
window.addEventListener("load", startScript); // NOT LOADING BEFORE loading.js...
function startScript() {
	document.getElementById("unlockInsectsCost").innerHTML = unlockInsectsCost; // CANNOT FIND ELEMENT...
	document.getElementById("unlockArachnidsCost").innerHTML = unlockArachnidsCost;
}
// Game loop - Update stats - 1 second = 1 day
// Delta time? window.requestAnimationFrame?
window.setInterval(mainGameLoop , gameLoopTime);

// Main function
function mainGameLoop() {
	// TODO remove - totalAntsIncome - not used
	addDay(1);
	mainCalculations();
	mainUIUpdate();
}
function mainCalculations() {
	// People = animal * animal attraction (per animal)
	visitorsPerDay = 0;
	visitorsPerDay += ants * antsAttraction; 
	visitorsPerDay += aphids * aphidsAttraction; 
	visitorsPerDay += fleas * fleasAttraction; 
	//...
	
	// Ticket price = exhibits * 10
	// 		Insects = 10*1
	//		Arachnids = 30*2
	ticketPrice = unlockedAreasCount * zooEntryPrice_initial;

	// Money = tickets * people
	zooDollarsPerDay = ticketPrice * visitorsPerDay;
	addFundsMulti(zooDollarsPerDay);
}

function mainUIUpdate() {
	// TODO change to per day - rename ips
	document.getElementById('ips').innerHTML = zooDollarsPerDay;
	
	document.getElementById("visitorsAttracted").innerHTML = visitorsPerDay;
	document.getElementById("zooEntryPrice").innerHTML = ticketPrice;
	
	// Animals
	document.getElementById("antsIncomePerDay").innerHTML = ants * antsAttraction * ticketPrice;
	document.getElementById("aphidsIncomePerDay").innerHTML = aphids * aphidsAttraction * ticketPrice;
	document.getElementById("fleasIncomePerDay").innerHTML = fleas * fleasAttraction * ticketPrice;
	//var antsAttractionPerDay = ants * antsAttraction;
	document.getElementById("antsAttraction").innerHTML = `${antsAttraction} (${antsAttraction*ants})`; //antsAttraction + " (" + antsAttractionPerDay + ")"
	document.getElementById("aphidsAttraction").innerHTML = `${aphidsAttraction} (${aphidsAttraction*aphids})`;
	document.getElementById("fleasAttraction").innerHTML = `${fleasAttraction} (${fleasAttraction*fleas})`;
}

