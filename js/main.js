// jsを記述する際はここに記載していく

function r_click (myjanken_r) {
    let vsjanken_r = Math.floor (Math.random()*3);    // 相手のじゃんけんのアウトプット生成
    let result = "";
    if (myjanken_r === vsjanken_r) {result = "あいこです、もう一度選択してください";}
    else if(myjanken_r - vsjanken_r === 1 || myjanken_r - vsjanken_r === -2) {result = "おめでとうございます！あなたの勝ちです！";}
    else{result = "残念…あなたの負けです"}
    
    document.querySelector("#game__result").innerHTML = result;
    let vsjanken_output = vsjanken_r +3
    document.querySelector("#game__vsoption").src = "img/" + vsjanken_output + ".jpg";
    document.querySelector("#game__vsoption").style.height ="150px";
    document.querySelector("#game__vsoption").style.width ="150px";
    document.querySelector(".game__choice").style.position = 'relative';
    document.querySelector(".game__choice").style.left = "-25px";
};

function r_click2 (myjanken_r){
    let myjanken = ["#game__guu","#game__paa","#game__choki"];    // 自分のじゃんけんのアウトプットのオプション集合作成
    let test = myjanken[myjanken_r];
    document.querySelector("#game__guu").style.height ="100px";
    document.querySelector("#game__guu").style.width ="100px"; 
    document.querySelector("#game__paa").style.height ="100px";
    document.querySelector("#game__paa").style.width ="100px"; 
    document.querySelector("#game__choki").style.height ="100px";
    document.querySelector("#game__choki").style.width ="100px"; 
    document.querySelector(test).style.height ="150px";
    document.querySelector(test).style.width ="150px"; 
};


// document.querySelector("#game__guu").onclick =  function () {
//     this.style.height  ="150px";
//     this.style.width  ="150px";}

// document.querySelector("#game__paa").onclick =  function () {
//     this.style.height  ="150px";
//     this.style.width  ="150px";}
    
// document.querySelector("#game__choki").onclick =  function () {
//     this.style.height  ="150px";
//     this.style.width  ="150px";
//     }
