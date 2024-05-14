/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

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
		// this code breaks canvas
		/*
		var debugBar = `aaa
		`;
		document.body.prepend(debugBar);
		*/
			/*
			document.body.innerHTML = `
			<div id="debugbar">
			DEBUGGING - 
			<a href="/">Home</a>
			<a href="index.html">Index</a>
			<a href="debug.html">Debug</a>
			<a href="todo.html">TODO</a>
			</div>
			`
			+ document.body.innerHTML;
		*/	
		
		
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
	ips -= totalAntsIncome; // TODO IPS change to IPD
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
