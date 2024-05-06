/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

var stats_clickedCount = 0; // addFunds() - ZooClicker button pressed

// Unlock Zones
function statsShowHide(){
	$('#exampleModalCenter').modal("toggle");
	$('#clickedCount').text(stats_clickedCount);

	//openToast("statsShowHide finished"); 
}
