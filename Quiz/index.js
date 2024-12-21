const QuizeData = [
    
{
    question :"What does HTML stand for ?",
    options :[
        "Hyper Text Markup Language",
        "Hyper Transfer Markup Language",
        "Hyper Text Machine Language",
        "HyperLink and Text Markup Language"
    ],
    correct : 0,
},
{
    question :"What does CSS stand for ?",
    options :[
        "Cascade Sheet Style",
        "Cascading Style Sheets",
        "Cascading Sheet Style",
        "Cascade Style Sheet"
    ],
    correct : 1,
},
{
    question :"Which is JS function to select HTML element based on id ?",
    options :[
        "findElementById",
        "document.querySelector",
        "getElementById",
        "None"
    ],
    correct : 2,
},
{
    question :"Which CSS property used to control spacing between html element ?",
    options :[
        "Margine",
        "Padding",
        "spacing",
        "Border-spacing"
    ],
    correct : 1,
},
{
    question :"Which HTML attribute specifies a unique ID for an HTML element?",
    options :[
        "name",
        "class",
        "id",
        "value",
       
    ],
    correct : 2,
},
{
    question :"Which HTML element is used to define a hyperlink?",
    options :[
        "<a>",
        "<link>",
        " <hyperlink>",
        " <ref>",
    ],
    correct : 0,
},
]

const ansElement = document.querySelectorAll(".answer");
const [questionElm,option_2,option_3,option_4,option_5] = document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4");

const submitBtn = document.getElementById("submit");

let quiz = document.querySelector("#quiz")

let currentQuiz =0;
let score = 0;

// load Data into function


const loadQuiz = () =>{
    const {question , options} = QuizeData[currentQuiz];
    questionElm.innerText = `${currentQuiz + 1} . ${question}`;

    options.forEach((currentEle, index) => window[`option_${index +1 }`].innerText = currentEle) 
}
loadQuiz();


const getSelectedOption = () => {
    // let ans_index ;
    // ansElement.forEach((currentOpt, index)=>{

    //     if(currentOpt.checked){
    //         ans_index = index;
    //     }

           
    // });

    // return ans_index;

    let answerElement  = Array.from(ansElement)
    return answerElement.findIndex((curEle)=> curEle.checked )
}


// deselected fnction
const deselectedAns = () =>{
    ansElement.forEach((currEle) => currEle.checked = false)
}


// Get selected answer function on button click
submitBtn.addEventListener('click',() => {
    const selectedOptionIndex = getSelectedOption();


    if(selectedOptionIndex === QuizeData[currentQuiz].correct){
        score = score +1;
    }

    currentQuiz ++;
    if(currentQuiz < QuizeData.length){
        deselectedAns();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class = "result">
        <h2> Your Score :${score} / ${QuizeData.length}  Correct Answer  🏆</h2>
        <p> 🎉 Congratulation On Completing the Quiz! </p>
        <button class = "reload-button" onclick = "location.reload()" >Play Again 🔁 </button>
        </div>   `
    } 
})