/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// Wait until finished loading?
/*
window.onload = function() {       
    setTimeout(function(){
        startScript();
    }, 100); // ?is 0.1 seconds enough time for page to load??
}
*/

// Loop to wait until finished loading... or timeout
var waitingForPageLoaded_IntervalId = window.setInterval(waitingForPageLoaded, 100);
function waitingForPageLoaded() {
    console.log("Page not loaded yet...");

    if(isPageFinishedLoading == true){
        console.log("Finished loading page confirmed...");
        window.clearInterval(waitingForPageLoaded_IntervalId);
        startScript();
    }
}
//isPageFinishedLoading


// On page load - insert HTML
$(function() { 
    $("#div1").load("demo_test.txt", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    //$("#div1").load("demo_test.txt", loadingProcess(response, status, xhr));
    $("#netlify").load("../components/netlify.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#glossary").load("../components/glossary.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#toasts").load("../components/toasts.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#topbarload").load("../components/topbar.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#banner").load("../components/banner.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#unlocks").load("../components/unlocks.html", function (response, status, xhr){
        loadingProcess(response, status, xhr)
    });
    $("#exhibits").load("../components/exhibits.html", function (response, status, xhr){
        loadingProcess(response, status, xhr, true)
    });
});

function loadingProcess(responseTxt, statusTxt, xhr, isFinished){
    if(statusTxt == "success"){
        console.log("External content loaded successfully! - Content: " + responseTxt.substring(0, 20) + "...");
    }
    if(statusTxt == "error"){
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
    }
    //console.log(responseTxt); // Content...

    // only on last element...
    if(isFinished == true){
        console.log("Finished loading page...");
        isPageFinishedLoading = true;
    }
}