/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

function addFunds(){
    addFundsMulti(btnUpgLvl * 1);	
    document.getElementById("zoodollars").innerHTML = zoodollars;
}
function addFundsMulti(number){
	zoodollars = zoodollars + number;
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

function addDay(number){
    day += number;
    document.getElementById("day").innerHTML = day;
}
