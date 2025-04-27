let computerScore=document.querySelector("#computerScore");
let userScore=document.querySelector("#userScore");

let closeRuleBtn=document.querySelector(".close");
let ruleScroll=document.querySelector(".rules");
let ruleBtn=document.querySelector(".ruleBtn");

let stone=document.querySelector("#stoneIcon")
let paper=document.querySelector("#paperIcon");
let scissors=document.querySelector("#scissorsIcon");

let youPickedStone=document.querySelector(".userStoneClass");
let youPickedPaper=document.querySelector("#youPickedPaper");
let youPickedScissors=document.querySelector("#youPickedScissors");

let pcPickedStone=document.querySelector("#pcPickedStone");
let pcPickedPaper=document.querySelector("#pcPickedPaper");
let pcPickedScissors=document.querySelector("#pcPickedScissors");

let drawResult=document.querySelector(".drawResult");
let lostResult=document.querySelector(".lostResult");
let winResult=document.querySelector(".winResult");

let nxtBtn=document.querySelector(".nextBtn");
let secondRuleBtn=document.querySelector(".rulesBtn");
let playAgianBtn=document.querySelector(".playagainBtn");
let lostPlayBtn=document.querySelector("#youLostText");
let tiePlayBtn=document.querySelector("#tieUpText");

let stars=document.querySelector(".stars");
let trophy=document.querySelector(".trophy");
let victoryText=document.querySelector(".victoryText");
let victoryPlayBtn=document.querySelector(".playbtn");

let choices=document.querySelectorAll(".gameNames");


let homeScreen=document.querySelector(".iconAndRulesContainer");
let userChoice="";
let computerChoice="";
let randNum;

let then=0;


// let computer=40;
let Arr=["stone","paper","scissors"];

computerScore.innerText=0;
userScore.innerText=0;

closeRuleBtn.addEventListener('click',()=>{
    ruleScroll.classList.add("disappear");
    closeRuleBtn.classList.add("disappear");
    console.log("close");
})

ruleBtn.addEventListener('click',()=>{
    ruleScroll.classList.remove("disappear");
    closeRuleBtn.classList.remove("disappear");
})

secondRuleBtn.addEventListener('click',()=>{
    ruleScroll.classList.remove("disappear");
    closeRuleBtn.classList.remove("disappear");
    console.log("closesssssss");
    
})

playAgianBtn.addEventListener('click',()=>{
    window.location.reload();     // refresh the page when user clicks on playagain button (redirecting to home page)

})

lostPlayBtn.addEventListener('click',()=>{
        window.location.reload(); })

tiePlayBtn.addEventListener('click',()=>{
        window.location.reload(); })

nxtBtn.addEventListener('click',()=>{
    stars.classList.add("appear");
    trophy.classList.add("appear");
    victoryText.classList.add("appear");
    victoryPlayBtn.classList.add("appear");
    console.log("kuchh ho rha hai??")
        })
        victoryPlayBtn.addEventListener('click',()=>{
            window.location.reload(); })



    function choose(){
        stone.addEventListener('click',()=>{
            homeScreen.classList.add("disappear");
            ruleScroll.classList.add("disappear");
            closeRuleBtn.classList.add("disappear");
            youPickedStone.classList.add("appear");
            userChoice="stone";
            then=1;
            console.log(userChoice);
            console.log("hello1");

            if(then===1){

                function generateRandNum(){
                    return Math.floor(Math.random()*3);
                }
                randNum=generateRandNum();
                if(randNum===0){
                    pcPickedStone.classList.add("appear");
                    computerChoice="stone";
                }else if(randNum==1){
                    pcPickedPaper.classList.add("appear");
                    computerChoice="paper";
                }else{
                    pcPickedScissors.classList.add("appear");
                    computerChoice="scissors";
                }
                console.log(userChoice);
                console.log(computerChoice);
                if(userChoice===computerChoice){
                    drawResult.classList.add("appear");
                    // secondRuleBtn.classList.add("appear");
                }else if(userChoice==="stone" && computerChoice==="paper" || userChoice==="paper" && computerChoice==="scissors"
                    || userChoice==="scissors" && computerChoice==="stone"
                ){
                    lostResult.classList.add("appear");
                    computerScore.innerText+=1;
                    
                    // secondRuleBtn.classList.add("appear");
                }else if(userChoice==="stone" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="stone"
                 || userChoice==="scissors" && computerChoice==="paper"
                ){
                    winResult.classList.add("appear");  
                    ruleBtn.classList.add("disappear");
                        nxtBtn.classList.add("appear");
                     secondRuleBtn.classList.add("appear");
                     userScore.innerText+=1;
                     
                }
            }
        });
   
        paper.addEventListener('click',()=>{
            homeScreen.classList.add("disappear");
            ruleScroll.classList.add("disappear");
            closeRuleBtn.classList.add("disappear");
            youPickedPaper.classList.add("appear");
            userChoice="paper";
            then=1;
            console.log(userChoice);
            console.log("hello2");

            if(then===1){

                function generateRandNum(){
                    return Math.floor(Math.random()*3);
                }
                randNum=generateRandNum();
                if(randNum===0){
                    pcPickedStone.classList.add("appear");
                    computerChoice="stone";
                }else if(randNum==1){
                    pcPickedPaper.classList.add("appear");
                    computerChoice="paper";
                }else{
                    pcPickedScissors.classList.add("appear");
                    computerChoice="scissors";
                }
                console.log(userChoice);
                console.log(computerChoice);
                if(userChoice===computerChoice){
                    drawResult.classList.add("appear");
                }else if(userChoice==="stone" && computerChoice==="paper" || userChoice==="paper" && computerChoice==="scissors"
                    || userChoice==="scissors" && computerChoice==="stone"
                ){
                    lostResult.classList.add("appear");
                    computerScore.innerText+=1;
                    
                }else if(userChoice==="stone" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="stone"
                 || userChoice==="scissors" && computerChoice==="paper"
                ){
                    winResult.classList.add("appear");   
                    ruleBtn.classList.add("disappear");
                        nxtBtn.classList.add("appear");
                     secondRuleBtn.classList.add("appear");
                     userScore.innerText+=1;    
                     
                }
            }
        });

        scissors.addEventListener('click',()=>{
            homeScreen.classList.add("disappear");
            ruleScroll.classList.add("disappear");
            closeRuleBtn.classList.add("disappear");
            youPickedScissors.classList.add("appear");
            userChoice="scissors";
            then=1;
            console.log(userChoice);
            console.log("hello3");

            if(then===1){

                function generateRandNum(){
                    return Math.floor(Math.random()*3);
                }
                randNum=generateRandNum();
                if(randNum===0){
                    pcPickedStone.classList.add("appear");
                    computerChoice="stone";
                }else if(randNum==1){
                    pcPickedPaper.classList.add("appear");
                    computerChoice="paper";
                }else{
                    pcPickedScissors.classList.add("appear");
                    computerChoice="scissors";
                }
                console.log(userChoice);
                console.log(computerChoice);
                if(userChoice===computerChoice){
                    drawResult.classList.add("appear");
                }else if(userChoice==="stone" && computerChoice==="paper" || userChoice==="paper" && computerChoice==="scissors"
                    || userChoice==="scissors" && computerChoice==="stone"
                ){
                    lostResult.classList.add("appear");
                    computerScore.innerText+=1;
                    
                }else if(userChoice==="stone" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="stone"
                 || userChoice==="scissors" && computerChoice==="paper"
                ){
                    winResult.classList.add("appear");   
                    ruleBtn.classList.add("disappear");
                        nxtBtn.classList.add("appear");
                     secondRuleBtn.classList.add("appear");
                     userScore.innerText+=1;
                     
                }
            }
        });
        window.localStorage.setItem("userscore",user);
  window.localStorage.setItem("computerscore",computer);
       }
choose();
  

 

// function hello(){
//     homeScreen.classList.add("disappear");
//             ruleScroll.classList.add("disappear");
//             closeRuleBtn.classList.add("disappear");
//             youPickedScissors.classList.add("appear");
//             userChoice="scissors";
//             then=1;
//             console.log(userChoice);
//             console.log("hello3");

//             if(then===1){

//                 function generateRandNum(){
//                     return Math.floor(Math.random()*3);
//                 }
//                 randNum=generateRandNum();
//                 if(randNum===0){
//                     pcPickedStone.classList.add("appear");
//                     computerChoice="stone";
//                 }else if(randNum==1){
//                     pcPickedPaper.classList.add("appear");
//                     computerChoice="paper";
//                 }else{
//                     pcPickedScissors.classList.add("appear");
//                     computerChoice="scissors";
//                 }
//                 console.log(userChoice);
//                 console.log(computerChoice);
//                 if(userChoice===computerChoice){
//                     drawResult.classList.add("appear");
//                 }else if(userChoice==="stone" && computerChoice==="paper" || userChoice==="paper" && computerChoice==="scissors"
//                     || userChoice==="scissors" && computerChoice==="stone"
//                 ){
//                     lostResult.classList.add("appear");
//                     computerScore.innerText+=1;
//                 }else if(userChoice==="stone" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="stone"
//                  || userChoice==="scissors" && computerChoice==="paper"
//                 ){
//                     winResult.classList.add("appear");   
//                     ruleBtn.classList.add("disappear");
//                         nxtBtn.classList.add("appear");
//                      secondRuleBtn.classList.add("appear");
//                      userScore.innerText+=1;
//                 }
//             }
// }


// choices.forEach((choice)=>{
//     choice.addEventListener('click',()=>{

//             hello();
//         });
//        })




