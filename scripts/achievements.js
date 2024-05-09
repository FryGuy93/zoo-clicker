/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// Achievements
// 	All unlocks unlocked
// 	1 of each animal
// 	# of each animal
// 	lvl 10 clicker
// 	...
var doneOnce = false; // TODO REMOVE?
var checkDollars_Achievement_Hint = "Get more dollars!";
var checkUnlocks_Achievement_Hint = "Unlock more!";

function checkAchievements(){
	checkDollars_Achievement(); // 1000
	checkUnlocks_Achievement(); // 2 unlocks
	if (doneOnce == false) {
		doneOnce = true;
		$("#achievementsHeader").on("click", hideShowAchievements);
	}
}

function checkDollars_Achievement(){
	if (isCheckDollars_Achievement_Unlocked) return;
	
	if(zoodollars >= onehundred){
		isCheckDollars_Achievement_Unlocked = true;
		$("#checkDollars_Achievement_Btn").addClass("bi bi-unlock-fill");
		$("#checkDollars_Achievement_Btn").css("background-color", "rgb(0, 162, 22)");
		alert("Money!");
		//alert("You're A Billionaire Bruh.");
		settingsSave();
		celebrateAgain();
	}
}

function checkUnlocks_Achievement(){
	if (isCheckUnlocks_Achievement_Unlocked) return;
	
	if(isInsectsUnlocked == true &&
		isArachnidsUnlocked == true
	){
		isCheckUnlocks_Achievement_Unlocked = true;
		$("#checkUnlocks_Achievement_Btn").addClass("bi bi-unlock-fill");
		$("#checkUnlocks_Achievement_Btn").css("background-color", "rgb(0, 162, 22)");
		alert("All unlocks unlocked!");
		settingsSave();
		celebrateAgain();
	}
	//unlockedAreasCount 
}

function checkDollars_Achievement_Button(){
	if (!isCheckDollars_Achievement_Unlocked) {
		openToast("Locked - " + checkDollars_Achievement_Hint);

	}
	if (isCheckDollars_Achievement_Unlocked){
		openToast("Unlocked - Congrats!");
		celebrateAgain();
	}
}

function checkUnlocks_Achievement_Button(){
	if (!isCheckUnlocks_Achievement_Unlocked){
		openToast("Locked - " + checkUnlocks_Achievement_Hint);
	} 
	if (isCheckUnlocks_Achievement_Unlocked) {
		openToast("Unlocked - Congrats!");
		celebrateAgain();
	}
}



function hideShowAchievements(){
	$("#checkDollars_Achievement_Btn").toggle();
	$("#checkUnlocks_Achievement_Btn").toggle();
	$("#reset_Achievements_Btn").toggle();
}


function resetAchievements(){
	isCheckDollars_Achievement_Unlocked = false;
	isCheckUnlocks_Achievement_Unlocked = false;

	// TODO MOVE TO A BETTER WAY
	$("#checkDollars_Achievement_Btn").addClass("bi bi-lock-fill");
	$("#checkDollars_Achievement_Btn").css("background-color", "rgb(255, 162, 22)");
	$("#checkUnlocks_Achievement_Btn").addClass("bi bi-lock-fill");
	$("#checkUnlocks_Achievement_Btn").css("background-color", "rgb(255, 162, 22)");
	alert("Achievements Reset!");
	settingsSave();
}
