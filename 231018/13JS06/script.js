let info = navigator.userAgent.toLowerCase();
console.log(info);
let osImg;

if (info.indexOf("windows") >= 0) {
  osImg = "windows.png";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "macintosh.png";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "iphone.png";
} else if (info.indexOf("android") >= 0) {
  osImg = "android.png";
}

document.write(`<img src="../img/1/${osImg}"> <br/>`);
let scr = screen;
let sc_w = scr.width;
let sc_h = scr.height;

document.write(`모니터 해상도 너비: ${sc_w}px <br/>`);
document.write(`모니터 해상도 높이: ${sc_h}px`);
