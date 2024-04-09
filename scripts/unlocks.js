/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// Unlock Zones
function checkUnlocks() {
	unlockedAreasCount = 0;
	if(isInsectsUnlocked) unlockInsects();
	if(isArachnidsUnlocked) unlockArachnids();
}

function unlockInsects() {
	if(isInsectsUnlocked) {
		unlockedAreasCount++;
		//zooEntryPrice_initial += 10;
		document.getElementById("unlockInsectsBtn").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("disabled");
		return;
	}

    if(!isInsectsUnlocked && zoodollars >= unlockInsectsCost){   
		zoodollars -= unlockInsectsCost;
		document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		isInsectsUnlocked = true;
		unlockedAreasCount++;
		//zooEntryPrice_initial += 10;
		// TODO
		//document.getElementById("unlockInsectsBtn").disabled = true;
		document.getElementById("unlockInsectsBtn").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("disabled");

		selectInsects();

		//document.getElementById("ant").disabled = false; 
		openToast("Insects unlocked!"); 
    }
	else {
		openToast("Cannot unlock Insects - not enough funds!"); 
	}
}

function unlockArachnids(){
	if(isArachnidsUnlocked) {
		unlockedAreasCount++;
		//zooEntryPrice_initial += 20;
		document.getElementById("unlockArachnidsBtn").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("disabled");
		return;
	}

    if(!isArachnidsUnlocked && zoodollars >= unlockArachnidsCost){   
		zoodollars -= unlockArachnidsCost;
		document.getElementById('zoodollars').innerHTML = zoodollars;  //updates the number of zoodollars for the user
		
		isArachnidsUnlocked = true;
		unlockedAreasCount++;
		//zooEntryPrice_initial += 20;

		// TODO
		//document.getElementById("unlockInsectsBtn").disabled = true;
		document.getElementById("unlockArachnidsBtn").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("disabled");

		selectArachnids();

		//document.getElementById("ant").disabled = false; 
		openToast("Arachnids unlocked!"); 
    }
	else {
		openToast("Cannot unlock Arachnids - not enough funds!"); 
	}
}


function selectInsects(){
    if(isInsectsUnlocked){ 
		// Show only Insects Panel
		//document.getElementById('exhInsectsTitle').disabled = false;
		document.getElementById("exhInsects").hidden = false;
		document.getElementById("exhInsectsTitle").classList.add("active");

		document.getElementById("exhArachnids").hidden = true;
		document.getElementById("exhArachnidsTitle").classList.remove("active");
	} else {
		openToast("Insects not unlocked!"); 
	}
}

function selectArachnids(){
	if(isArachnidsUnlocked){ 
		//document.getElementById('exhArachnidsTitle').disabled = false;
		document.getElementById("exhInsects").hidden = true;
		document.getElementById("exhInsectsTitle").classList.remove("active");

		document.getElementById("exhArachnids").hidden = false;
		document.getElementById("exhArachnidsTitle").classList.add("active");
	}else {
		openToast("Arachnids not unlocked!"); 
	}
}
