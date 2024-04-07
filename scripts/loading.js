/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/

// On page load - insert HTML
$(function() { $("#netlify").load("../components/netlify.html"); });
$(function() { $("#glossary").load("../components/glossary.html"); });
$(function() { $("#toasts").load("../components/toasts.html"); });
$(function() { $("#topbarload").load("../components/topbar.html"); });
$(function() { $("#banner").load("../components/banner.html"); });
$(function() { $("#unlocks").load("../components/unlocks.html"); });
$(function() { $("#exhibits").load("../components/exhibits.html"); });

// Wait until finished loading?
window.onload = function() {       
    setTimeout(function(){
        startScript();
    }, 100); // ?is 0.1 seconds enough time for page to load??
}
