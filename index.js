let scoreEl = document.getElementById("home");
let scoreE = document.getElementById("guest");
let count = 0;
let count_l = 0;
function addOne(){
    count+=1
    scoreEl.textContent=count;
}

function addTwo(){
    count+=2
    scoreEl.textContent=count;
}

function addThree(){
    count+=3
    scoreEl.textContent=count;
}

function add1(){
    count_l+=1
    scoreE.textContent=count_l;
}

function add2(){
    count_l+=2
    scoreE.textContent=count_l;
}

function add3(){
    count_l+=3
    scoreE.textContent=count_l;
}

function newsc(){
    count=0;
    count_l=0;
    scoreE.textContent = count_l
    scoreEl.textContent = count
}