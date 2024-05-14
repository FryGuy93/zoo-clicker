/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// On page load - insert HTML
$(function() { 
    console.log("Loading page...");
    if (isDebugMode) {
        loadElement("debugbar");
    }
    loadElement("netlify");
    loadElement("ui");
    loadElement("toasts");
    loadElement("topbar");
    loadElement("stats");
    loadElement("achievements");
    loadElement("banner");
    loadElement("unlocks");
    loadElement("exhibits");
    loadElement("glossary");
    
    loadElement("footer", true);
});
// elementName = 
//  name of element on index page = "<div id="banner">" 
//  and name of file = "banner.html"
function loadElement(elementName, isFinished){
    $("#"+elementName).load("../components/"+elementName+".html", function (response, status, xhr){
        loadingProcess(response, status, xhr, isFinished)
    });
}

function loadingProcess(responseTxt, statusTxt, xhr, isFinished){
    if(statusTxt == "success"){
        console.log("\tSuccess - External content loaded! - Content: " + responseTxt.substring(0, 20) + "...");
    }
    if(statusTxt == "error"){
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
    }
    //console.log(responseTxt); // Content...

    // only on last element...
    if(isFinished == true){
        isPageFinishedLoading = true;
    }
}

// Say Hi
/*
setTimeout(function(){
    openToast("Welcome!");
}, 1000); 
*/


// Loop to wait until finished loading... or timeout
var waitingForPageLoaded_IntervalId = window.setInterval(waitingForPageLoaded, 100);
function waitingForPageLoaded() {
    if(isPageFinishedLoading == true){
        console.log("Page loaded");
        window.clearInterval(waitingForPageLoaded_IntervalId);
        startScript();
    }
    if(isPageFinishedLoading == false){
        console.log("Page not loaded yet...");
    }
}


// Error handler
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    openToast("Error occured: " + errorMsg);
    //alert("Error occured: " + errorMsg);
    return false;
}
