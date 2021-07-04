{/* <h2>Background colour changer</h2>
<button id="btnred">Red</button>
<button id="btnyellow">Yellow</button>
<button id="btngreen">Green</button>
<button id="btnpink">Pink</button>
<button id="btnblue">Blue</button>
<button id="btnreset">Reset</button> */}


let my_body= document.querySelector("#my_body");
let btnyellow=document.querySelector("#btnyellow");
let btngreen=document.querySelector("#btngreen");
let btnred=document.querySelector("#btnred");
let btnpink=document.querySelector("#btnpink");
let btnblue=document.querySelector("#btnblue");
let btnreset=document.querySelector("#btnreset");

btnred.addEventListener('click', function(){
    my_body.style.background = "#F55C47";
});

btnyellow.addEventListener('click', function(){
    my_body.style.background = "#ECD662";
});

btngreen.addEventListener('click', function(){
    my_body.style.background = "#5D8233";
});

btnpink.addEventListener('click', function(){
    my_body.style.background = "#F38BA0";
});

btnblue.addEventListener('click', function(){
    my_body.style.background = "#B5EAEA";
});

btnreset.addEventListener('click', function(){
        my_body.style.background = "white";
    

});