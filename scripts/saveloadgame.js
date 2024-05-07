/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

//IndexedDB?

/**
 * Save and load at start of game - preferences/settings
 */
function settingsSave(){
	localStorage.isDarkMode = isDarkMode;
	//openToast("Settings saved!");
	console.log("Settings saved!");
}
// Loaded at start
function settingsLoad(){
	console.log("Settings loaded! - Dark Mode?: " + localStorage.isDarkMode);
	//openToast("Settings loaded! - Dark Mode?: " + localStorage.isDarkMode);
	//isDarkMode = localStorage.isDarkMode;
	//if(localStorage.isDarkMode == true) darkModeSwitch(true);
	if(localStorage.isDarkMode == "true") darkMode_Set(true);
	if(localStorage.isDarkMode == "false") darkMode_Set(false);
	
	//console.log("localStorage.isDarkMode: " + localStorage.isDarkMode);

	//darkModeSwitch(localStorage.isDarkMode);
}

// Buttons
function saveGame(){
	//openToast("Saving data...");
	var allItems = [
		zoodollars,
		ants,
		aphids,
		fleas,
		ips,
		btnUpgLvl,
		day,
		isInsectsUnlocked,
		isArachnidsUnlocked,
		stats_clickedCount
	];
	
	localStorage['saveGame'] = btoa(JSON.stringify(allItems));
	openToast("Data saved! :)");
}

// Buttons
function loadGame(){
	//openToast("Loading game");

	try {
		var allItems = JSON.parse(atob(localStorage['saveGame']));
		zoodollars = allItems[0];
		ants = allItems[1];
		aphids = allItems[2];
		fleas = allItems[3];
		ips = allItems[4];
		btnUpgLvl = allItems[5];
		day = allItems[6];
		isInsectsUnlocked = allItems[7];
		isArachnidsUnlocked = allItems[8];
		stats_clickedCount = allItems[9];
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
		document.getElementById("btnUpg").innerHTML = ` Z$ ${btnUpgCost} (lvl ${btnUpgLvl})`
		//document.getElementById("btnUpg").innerHTML = "Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
		checkUnlocks();
		
		// Fix for no open tabs...
		selectInsects(); // TODO test - check when user doesn't have unlocked in save

		// Animals
		document.getElementById("ants").innerHTML = ants;
		document.getElementById("aphids").innerHTML = aphids;
		document.getElementById("fleas").innerHTML = fleas;
		
		// ERROR HERE WHEN ANIMAL NOT FOUND ON PAGE...

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
