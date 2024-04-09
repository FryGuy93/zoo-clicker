/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

function updateUI_Animals(){
	// Update UI
	$("#zoodollars").html(zoodollars); 
	//$("#ips").html(ips);

	$("#ants").html(ants); 
	var ant_nextCost = Math.floor(antCostMultiplier * Math.pow(costMultiplier, ants));       //works out the cost of the next animal
	$("#antCost").html(ant_nextCost);
	
	$("#aphids").html(aphids); 
	var aphid_nextCost = Math.floor(aphidCostMultiplier * Math.pow(costMultiplier, aphids));       //works out the cost of the next animal
	$("#aphidCost").html(aphid_nextCost);
	
	$("#fleas").html(fleas); 
	var flea_nextCost = Math.floor(fleaCostMultiplier * Math.pow(costMultiplier, fleas));       //works out the cost of the next animal
	$("#fleaCost").html(flea_nextCost);

	//updates the number of zoodollars for the user
	//totalAntsIncome = ants * 1;                        						// Multiply the current number of animals owned by the income. Enter income manually.
	//document.getElementById('totalAntsIncome').innerHTML = totalAntsIncome;   // Updates the total income for user.
	
}

/* BuyAnimal
"Buy 1" button = add 1 Animal to account
1. check if purchasable - current price calc - current dollars
2. increase count of Animal
3. minus current dollars
4. update IPD
5. calculate next cost
6. update UI
*/
//function buyAnimal(animalName, multiplier, animalCount, animalEle, animalIncomeEle, animalIncome, animalCostEle){
function buyAnimal(newAnimal){
	//console.log("newAnimal: " + JSON.stringify(newAnimal));
	var animalCost = Math.floor(newAnimal.multiplier * Math.pow(newAnimal.cMultiplier, newAnimal.count)); //works out the cost of this animal
	if(zoodollars >= animalCost){ //checks that the player can afford the animal
		newAnimal.count += 1; //increases number of animals
		zoodollars =  zoodollars - animalCost; //removes the zoodollars spent
		//ips += newAnimal.IPDMultiplier; // Income Per Day
	}
	else {
		openToast("Cannot buy " + newAnimal.name + " - not enough funds!"); 
	}
	//console.log("2newAnimal: " + JSON.stringify(newAnimal));
}

//#region Ants
function buyAnt(){ 
	// Create object
	var newAnimal = new animal();
	newAnimal.name = "Ants";
	newAnimal.count = ants;
	newAnimal.multiplier = antCostMultiplier;
	newAnimal.IPDMultiplier = antIPDMultiplier;
	newAnimal.cMultiplier = costMultiplier;
	
	buyAnimal(newAnimal); // Purchase

	ants = newAnimal.count; // Change variables
	updateUI_Animals(); // Update
	//console.log("changed newAnimal: " + JSON.stringify(newAnimal));
}
//#endregion

//#region Aphids
function buyAphid(){ 
	// Create object
	var newAnimal = new animal();
	newAnimal.name = "Aphids";
	newAnimal.count = aphids;
	newAnimal.multiplier = aphidCostMultiplier;
	newAnimal.IPDMultiplier = aphidIPDMultiplier;
	newAnimal.cMultiplier = costMultiplier;

	buyAnimal(newAnimal); // Purchase

	aphids = newAnimal.count; // Change variables
	updateUI_Animals(); // Update
	//console.log("changed newAnimal: " + JSON.stringify(newAnimal));
}
//#endregion

//#region Fleas
function buyFlea(){ 
	// Create object
	var newAnimal = new animal();
	newAnimal.name = "Fleas";
	newAnimal.count = fleas;
	newAnimal.multiplier = fleaCostMultiplier;
	newAnimal.IPDMultiplier = fleaIPDMultiplier;
	newAnimal.cMultiplier = costMultiplier;

	buyAnimal(newAnimal); // Purchase

	fleas = newAnimal.count; // Change variables
	updateUI_Animals(); // Update
	//console.log("changed newAnimal: " + JSON.stringify(newAnimal));
}
//#endregion
