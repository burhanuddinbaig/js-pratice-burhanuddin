let val;

/*
val = document;
val = document.all;
val = document.all[15];
val = document.all.length;
val = document.all.url;
val = document.domain;
val = document.textContent;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;

val = document.images;
*/

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'))
})

console.log(val);