/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/
"use strict";

var isDebugMode = false; 
//var isDebugMode = true; // comment this out to disable debug mode and run in production mode
var isDebugModeLocalHostOnly = true; //http://localhost:3000/debug.html
var zoodollars = 0;
var ips = 0;
var day = 0;
var onehundred = 1000000000;
var btnUpgLvl = 1;
var btnUpgCost = 10;
var gameLoopTime = 1000; // 1000 = 1 second
var unlockInsectsCost = 25;
var unlockArachnidsCost = 500;
var isInsectsUnlocked = false;
var isArachnidsUnlocked = false;
var unlockedAreasCount = 0; // Each area worth same?
var visitorsPerDay = 0;
var zooEntryPrice_initial = 10;
var zooDollarsPerDay = 0
var ticketPrice = 0;

// Animal variables
var antsAttraction = 1;
var aphidsAttraction = 2;
var fleasAttraction = 3;
var fleaStartingCost = 50;
var insectMultiplier = 1.1;

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
	addFunds(zooDollarsPerDay);
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

//#region Debugging
window.addEventListener("load", debugScript);

// debug mode - show warning but display page differently - makes it easier to see and test changes
function debugScript() {
	// Load only debug website when in debug mode
	// Enable debug mode when on local
	if (window.location.href.includes("127.0.0") || 
		window.location.href.includes("localhost")) {
		if(isDebugModeLocalHostOnly) {
			isDebugMode = true; 
		}
	}

	if (isDebugMode && window.location.href.includes("index.html")) {
		window.location.href = "./debug.html";
	}
	// Load only index when in production and on debug.html page
	else if (!isDebugMode && window.location.href.includes("debug.html")) {
		window.location.href = "./index.html";
	}

	// Add "DEBUGGING" to top of page
	if (isDebugMode) {
		document.body.innerHTML = `
	<div style="z-index: 99; background: red; position: fixed; top: 0; left: 0; text-align: center; width: 100%; font-size: 6px;">
		DEBUGGING - 
		<a href="/">Home</a>
		<a href="index.html">Index</a>
		<a href="debug.html">Debug</a>
		<a href="todo.html">TODO</a>
	</div>
		`
		+ document.body.innerHTML;


		btnUpgLvl = 100; // quicker debugging
	}
}



// Button - Load pre configured setup - points, animals
function loadPreset1(){
	console.log("Load preset 1 pressed");
	zoodollars = 10000;
	document.getElementById("zoodollars").innerHTML = zoodollars;
}

//#region reset buttons
function resetSave(){
	openToast("Save data wiped");
	console.log("Reset save pressed");
	localStorage['saveGame'] = btoa(JSON.stringify());
	//document.body.innerHTML = `<div>RESET SAVE</div>` + document.body.innerHTML;
}

function resetClickUpgrade(){
	console.log("Reset click upgrade");
	btnUpgLvl = 1;
	btnUpgCost = 10; // reset to default
	document.getElementById("btnUpg").innerHTML = "Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
}

function resetZooDollars(){
	console.log("Reset zoo dollars");
	zoodollars = 0;
	document.getElementById("zoodollars").innerHTML = zoodollars;
}

function resetIncome(){
	console.log("Reset income");
	//ips = 0;
	//document.getElementById('ips').innerHTML = ips;
	resetAnts();
	//... other animals
}

// Remove from income, reset animal
function resetAnts(){
	console.log("Reset ants");
	ips -= totalAntsIncome;
	document.getElementById('ips').innerHTML = ips;

	ants = 0;
	totalAntsIncome = 0;
	document.getElementById('ants').innerHTML = 0;
	//document.getElementById('zoodollars').innerHTML = zoodollars;  
	document.getElementById('totalAntsIncome').innerHTML = 0;
	document.getElementById('antCost').innerHTML = 10;  
}
// Other animals...
function resetAphids(){
	console.log("Reset aphids");
	ips -= totalAphidsIncome;
	document.getElementById('ips').innerHTML = ips;

	aphids = 0;
	totalAphidsIncome = 0;
	document.getElementById('aphids').innerHTML = 0;
	//document.getElementById('zoodollars').innerHTML = zoodollars;  
	document.getElementById('totalAphidsIncome').innerHTML = 0;
	document.getElementById('aphiCost').innerHTML = 25;  
}

function resetFleas(){
	console.log("Reset fleas");
	ips -= totalFleasIncome;
	document.getElementById('ips').innerHTML = ips;

	fleas = 0;
	totalFleasIncome = 0;
	document.getElementById('fleas').innerHTML = 0;
	//document.getElementById('zoodollars').innerHTML = zoodollars;  
	document.getElementById('totalFleasIncome').innerHTML = 0;
	document.getElementById('fleaCost').innerHTML = fleaStartingCost;  
}

//#endregion
//#endregion

function addFunds(number){
    zoodollars = zoodollars + number;
    document.getElementById("zoodollars").innerHTML = zoodollars;
}

function addDay(number){
    day += number;
    document.getElementById("day").innerHTML = day;
}


// Unlock Zones
function checkUnlocks() {
	unlockedAreasCount = 0;
	if(isInsectsUnlocked) unlockInsects();
	if(isArachnidsUnlocked) unlockArachnids();
}

function unlockInsects() {
	if(isInsectsUnlocked) {
		unlockedAreasCount++;
		//zooEntryPrice_initial += 10;
		document.getElementById("unlockInsectsBtn").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("disabled");
		return;
	}

    if(!isInsectsUnlocked && zoodollars >= unlockInsectsCost){   
		zoodollars -= unlockInsectsCost;
		document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		isInsectsUnlocked = true;
		unlockedAreasCount++;
		//zooEntryPrice_initial += 10;
		// TODO
		//document.getElementById("unlockInsectsBtn").disabled = true;
		document.getElementById("unlockInsectsBtn").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("disabled");

		selectInsects();

		//document.getElementById("ant").disabled = false; 
		openToast("Insects unlocked!"); 
    }
	else {
		openToast("Cannot unlock Insects - not enough funds!"); 
	}
}

function unlockArachnids(){
	if(isArachnidsUnlocked) {
		unlockedAreasCount++;
		//zooEntryPrice_initial += 20;
		document.getElementById("unlockArachnidsBtn").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("disabled");
		return;
	}

    if(!isArachnidsUnlocked && zoodollars >= unlockArachnidsCost){   
		zoodollars -= unlockArachnidsCost;
		document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		isArachnidsUnlocked = true;
		unlockedAreasCount++;
		//zooEntryPrice_initial += 20;

		// TODO
		//document.getElementById("unlockInsectsBtn").disabled = true;
		document.getElementById("unlockArachnidsBtn").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("disabled");

		selectArachnids();

		//document.getElementById("ant").disabled = false; 
		openToast("Arachnids unlocked!"); 
    }
	else {
		openToast("Cannot unlock Arachnids - not enough funds!"); 
	}
}


function selectInsects(){
    if(isInsectsUnlocked){ 
		// Show only Insects Panel
		//document.getElementById('exhInsectsTitle').disabled = false;
		document.getElementById("exhInsects").hidden = false;
		document.getElementById("exhInsectsTitle").classList.add("active");

		document.getElementById("exhArachnids").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("active");
	}
}

function selectArachnids(){
	if(isArachnidsUnlocked){ 
		//document.getElementById('exhArachnidsTitle').disabled = false;
		document.getElementById("exhInsects").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("active");

		document.getElementById("exhArachnids").hidden = false;
		document.getElementById("exhArachnidsTitle").classList.add("active");
	}
}

function addFunds2(){
    addFunds(btnUpgLvl * 1);	
    document.getElementById("zoodollars").innerHTML = zoodollars;
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

// Achievement
function checkDollars(){
	if(zoodollars == onehundred){
		alert("You're A Billionaire Bruh.");
	}
}



// toast with message
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

