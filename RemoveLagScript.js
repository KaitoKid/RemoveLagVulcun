// ==UserScript==
// @name         Vulcun Remove Lag
// @namespace    http://hyouka.space/
// @version      0.1
// @description  Removes List of Banned Users From Loading On Page (For Mods only)
// @author       Kairui Zeng
// @match        https://vulcun.com/*
// @grant        GM_addStyle
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.githubusercontent.com/kepkin/ff99090c410ab1b5c8fa/raw/a1e229b38cb6eb169556ae9b5e751e5c81d59929/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements (".vlch-muted-banned", remove);

function remove(){
    $(".vlch-muted-banned").remove();
    console.log("Removed the list/lag");
}
