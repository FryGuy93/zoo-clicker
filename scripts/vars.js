/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

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
var unlockInsectsCost = 25;
var unlockArachnidsCost = 500;
var isInsectsUnlocked = false;
var isArachnidsUnlocked = false;
var unlockedAreasCount = 0; // Each area worth same?
var visitorsPerDay = 0;
var zooEntryPrice_initial = 10;
var zooDollarsPerDay = 0
var ticketPrice = 0;
var isDarkMode = true;
var isPageFinishedLoading = false;


// Animal variables
var antsAttraction = 1;
var aphidsAttraction = 2;
var fleasAttraction = 3;
var fleaStartingCost = 50;
var insectMultiplier = 1.1;