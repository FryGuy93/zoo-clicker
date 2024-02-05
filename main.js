var isDebugMode = false; 
var isDebugMode = true; // comment this out to disable debug mode and run in production mode
var zoodollars = 0;
var ips = 0;
var onehundred = 1000000000;
var btnUpgLvl = 1;
var btnUpgCost = 10;

//#region Debugging
window.addEventListener("load", debugScript);

// debug mode - show warning but display page differently - makes it easier to see and test changes
function debugScript(){
	// Load only debug website when in debug mode
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
	<div style="position: fixed; top: 0; left: 0; width: 100%; background: red; font-size: 6px;">DEBUGGING</div>
		`
		+ document.body.innerHTML;
	}
}
// Load pre configured setup - points, animals
function loadPreset1(){
	console.log("Load preset 1 pressed");
	zoodollars = 10000;
	document.getElementById("zoodollars").innerHTML = zoodollars;
}

//#region reset buttons
function resetSave(){
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

//#endregion
//#endregion

function addFunds(number){
    zoodollars = zoodollars + number;
    document.getElementById("zoodollars").innerHTML = zoodollars;
};

//Ants
var ants = 0;
function buyAnt(){ 

    var antCost = Math.floor(8 * Math.pow(1.1,ants));     			//works out the cost of this cursor
    if(zoodollars >= antCost){                            	       //checks that the player can afford the cursor
        ants = ants + 1;                                  			 //increases number of ants
    	zoodollars = zoodollars - antCost;                          //removes the zoodollars spent
        document.getElementById('ants').innerHTML = ants;  //updates the number of ants for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalAntsIncome = ants * 1;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalAntsIncome').innerHTML = totalAntsIncome;   // Updates the total income for user.
		
		ips = ips + 1;
		document.getElementById('ips').innerHTML = ips;
    };
    var nextCost = Math.floor(8 * Math.pow(1.1,ants));       //works out the cost of the next cursor
    document.getElementById('antCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
};

//Butterflys
var butterflys = 0;
function buyButterfly(){

    var butterflyCost = Math.floor(16 * Math.pow(1.1,butterflys));     //works out the cost of this cursor
    if(zoodollars >= butterflyCost){                                   //checks that the player can afford the cursor
        butterflys = butterflys + 1;                                   //increases number of butterflys
    	zoodollars = zoodollars - butterflyCost;                          //removes the zoodollars spent
        document.getElementById('butterflys').innerHTML = butterflys;  //updates the number of butterflys for the user
        document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		totalButterflysIncome = butterflys * 2;                        						// Multiply the current number of animals owned by the income. Enter income manually.
		document.getElementById('totalButterflysIncome').innerHTML = totalButterflysIncome;   // Updates the total income for user.
		
		ips = ips + 2;
		document.getElementById('ips').innerHTML = ips;

    };
    var nextCost = Math.floor(16 * Math.pow(1.1,butterflys));       //works out the cost of the next cursor
    document.getElementById('butterflyCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
};	

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
	};
    var nextCost = Math.floor(32 * Math.pow(1.1,caterpillars));       //works out the cost of the next cursor
    document.getElementById('caterpillarCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
	
};

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
	};
    var nextCost = Math.floor(64 * Math.pow(1.1,dolphins));       //works out the cost of the next cursor
    document.getElementById('dolphinCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
	
};
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
    };
    var nextCost = Math.floor(128 * Math.pow(1.1,emus));       //works out the cost of the next cursor
    document.getElementById('emuCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
	
};
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
	};
    var nextCost = Math.floor(256 * Math.pow(1.1,falcons));       //works out the cost of the next cursor
    document.getElementById('falconCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
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
	};
    var nextCost = Math.floor(512 * Math.pow(1.1,giraffes));       //works out the cost of the next cursor
    document.getElementById('giraffeCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
//Giraffes End
// changed
function save(){
	var allItems = [
	zoodollars,
	ants,
	butterflys,
	caterpillars,
	dolphins,
	emus,
	falcons,
	giraffes,
	ips
	];
	
	localStorage['saveGame'] = btoa(JSON.stringify(allItems));
};

function load(){
    var allItems = JSON.parse(atob(localStorage['saveGame']));
	zoodollars = allItems[0];
	ants = allItems[1];
	butterflys = allItems[2];
	caterpillars = allItems[3];
	dolphins = allItems[4];
	emus = allItems[5];
	falcons = allItems[6];
	giraffes = allItems[7];
	ips = allItems[8];
	
	document.getElementById("zoodollars").innerHTML = zoodollars;
	document.getElementById("ants").innerHTML = ants;
	document.getElementById("butterflys").innerHTML = butterflys;
	document.getElementById("caterpillars").innerHTML = caterpillars;
	document.getElementById("dolphins").innerHTML = dolphins;
    document.getElementById("emus").innerHTML = emus;
	document.getElementById("falcons").innerHTML = falcons;
	document.getElementById("giraffes").innerHTML = giraffes;
	document.getElementById("ips").innerHTML = ips;
	
	// Calc ants cost
	var nextAntsCost = Math.floor(8 * Math.pow(1.1,ants));
    document.getElementById('antCost').innerHTML = nextAntsCost;
	// Set ants total income
	var totalAntsIncome = ants * 1;
	document.getElementById('totalAntsIncome').innerHTML = totalAntsIncome;
	
	// Calc butterfly cost
	var nextButterflysCost = Math.floor(16 * Math.pow(1.1,butterflys));
	document.getElementById('butterflyCost').innerHTML = nextButterflysCost;
	// Set butterflys total income
	var totalButterflysIncome = butterflys * 2;
	document.getElementById('totalButterflysIncome').innerHTML = totalButterflysIncome;
	
	// Calc caterpillar cost
	var nextCaterpillarsCost = Math.floor(32 * Math.pow(1.1,caterpillars));
	document.getElementById('caterpillarCost').innerHTML = nextCaterpillarsCost;
	// Set caterpillars total income
	var totalCaterpillarsIncome = caterpillars * 3;
	document.getElementById('totalCaterpillarsIncome').innerHTML = totalCaterpillarsIncome;
	
	// Calc dolphin cost
	var nextDolphinsCost = Math.floor(64 * Math.pow(1.1,dolphins));
	document.getElementById('dolphinCost').innerHTML = nextDolphinsCost;
	// Set dolphins total income
	var totaDolphinsIncome = dolphins * 4;
	document.getElementById('totaDolphinsIncome').innerHTML = totaDolphinsIncome;
	
	// Calc emu cost
	var nextEmusCost = Math.floor(128 * Math.pow(1.1,emus));
	document.getElementById('emusCost').innerHTML = nextEmusCost;
	// Set emu total income
	var totalEmusIncome = emus * 5;
	document.getElementById('totaEmusIncome').innerHTML = totaEmusIncome;
	
	// Calc falcons cost
	var nextFalconsCost = Math.floor(256 * Math.pow(1.1,emus));
	document.getElementById('falconsCost').innerHTML = nextFalconsCost;
	// Set falcons total income
	var totalFalconsIncome = falcons * 10;
	document.getElementById('totaFalconsIncome').innerHTML = totaFalconsIncome;
	
	// Calc giraffes cost
	var nextGiraffesCost = Math.floor(512 * Math.pow(1.1,emus));
	document.getElementById('giraffesCost').innerHTML = nextGiraffesCost;
	// Set giraffes total income
	var totalGiraffesIncome = giraffes * 25;
	document.getElementById('totaGiraffesIncome').innerHTML = totaGiraffesIncome;
	
	//var ips = totalAntsIncome + totalButterflysIncome + totalCaterpillarsIncome + totalDolphinsIncome + totaEmusIncome + totalFalconsIncome + totaGiraffesIncome;
	//document.getElementById('ips').innerHTML = ips;
};

function addFunds2(){
    addFunds(btnUpgLvl * 1);	
    document.getElementById("zoodollars").innerHTML = zoodollars;
};

function upgradeFunds(){
	if(zoodollars >= btnUpgCost){
		btnUpgLvl = btnUpgLvl + 1;		
		zoodollars = zoodollars - btnUpgCost;
		btnUpgCost = Math.floor(10 * Math.pow(1.1,btnUpgLvl));
		document.getElementById("btnUpg").innerHTML = "Upgrade - Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
		document.getElementById("zoodollars").innerHTML = zoodollars;
	};
};

//Update stats
window.setInterval(function(){
	addFunds(ants * 1);
	addFunds(butterflys * 2);
	addFunds(caterpillars * 3);
	addFunds(dolphins * 4);
	addFunds(emus * 5);
	addFunds(falcons * 10);
	addFunds(giraffes * 25);
}, 1000);

function checkDollars(){
	if(zoodollars == onehundred){
		alert("You're A Billionaire Bruh.");
		};
}