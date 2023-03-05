let userName = "";
let questionCounter = 0;
const questions = [
    {
        question : "What is the name of the local pub frequented by the Trotters? ",
        option1 : "The Queen Vic",
        option2 : "The Nags Head",
        option3 : "The Rovers Return",
        option4 : "Moes Tavern",
        correctAnswer : 2
    }
]
//Below function is from the Love Maths Walkthrough project
document.addEventListener("DOMContentLoaded", function()
{
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
        button.addEventListener("click", function()
        {
            if(this.getAttribute("data-type") === "play-now")
            {
                createUserDetailsPage();
            }

            if(this.getAttribute("data-type") === "lets-go")
            {
                userName = submitUserName();
                createQuestionPage();
                startQuiz();
            }
            
        })
    }

})

function createUserDetailsPage()
{
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
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.add("hide");
    }
    console.log(buttons);
        
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

//create the display for the questions and multiple choice

function createQuestionPage()
{
    console.log(userName);
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
    document.getElementById("question-header").classList.add("show");
    document.getElementById("option1").classList.add("show");
    document.getElementById("option2").classList.add("show");
    document.getElementById("option3").classList.add("show");
    document.getElementById("option4").classList.add("show");
}

//once the question elements are available, display the questions
function startQuiz()
{
    let nextQ = nextQuestion();
    displayQuestion(nextQ);
}

//call the next question
function nextQuestion()
{
    //call a question from the questions array, increment the questions counter so the same question is not loaded twice
    console.log(questions[questionCounter]);
    questionCounter++;
    return questions[questionCounter];
}

//get the parameters from the question and display them
function displayQuestion(loadedQuestion)
{
    document.getElementById("question-header").textContent = loadedQuestion.question;
    document.getElementById("option1").textContent = loadedQuestion.option1;
    document.getElementById("option2").textContent = loadedQuestion.option2;
    document.getElementById("option3").textContent = loadedQuestion.option3;
    document.getElementById("option4").textContent = loadedQuestion.option4;

}