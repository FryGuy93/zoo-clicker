/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

var isDebugMode = false; 
//var isDebugMode = true; // comment this out to disable debug mode and run in production mode
var isDebugModeLocalHostOnly = true; //http://localhost:3000/debug.html
var hasSettingsLoaded = false;
var zoodollars = 0;
var ips = 0;
var day = 0;
var onehundred = 10000; //00000
var isCheckDollars_Achievement_Unlocked = false;
var isCheckUnlocks_Achievement_Unlocked = false;
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
var isDarkMode = false;
var isPageFinishedLoading = false;

// Animal variables
var costMultiplier = 1.1; //insectMultiplier

var ants = 0;
var antCostMultiplier = 10;
var antIPDMultiplier = 1; // USED?
var antsAttraction = 1;

var aphids = 0;
var aphidCostMultiplier = 25;
var aphidIPDMultiplier = 2;
var aphidsAttraction = 2;

var fleas = 0;
var fleaCostMultiplier = 50;
var fleaIPDMultiplier = 5;
var fleasAttraction = 3;

//#region Classes/Objects
//var animal = {a:1}; // New object

class animal {
	name = "";
	count = 0;
	multiplier = 0;
	cMultiplier = 0;
	IPDMultiplier = 0;
	//ant.totalAntsIncome = totalAntsIncome;
}
//#endregion
