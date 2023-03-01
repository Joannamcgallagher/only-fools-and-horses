//create global variables for username, score & questions.
const userName = "";
const currentScore = 0;
const questions = 
[
    {
    question : "What's the name of the local pub where the Trotter family frequent?",
    answers :
    {
        option1 : "The Nag's Head",
        option2 : "The Queen Vic",
        option3 : "The Rovers Return",
        option4 : "Moe's Tavern"
    },
    correctAnswer : "option1"

    },
    {
        question : "What did Trigger call Rodney?",
        answers :
        {
            option1 : "Rodney",
            option2 : "Rod",
            option3 : "Dave",
            option4 : "Denzel"
        },
        correctAnswer : "option3"
    }
];


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
                //retrieve the username and store it in the global variable
                userName = getUserName();
                console.log(userName);
                hideUserInput();
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
    document.getElementById("question=container").classList.add("update-question-div");
    document.getElementById("user-label").classList.add("user-label-style");
    document.getElementById("user-input").classList.add("user-input");
    document.getElementById("btn-lets-go").classList.add("button-additional");
}
/**
 * Retrieve the username from the input field and return the value of same
 */
function getUserName()
{
    let name = document.getElementById("user-input");
    return(name).value;
}
/**
 * Create function to hide the elements for the username so the questions can be loaded in
 */
function hideUserInput()
{
    document.getElementById("user-label").classList.remove("show");
    document.getElementById("user-input").classList.remove("show");
    document.getElementById("btn-lets-go").classList.remove("show");
    document.getElementById("user-label").classList.add("hide");
    document.getElementById("user-input").classList.add("hide");
    document.getElementById("btn-lets-go").classList.add("hide");
    console.log("elements hidden");
}



