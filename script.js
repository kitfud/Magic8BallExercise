var eye = document.getElementById('eye');

var position = 50;

var direction =-5;

function eyeMovement(){
position = position + direction;

if(position>65){
  direction = -5;
}
if(position <35){
  direction = 5;
}

eye.style.left = position +"%"

}

var response = [
  "0-try again",
  "1-you can rely on it",
  "2-it is so"
]

window.onload=function(){
let result = document.getElementById("message")
result.onclick = giveResponse;
}

function giveResponse(){
  let index = Math.floor(Math.random()* response.length);
  alert(response[index]);
}
