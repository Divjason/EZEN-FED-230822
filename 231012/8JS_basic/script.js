// 문자열 객체
let t = "Hello Thank you good luck to you";
document.write(t, "<br>");

document.write(t.charAt(16), "<br/>");
document.write(t.indexOf("you"), "</br>");
document.write(t.indexOf("you", 16), "</br>");
document.write(t.lastIndexOf("you"), "</br>");
document.write(t.lastIndexOf("you", 25), "</br>");
document.write(t.match("luck"), "</br>");
document.write(t.search("luck"), "</br>");
document.write(t.substr(21, 4), "</br>");
document.write(t.substring(6, 12), "</br>");
document.write(t.replace("you", "me"), "</br>");
document.write(t.toLowerCase(), "</br>");
document.write(t.toUpperCase(), "</br>");
document.write(t.length, "</br>");

let s = t.split(" ");
console.log(s);
document.write(s[0], "<br/>");
document.write(s[4], "<br/>");

let str = "A";
let k = str.charCodeAt(0);
document.write(k, "<br/>");
