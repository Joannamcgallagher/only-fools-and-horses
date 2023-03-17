let userName = "";
let questionCounter = 0;
let currentQuestion = 0;
let nextQ = [];
let sumbittedAnswer;
let userSubmitted = false;
const questions = [{
    question: "What is the name of the local pub frequented by the Trotters? ",
    option1: "The Queen Vic",
    option2: "The Nags Head",
    option3: "The Rovers Return",
    option4: "Moes Tavern",
    correctAnswer: "option2"
}]
//Below function is from the Love Maths Walkthrough project
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-now") {
                createUserDetailsPage();
            }

            if (this.getAttribute("data-type") === "lets-go") {
                userName = submitUserName();
                console.log(userName);
                createQuestionPage();
                startQuiz();
            }
        })
    }

})
function createUserDetailsPage() {
    console.log("Button clicked");

    //hide the p element
    document.getElementById("intro-paragraph").classList.add("hide");

    //change the main image and make set the height smaller
    document.getElementById("game-area-background").style.background = "url('assets/images/banner.png') no-repeat center center";
    document.getElementById("game-area-background").style.height = "275px"
    //remove the buttons
    // let button = document.getElementById("play-now");
    // button.remove();

    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("hide");
    }

    // call the update div to re-style the question container
    document.getElementById("user-label").classList.remove("hide");
    document.getElementById("user-input").classList.remove("hide");
    document.getElementById("btn-lets-go").classList.remove("hide");
    document.getElementById("question-container").classList.add("update-question-div");
    document.getElementById("user-label").classList.add("user-label-style");
    document.getElementById("user-input").classList.add("user-input");
    document.getElementById("btn-lets-go").classList.add("button-additional");
}
function submitUserName()
{
    return document.getElementById("user-input").value;
}
function createQuestionPage() {
    //hide current elements
    document.getElementById("user-label").classList.remove("show");
    document.getElementById("user-input").classList.remove("show");
    document.getElementById("btn-lets-go").classList.remove("show");
    document.getElementById("user-label").classList.add("hide");
    document.getElementById("user-input").classList.add("hide");
    document.getElementById("btn-lets-go").classList.add("hide");

    //show question elements
    document.getElementById("question-header").classList.remove("hide");
    document.getElementById("option1").classList.remove("hide");
    document.getElementById("option2").classList.remove("hide");
    document.getElementById("option3").classList.remove("hide");
    document.getElementById("option4").classList.remove("hide");

}
function startQuiz() 
{
    displayQuestion();
    //check if the userSubmitted is true and then check the answer.
    // if(userSubmitted = true)
    // {
    //     checkAnswer();
    // }
    
}

function displayQuestion() {
    document.getElementById("question-container").style.height = "300px"
    document.getElementById("question-header").textContent = `Q${questionCounter + 1} : ` + questions[questionCounter].question;
    document.getElementById("option1").textContent = questions[questionCounter].option1;
    document.getElementById("option2").textContent = questions[questionCounter].option2;
    document.getElementById("option3").textContent = questions[questionCounter].option3;
    document.getElementById("option4").textContent = questions[questionCounter].option4;
    questionCounter++;
    console.log(questionCounter);
    

    //add event listeners to the p elements
    let pOptions = document.getElementsByTagName("p");
    let pOptionsArray = Array.from(pOptions);
    //remove the first p elemnt from the array - the intro paragraph
    pOptionsArray.shift();
    for (let pOption of pOptionsArray) 
    {
        pOption.addEventListener("click", function()
        {
            sumbittedAnswer = this.getAttribute("data-type");
            //set the userSubmitted to true so we know the user has selected an option
            userSubmitted = true;            
            checkAnswer();
        }
        );
    }
    
}

function checkAnswer()
{
    //get the correct answer stored from the question
    let correctAns = String(questions[currentQuestion].correctAnswer);
    console.log(correctAns);
    //compare the correct answer with the answer submitted
    if (correctAns === sumbittedAnswer)
    {
        alert("Correct!");
    }
    else
    {
        alert("Tough luck!");
    }
}