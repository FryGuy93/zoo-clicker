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
var unlockInsectsCost = 1;
var unlockArachnidsCost = 2;
var isInsectsUnlocked = false;
var isArachnidsUnlocked = false;
var unlockedAreasCount = 0; // Each area worth same?
var visitorsPerDay = 0;
var zooEntryPrice_initial = 10;
var antsAttraction = 1;
var aphidsAttraction = 3;
var fleasAttraction = 10;
var butterflysAttraction = 10;
var zooDollarsPerDay = 0
var ticketPrice = 0;

// Starting script
window.addEventListener("load", startScript);
function startScript() {
	document.getElementById("unlockInsectsCost").innerHTML = unlockInsectsCost;
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
	/*
	addFunds(ants * 1);
	addFunds(butterflys * 2);
	addFunds(caterpillars * 3);
	addFunds(dolphins * 4);
	addFunds(emus * 5);
	addFunds(falcons * 10);
	addFunds(giraffes * 25);
	*/
}
function mainCalculations() {
	// People = animal * animal attraction (per animal)
	visitorsPerDay = 0;
	visitorsPerDay += ants * antsAttraction; 
	visitorsPerDay += aphids * aphidsAttraction; 
	visitorsPerDay += fleas * fleasAttraction; 
	visitorsPerDay += butterflys * butterflysAttraction; 
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
	document.getElementById("fleasIncomePerDay").innerHTML = fleas * fleassAttraction * ticketPrice;
	document.getElementById("butterflysIncomePerDay").innerHTML = butterflys * butterflysAttraction * ticketPrice;
	//var antsAttractionPerDay = ants * antsAttraction;
	document.getElementById("antsAttraction").innerHTML = `${antsAttraction} (${antsAttraction*ants})`; //antsAttraction + " (" + antsAttractionPerDay + ")"
	document.getElementById("aphidsAttraction").innerHTML = `${aphidsAttraction} (${aphidsAttraction*aphids})`;
	document.getElementById("fleasAttraction").innerHTML = `${fleasAttraction} (${fleasAttraction*fleas})`;
	document.getElementById("butterflysAttraction").innerHTML = butterflysAttraction;
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
	document.getElementById("btnUpg").innerHTML = "Upgrade - Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
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
	document.getElementById('antCost').innerHTML = 8;  
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
	document.getElementById('aphiCost').innerHTML = 15;  
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
	document.getElementById('fleaCost').innerHTML = 30;  
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
// NOT WORKING
function buyAnimal(animalName, multiplier, animalCount, animalEle, animalIncomeEle, animalIncome, animalCostEle){
	var animalCost = Math.floor(multiplier * Math.pow(1.1, animalCount));     			//works out the cost of this cursor
    if(zoodollars >= animalCost){                            	       //checks that the player can afford the cursor
        animalCount = animalCount + 1;                                  			 //increases number of ants
    	zoodollars = zoodollars - animalCost;                          //removes the zoodollars spent
        document.getElementById(animalEle).innerHTML = animalCount;  //updates the number of ants for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		animalIncome = animalCount * 1;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById(animalIncomeEle).innerHTML = animalIncome;   // Updates the total income for user.
		
		ips = ips + 1;
		document.getElementById('ips').innerHTML = ips;
    }
	else {
		openToast("Cannot buy " + animalName + " - not enough funds!"); 
	}
    var nextCost = Math.floor(8 * Math.pow(1.1,ants));       //works out the cost of the next cursor
    document.getElementById(animalCostEle).innerHTML = nextCost;  //updates the cursor cost for the user
	
}

//Ants
var ants = 0;
function buyAnt(){ 
	// TODO simplify
    var antCost = Math.floor(8 * Math.pow(1.1,ants));     			//works out the cost of this cursor
    if(zoodollars >= antCost){                            	       //checks that the player can afford the cursor
        ants = ants + 1;                                  			 //increases number of ants
    	zoodollars = zoodollars - antCost;                          //removes the zoodollars spent
        document.getElementById('ants').innerHTML = ants;  //updates the number of ants for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		//totalAntsIncome = ants * 1;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		//document.getElementById('totalAntsIncome').innerHTML = totalAntsIncome;   // Updates the total income for user.
		
		ips = ips + 1;
		document.getElementById('ips').innerHTML = ips;
    }
	else {
		openToast("Cannot buy " + "Ant" + " - not enough funds!"); 
	}
    var nextCost = Math.floor(8 * Math.pow(1.1,ants));       //works out the cost of the next cursor
    document.getElementById('antCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

var ant = {a:1};
function buyAnt2(){ 
	ant.multiplier = 8;
	ant.count = ants;
	
	ant.totalAntsIncome = totalAntsIncome;
	buyAnimal("Ant", 8, ant.count, "ants", "totalAntsIncome", ant.totalAntsIncome, "antCost");
	// Pass reference back
	//ants = ant.count;
	//totalAntsIncome = ant.totalAntsIncome;
	openToast("WORKING! " + ants + ", " + totalAntsIncome + ", " + ant.count + ", " + ant.totalAntsIncome.innerHTML); 
}

//Aphids
var aphids = 0;
function buyAphid(){ 
	// TODO simplify
    var aphidCost = Math.floor(15 * Math.pow(1.1,aphids));     			//works out the cost of this cursor
    if(zoodollars >= aphidCost){                            	       //checks that the player can afford the cursor
        aphids = aphids + 1;                                  			 //increases number of aphids
    	zoodollars = zoodollars - aphidCost;                          //removes the zoodollars spent
        document.getElementById('aphids').innerHTML = aphids;  //updates the number of aphids for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
				
		ips = ips + 1;
		document.getElementById('ips').innerHTML = ips;
    }
	else {
		openToast("Cannot buy " + "Aphid" + " - not enough funds!"); 
	}
    var nextCost = Math.floor(15 * Math.pow(1.1,aphids));       //works out the cost of the next cursor
    document.getElementById('aphidCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

var aphid = {a:1};
function buyAphid2(){ 
	aphid.multiplier = 15;
	aphid.count = aphids;
	
	aphid.totalAphidsIncome = totalAphidsIncome;
	buyAnimal("Aphid", 15, aphid.count, "aphids", "totalAphidsIncome", aphid.totalAphidsIncome, "aphidCost");
	openToast("WORKING! " + aphids + ", " + totalAphidsIncome + ", " + aphid.count + ", " + aphid.totalAphidsIncome.innerHTML); 
}

//Fleas
var fleas = 0;
function buyFlea(){ 
	// TODO simplify
    var fleaCost = Math.floor(30 * Math.pow(1.1,fleas));     			//works out the cost of this cursor
    if(zoodollars >= fleaCost){                            	       //checks that the player can afford the cursor
        fleas = fleas + 1;                                  			 //increases number of fleas
    	zoodollars = zoodollars - fleaCost;                          //removes the zoodollars spent
        document.getElementById('fleas').innerHTML = fleas;  //updates the number of fleas for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
				
		ips = ips + 1;
		document.getElementById('ips').innerHTML = ips;
    }
	else {
		openToast("Cannot buy " + "Flea" + " - not enough funds!"); 
	}
    var nextCost = Math.floor(30 * Math.pow(1.1,fleas));       //works out the cost of the next cursor
    document.getElementById('fleaCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

var flea = {a:1};
function buyFlea2(){ 
	flea.multiplier = 15;
	flea.count = fleas;
	
	flea.totalFleasIncome = totalFleasIncome;
	buyAnimal("Flea", 30, flea.count, "fleas", "totalFleasIncome", flea.totalFleasIncome, "fleaCost");
	openToast("WORKING! " + fleas + ", " + totalFleasIncome + ", " + flea.count + ", " + flea.totalFleasIncome.innerHTML); 
}

//Butterflys
var butterflys = 0;
function buyButterfly(){

    var butterflyCost = Math.floor(16 * Math.pow(1.1,butterflys));     //works out the cost of this cursor
    if(zoodollars >= butterflyCost){                                   //checks that the player can afford the cursor
        butterflys = butterflys + 1;                                   //increases number of butterflys
    	zoodollars = zoodollars - butterflyCost;                          //removes the zoodollars spent
        document.getElementById('butterflys').innerHTML = butterflys;  //updates the number of butterflys for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		//totalButterflysIncome = butterflys * 2;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		//document.getElementById('totalButterflysIncome').innerHTML = totalButterflysIncome;   // Updates the total income for user.
		
		ips = ips + 2;
		document.getElementById('ips').innerHTML = ips;

    }
    var nextCost = Math.floor(16 * Math.pow(1.1,butterflys));       //works out the cost of the next cursor
    document.getElementById('butterflyCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

//Caterpillars
var caterpillars = 0;
function buyCaterpillar(){
    var caterpillarCost = Math.floor(32 * Math.pow(1.1,caterpillars));     //works out the cost of this cursor
    if(zoodollars >= caterpillarCost){                                   //checks that the player can afford the cursor
        caterpillars = caterpillars + 1;                                   //increases number of caterpillars
    	zoodollars = zoodollars - caterpillarCost;                          //removes the zoodollars spent
        document.getElementById('caterpillars').innerHTML = caterpillars;  //updates the number of caterpillars for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalCaterpillarsIncome = caterpillars * 3;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalCaterpillarsIncome').innerHTML = totalCaterpillarsIncome;   // Updates the total income for user.
		
		ips = ips + 3;
		document.getElementById('ips').innerHTML = ips;
	}
    var nextCost = Math.floor(32 * Math.pow(1.1,caterpillars));       //works out the cost of the next cursor
    document.getElementById('caterpillarCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

//Dolphins
var dolphins = 0;
function buyDolphin(){
    var dolphinCost = Math.floor(64 * Math.pow(1.1,dolphins));     //works out the cost of this cursor
    if(zoodollars >= dolphinCost){                                   //checks that the player can afford the cursor
        dolphins = dolphins + 1;                                   //increases number of dolphins
    	zoodollars = zoodollars - dolphinCost;                          //removes the zoodollars spent
        document.getElementById('dolphins').innerHTML = dolphins;  //updates the number of dolphins for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalDolphinsIncome = dolphins * 4;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalDolphinsIncome').innerHTML = totalDolphinsIncome;   // Updates the total income for user.
		
		ips = ips + 4;
		document.getElementById('ips').innerHTML = ips;
	}
    var nextCost = Math.floor(64 * Math.pow(1.1,dolphins));       //works out the cost of the next cursor
    document.getElementById('dolphinCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//Dolphins End

//Emus
var emus = 0;
function buyEmu(){
    var emuCost = Math.floor(128 * Math.pow(1.1,emus));     //works out the cost of this cursor
    if(zoodollars >= emuCost){                                   //checks that the player can afford the cursor
        emus = emus + 1;                                   //increases number of emus
    	zoodollars = zoodollars - emuCost;                          //removes the zoodollars spent
        document.getElementById('emus').innerHTML = emus;  //updates the number of emus for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalEmusIncome = emus * 5;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalEmusIncome').innerHTML = totalEmusIncome;   // Updates the total income for user.
		
		ips = ips + 5;
		document.getElementById('ips').innerHTML = ips;
    }
    var nextCost = Math.floor(128 * Math.pow(1.1,emus));       //works out the cost of the next cursor
    document.getElementById('emuCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//Emus End

//Falcons
var falcons = 0;
function buyFalcon(){
    var falconCost = Math.floor(256 * Math.pow(1.1,falcons));     //works out the cost of this cursor
    if(zoodollars >= falconCost){                                   //checks that the player can afford the cursor
        falcons = falcons + 1;                                   //increases number of falcons
    	zoodollars = zoodollars - falconCost;                          //removes the zoodollars spent
        document.getElementById('falcons').innerHTML = falcons;  //updates the number of falcons for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalFalconsIncome = falcons * 10;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalFalconsIncome').innerHTML = totalFalconsIncome;   // Updates the total income for user.
    
		ips = ips + 10;
		document.getElementById('ips').innerHTML = ips;
	}
    var nextCost = Math.floor(256 * Math.pow(1.1,falcons));       //works out the cost of the next cursor
    document.getElementById('falconCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//Falcons End

//Giraffes
var giraffes = 0;
function buyGiraffe(){
    var giraffeCost = Math.floor(512 * Math.pow(1.1,giraffes));     //works out the cost of this cursor
    if(zoodollars >= giraffeCost){                                   //checks that the player can afford the cursor
        giraffes = giraffes + 1;                                   //increases number of giraffes
    	zoodollars = zoodollars - giraffeCost;                          //removes the zoodollars spent
        document.getElementById('giraffes').innerHTML = giraffes;  //updates the number of giraffes for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalGiraffesIncome = giraffes * 25;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalGiraffesIncome').innerHTML = totalGiraffesIncome;   // Updates the total income for user.
    
		ips = ips + 25;
		document.getElementById('ips').innerHTML = ips;
	}
    var nextCost = Math.floor(512 * Math.pow(1.1,giraffes));       //works out the cost of the next cursor
    document.getElementById('giraffeCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//Giraffes End

function saveGame(){
	//openToast("Saving data...");
	var allItems = [
		zoodollars,
		ants,
		aphids,
		fleas,
		butterflys,
		ips,
		btnUpgLvl,
		day,
		isInsectsUnlocked,
		isArachnidsUnlocked
	];
	
	localStorage['saveGame'] = btoa(JSON.stringify(allItems));
	openToast("Data saved! :)");
}

function loadGame(){
	//openToast("Loading game");

	try {
		var allItems = JSON.parse(atob(localStorage['saveGame']));
		zoodollars = allItems[0];
		ants = allItems[1];
		aphids = allItems[2];
		fleas = allItems[3];
		butterflys = allItems[4];
		ips = allItems[5];
		btnUpgLvl = allItems[6];
		day = allItems[7];
		isInsectsUnlocked = allItems[8];
		isArachnidsUnlocked = allItems[9];		
	}
	catch(err) {
		openToast_Error("No saved game to load");
		//document.body.innerHTML = err.message + "<br>" + document.body.innerHTML;
		return;
	}
	

	try {
		//openToast("Loading game");
		// TODO seperate out...

		document.getElementById("zoodollars").innerHTML = zoodollars;
		document.getElementById("ips").innerHTML = ips;
		btnUpgCost = Math.floor(10 * Math.pow(1.1,btnUpgLvl));
		document.getElementById("btnUpg").innerHTML = "Upgrade - Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
		addDay(day);
		checkUnlocks();

		// Animals
		document.getElementById("ants").innerHTML = ants;
		document.getElementById("aphids").innerHTML = aphids;
		document.getElementById("fleas").innerHTML = fleas;
		document.getElementById("butterflys").innerHTML = butterflys;

		
		// Calc ants cost
		var nextAntsCost = Math.floor(8 * Math.pow(1.1,ants));
		document.getElementById('antCost').innerHTML = nextAntsCost;
		// Set ants total income
		var totalAntsIncome = ants * 1;
		document.getElementById('totalAntsIncome').innerHTML = totalAntsIncome;

		// Calc aphids cost
		var nextAphidsCost = Math.floor(15 * Math.pow(1.1,aphids));
		document.getElementById('aphidCost').innerHTML = nextAphidsCost;
		// Set aphids total income
		var totalAphidsIncome = aphids * 1;
		document.getElementById('totalAphidsIncome').innerHTML = totalAphidsIncome;		
		
		// Calc fleas cost
		var nextFleasCost = Math.floor(15 * Math.pow(1.1,fleas));
		document.getElementById('fleaCost').innerHTML = nextFleasCost;
		// Set fleas total income
		var totalFleaIncome = fleas * 1;
		document.getElementById('totalFleasIncome').innerHTML = totalFleasIncome;		

		// Calc butterfly cost
		var nextButterflysCost = Math.floor(16 * Math.pow(1.1,butterflys));
		document.getElementById('butterflyCost').innerHTML = nextButterflysCost;
		// Set butterflys total income
		var totalButterflysIncome = butterflys * 2;
		document.getElementById('totalButterflysIncome').innerHTML = totalButterflysIncome;
			
		//var ips = totalAntsIncome + totalButterflysIncome + totalCaterpillarsIncome + totalDolphinsIncome + totaEmusIncome + totalFalconsIncome + totaGiraffesIncome;
		//document.getElementById('ips').innerHTML = ips;
	}
	catch(err) {
		//document.body.innerHTML = err.message + "<br>" + document.body.innerHTML;
		openToast("Game loaded! :) have fun!"); // TODO REMOVE - just for now
		//openToast_Error("Issue with loading... Known issue - when animals are missing");
		return;
	}
	openToast("Game loaded! :) have fun!");
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
		document.getElementById("btnUpg").innerHTML = "Upgrade - Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
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

