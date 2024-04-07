/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

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
    var nextCost = Math.floor(10 * Math.pow(1.1,ants));       //works out the cost of the next cursor
    document.getElementById(animalCostEle).innerHTML = nextCost;  //updates the cursor cost for the user
	
}

//#region Ants
var ants = 0;
function buyAnt(){ 
	// TODO simplify into "buyAnimal" function
    var antCost = Math.floor(10 * Math.pow(1.1,ants));     			//works out the cost of this cursor
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
    var nextCost = Math.floor(10 * Math.pow(1.1,ants));       //works out the cost of the next cursor
    document.getElementById('antCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

var ant = {a:1}; // New object
//TESTING - buyAnimal function
function buyAnt2(){ // NOT USED
	ant.multiplier = 10;
	ant.count = ants;
	
	ant.totalAntsIncome = totalAntsIncome;
	buyAnimal("Ant", 10, ant.count, "ants", "totalAntsIncome", ant.totalAntsIncome, "antCost");
	// Pass reference back
	//ants = ant.count;
	//totalAntsIncome = ant.totalAntsIncome;
	openToast("WORKING! " + ants + ", " + totalAntsIncome + ", " + ant.count + ", " + ant.totalAntsIncome.innerHTML); 
}
//#endregion

//#region Aphids
var aphids = 0;
function buyAphid(){ 
	// TODO simplify
    var aphidCost = Math.floor(25 * Math.pow(1.1,aphids));     			//works out the cost of this cursor
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
    var nextCost = Math.floor(25 * Math.pow(1.1,aphids));       //works out the cost of the next cursor
    document.getElementById('aphidCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//#endregion

//#region Fleas
var fleas = 0;
function buyFlea(){ 
	// TODO simplify
    var fleaCost = Math.floor(fleaStartingCost * Math.pow(insectMultiplier,fleas));     			//works out the cost of this cursor
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
    var nextCost = Math.floor(50 * Math.pow(1.1,fleas));       //works out the cost of the next cursor
    document.getElementById('fleaCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
//#endregion
