var userName = prompt("Enter you name: ");
var firstChar = (userName.slice(0,1)).toUpperCase();
var restOfChar = (userName.slice(1,userName.length)).toLowerCase();
alert("Hello "+firstChar+restOfChar);
