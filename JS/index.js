let audio=document.getElementById('audio');
let audio2=document.getElementById('audio2');
let audio3=document.getElementById('audio3');
function aplay(){
    audio.play();
    document.querySelector("#button .fa-pause").style.display='block';
    document.querySelector("#button .fa-play").style.display='none';

}
function apause(){
    audio.pause();
      document.querySelector("#button .fa-pause").style.display='none';
    document.querySelector("#button .fa-play").style.display='block';

}
function fun(){
    audio2.play();
    document.querySelector("#button2 .fa-pause").style.display='block';
    document.querySelector("#button2 .fa-play").style.display='none';

}
function pus(){
    audio2.pause();
      document.querySelector("#button2 .fa-pause").style.display='none';
    document.querySelector("#button2 .fa-play").style.display='block';

}
function fun2(){
    audio3.play();
    document.querySelector("#button3 .fa-pause").style.display='block';
    document.querySelector("#button3 .fa-play").style.display='none';

}
function pus2(){
    audio3.pause();
      document.querySelector("#button3 .fa-pause").style.display='none';
    document.querySelector("#button3 .fa-play").style.display='block';

}