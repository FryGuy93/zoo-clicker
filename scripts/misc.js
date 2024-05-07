/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// TODO MOVE INTO OWN FILE... Funds, add day
//#region funds
function addFunds(){
    addFundsMulti(btnUpgLvl * 1);
	stats_clickedCount++;
	//console.log("clicked addFunds");
}

/**
 * Add funds with a multiplier - runs every day
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
		//document.getElementById("btnUpg").innerHTML = "Lvl: " + btnUpgLvl + ", Cost: " + btnUpgCost;
		document.getElementById("btnUpg").innerHTML = ` Z$ ${btnUpgCost} (lvl ${btnUpgLvl})`
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

