function myKeyPress(e){
var digits = e.which;
if(e.target.value.length > 11) {
return false;
}
var mytextbox = e.target.value;
var keyPressed;
if(window.event) {
keyPressed = e.keyCode;
}else if(e.which){
keyPressed = e.which;
}
var x = String.fromCharCode(keyPressed);
var y = formatPhoneNumber(mytextbox);
console.log("Key Pressed = " + x);
console.log("  Formatted = " + y);
  e.target.value=y;
}
function formatPhoneNumber(value){
value = value.replace(/-/g, "");
if(value.length > 3 && value.length <= 6)
value = value.slice(0,3) + "-" + value.slice(3);
else if(value.length > 6)
value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
return value;
}