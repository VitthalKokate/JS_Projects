let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice") // All three div are in choice class . 
const msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#uc")
let compScorePara = document.querySelector("#cs")

// Computer  logic
// Computer Selected random any .. 
const genereateCompChoice = () =>{
    const optios=["rock","paper","seazer"]
    // Math.floor(Math.random() *10)     -> Genereate random  whole number between 0-9
    const ranIndx =Math.floor(Math.random() *3)

    return optios[ranIndx];
}

const drawGame =()=>{
    // console.log("Draw Game")
    msg.innerText="Game Was Draw.Play again."
    msg.style.backgroundColor = "#081b31"
}

const showWiner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        console.log("user ->",userScore)
        userScorePara.innerText = userScore
        // console.log("You Win")
        msg.innerText = `You Wine!  Yours ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        console.log("comp ->",compScore)
        compScorePara.innerText =compScore 
        // console.log("You Lose")
        msg.innerText = `You Lose! Computers ${compChoice} beats ${userChoice} `
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice =",userChoice)

    const compChoice= genereateCompChoice();
    console.log("Comp Choice =",compChoice)

    if(userChoice === compChoice){
        // comp and user select same
        //Draw
        drawGame();

    }else{
        let userWin =true;
        if(userChoice === "rock"){
            // comp select seazer , paper
           userWin: compChoice === "paper" ? false:true 
        }else if(userChoice === "paper"){
            // com select seazer or rock
            userWin: compChoice === "seazer" ? false :true
        }else{
            // com select rock, paper
          userWin = compChoice === "rock" ? false :true 
        }
        showWiner(userWin,userChoice,compChoice);
    }
}


//  User Choice Logic
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{  //  add event
        const userChoice= choice.getAttribute("id")
        // console.log("choice was clicked",userChoice)
        playGame(userChoice);
    })
})

