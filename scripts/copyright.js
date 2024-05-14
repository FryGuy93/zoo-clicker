/*
Copyright (c) 2024, Ian Fry, Ian Harcourt-Smith
All rights reserved.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree. 
*/
function loadCopyright(){
    const thisYear = new Date().getFullYear()
    document.getElementById("year").setAttribute("datetime", thisYear.toString())
    document.getElementById("year").textContent = thisYear.toString()
}