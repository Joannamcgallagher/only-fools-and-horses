/*jshint esversion: 6 */
let userName = "";
let questionCounter = 0; //Counter for referecing the questions in the object array
let currentQuestion = 1; //Counter to display the number of the current question
let nextQ = [];
let sumbittedAnswer;
let currentScore = 0;
const questions = 
[
    {
        question: "What is the name of the local pub frequented by the Trotters? ",
        option1: "The Queen Vic",
        option2: "The Nags Head",
        option3: "The Rovers Return",
        option4: "Moes Tavern",
        correctAnswer: "option2"
    },
    {
        question: "What does Trigger call Rodney? ",
        option1: "Rodders",
        option2: "Mike",
        option3: "Dave",
        option4: "Denzel",
        correctAnswer: "option3"
    },
    {
        question: "What part of London do the Trotters live in? ",
        option1: "Clapham",
        option2: "Hackney",
        option3: "Chelsea",
        option4: "Peckham",
        correctAnswer: "option4"
    },
    {
        question: "Complete the phrase : This time next year, we will be.... ",
        option1: "Millionaires",
        option2: "Living the dream",
        option3: "Rich",
        option4: "Running the Nag's Head",
        correctAnswer: "option1"
    },
    {
        question: "What's the name of the govenor in the Nag's Head? ",
        option1: "Richard",
        option2: "Patrick",
        option3: "Dave",
        option4: "Michael",
        correctAnswer: "option4"
    },
    {
        question: "What's the block of flats called where the Trotters live? ",
        option1: "Trellick Tower",
        option2: "Peckhams Penthouses",
        option3: "Nelson Mandela House",
        option4: "Dunbeg Towers",
        correctAnswer: "option3"
    },
    {
        question: "What was Roy Slater's profession? ",
        option1: "Chef",
        option2: "Detective",
        option3: "Painter",
        option4: "Solicitor",
        correctAnswer: "option2"
    },
    {
        question: "What's the name of Del's and Raquel's son? ",
        option1: "Rodney",
        option2: "Derek",
        option3: "Damien",
        option4: "Dave",
        correctAnswer: "option3"
    },
    {
        question: "What actor played Grandad? ",
        option1: "Leonard Pearse",
        option2: "Buster Meryifield",
        option3: "David Jason",
        option4: "Nicholas Lyndhurst",
        correctAnswer: "option1"
    },
    {
        question: "What type of vehicle did the Trotter's use for Trotters Independent Traders? ",
        option1: "Plymouth Junkerolla",
        option2: "Reliant Robin",
        option3: "Volkswagen Transporter",
        option4: "Ford Escort",
        correctAnswer: "option2"
    }
]
let highScores = 
[
    {
        name : "Simon",
        score : 9
    },
    {
        name : "Mary",
        score : 8
    },
    {
        name : "Sandra",
        score : 6
    },
    {
        name : "Jimmy",
        score : 5
    },
    {
        name : "Fred",
        score : 5
    },
    {
        name : "Josie",
        score : 5
    },
    {
        name : "Maggie",
        score : 4
    },
    {
        name : "James",
        score : 4
    },
    {
        name : "Penelope",
        score : 3
    },
    {
        name : "Bob",
        score : 2
    }
]
//Below function is from the Love Maths Walkthrough project
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) 
    {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-now") {
                createUserDetailsPage();
            }
            if (this.getAttribute("data-type") === "mute-unmute")
            {
                toggleMute();
            }
            // if (this.getAttribute("data-type") === "lets-go") {
            //     userName = submitUserName();
            //     createQuestionPage();
            //     startQuiz();
            //}
            if (this.getAttribute("data-type") === "instructions")
            {
                displayInstructions();
            }
            if (this.getAttribute("data-type") === "high-scores")
            {
                document.getElementById("only-fools").style.display = "none";
                displayHighScores();
            }
        })
    }
    //Tutor support (Sean) provided the below to fix the form validation to ensure the user enters a username
    //select the form
    const formLetsGo = document.getElementById("form-lets-go");
    //listen for the form submission
    formLetsGo.addEventListener("submit", function(event)
    {
        //stop the page from reloading
        event.preventDefault();
        //get the form from the submit event, the target is the form
        const form = event.target;
        //get the inputs value with the name "username"
        const userName = form.username.value;

        console.log(userName);
        createQuestionPage();
        startQuiz();
    })

})

function toggleMute()
{
    //get all audio tags into an array so they can be looped through to be muted
    let audioAll = document.getElementsByTagName("audio");
    console.log(audioAll);
    //use the Array function
    let audioAllArray = Array.from(audioAll);
    console.log(audioAllArray);
    for (let audio in audioAll)
    {
        audio.muted = true;
    }

}

function displayInstructions()
{
    document.getElementById("intro-paragraph").textContent = 
    `There are ten questions to be answered and these will be have possible answers! Click on Play Now, you will be asked to enter your name and then click on Let's go!
    When you have read the questions, think carefully and then select the option you think is correct! You will be shown if this option is correct or not. If you have 
    selected the correct answer, your score will be increased by 1, if not, your score will stay the same!`;
}

function displayHighScores()
{
    document.getElementById("game-area-background").classList.add("high-scores-display");
    //align the game-area-background div so the font awesome and table centers on the page
    document.getElementById("game-area-background").style.textAlign = "center";

   document.getElementById("trophy").classList.remove("hide");
   
    document.getElementById("high-scores-table").classList.remove("hide");

    //use the high scores declared and add the names and scores to the table element
    // https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOMz
    let table = document.getElementById("high-scores-table");
    console.log(highScores);
    
    for(let i = 0; i < highScores.length; i++)
    {
        let newRow = table.insertRow(-1);
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        newCell1.textContent = highScores[i].name;
        newCell2.textContent = highScores[i].score;

    }


}
function createUserDetailsPage() 
{
    document.getElementById("question-container").style.height = "250px";
    //hide the p element
    document.getElementById("intro-paragraph").classList.add("hide");

    //change the main image and make set the height smaller
    document.getElementById("game-area-background").style.background = "url('assets/images/banner.png') no-repeat center center";
    document.getElementById("game-area-background").style.height = "275px"
    //remove the buttons
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
    let submittedtUserName = document.getElementById("user-input").value;
    // https://www.tutorialspoint.com/check-if-value-is-empty-in-javascript#:~:text=Use%20the%20condition%20with%20%E2%80%9C%E2%80%9D%20and,fill%20the%20text%20box%20value.
    if (submittedtUserName === "")
    {
        alert("Please enter a username. This should not be blank.")
    }
    else
    {
        return submittedtUserName;
    }
    
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
    document.getElementById("score").classList.remove("hide");
    document.getElementById("answer-feedback").classList.remove("hide");
}
function startQuiz() 
{
    displayQuestion();  
}

function displayQuestion() {
    document.getElementById("question-container").style.height = "350px"
    document.getElementById("question-header").textContent = `Q${questionCounter + 1} : ` + questions[questionCounter].question;
    document.getElementById("option1").textContent = questions[questionCounter].option1;
    document.getElementById("option2").textContent = questions[questionCounter].option2;
    document.getElementById("option3").textContent = questions[questionCounter].option3;
    document.getElementById("option4").textContent = questions[questionCounter].option4;

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
            //change the color of the p clicked to show that it was selcted
            document.getElementById(sumbittedAnswer).classList.add("correct-answer");  

            let isCorrect = checkAnswer();
            if (isCorrect)
            {
                incrementScore();
                let audioCorrect = document.getElementById("audio-feedback");
                audioCorrect.setAttribute("src", "../assets/audio/lovely-jubbly.mp3");
                audioCorrect.play();
                console.log(currentQuestion);
                //check to see if the user has answered all questions and if not, display the next question. If yes, end the game.
                if(currentQuestion < 2)
                {
                    setTimeout(displayNextQuestion, 5000);                    
                }
                else
                {
                    setTimeout(finishQuiz, 5000);
                    return;
                }
            }
            else
            {   
                console.log(currentQuestion);
                let audioIncorrect = document.getElementById("audio-feedback");
                audioIncorrect.setAttribute("src", "../assets/audio/plonker.mp3");
                audioIncorrect.play();
                if (currentQuestion < 2)
                {
                    setTimeout(displayNextQuestion, 5000);
                }
                else
                {
                    setTimeout(finishQuiz, 5000);
                    return;
                }
            }
        }
        
        );
    }
    document.getElementById("answer-feedback").textContent = "";
    
}

function checkAnswer()
{
    //get the correct answer stored from the question
    let correctAns = String(questions[questionCounter].correctAnswer);
    //compare the correct answer with the answer submitted
    if (correctAns === sumbittedAnswer)
    {
        document.getElementById("answer-feedback").textContent = "Lovely Jubbly!!";
        return true;
    }
    else
    {
        let showCorrectAnswer = questions[questionCounter].correctAnswer; //this will show the option 1, 2 etc.
        //Now need to take that showCorrectAnswer and get the actual answer
        document.getElementById("answer-feedback").textContent = `You Plonker! The correct answer is ${questions[questionCounter][showCorrectAnswer]}`;
        return false;
    }
}

function incrementScore()
{
    currentScore++;
    document.getElementById("current-score").textContent = currentScore;
}

function displayNextQuestion()
{
    //increment both question counters
    questionCounter++;
    currentQuestion++;
    //remove the previous selections and styles added to show button clicked
    let pSelected = document.getElementsByTagName("p");
    for(let p of pSelected)
    {
        p.classList.remove("correct-answer");
    }
    document.getElementById("question-header").textContent = `Q${currentQuestion} : ` + questions[questionCounter].question;
    document.getElementById("option1").textContent = questions[questionCounter].option1;
    document.getElementById("option2").textContent = questions[questionCounter].option2;
    document.getElementById("option3").textContent = questions[questionCounter].option3;
    document.getElementById("option4").textContent = questions[questionCounter].option4;
    //clear the feedback from the previous answer
    document.getElementById("answer-feedback").textContent = "";
}

function finishQuiz()
{
    console.log("Quiz finished");
    //hide current question elements
    document.getElementById("question-header").classList.add("hide");
    document.getElementById("option1").classList.add("hide");
    document.getElementById("option2").classList.add("hide");
    document.getElementById("option3").classList.add("hide");
    document.getElementById("option4").classList.add("hide");
    document.getElementById("score").classList.add("hide");
    document.getElementById("answer-feedback").classList.add("hide");

    //update to show the user their score
    document.getElementById("intro-paragraph").textContent =
    `Congratulations ${userName}!! You have scored ${currentScore}! Check out the high scores table to see if you made it! You can 
    always return to the homepage to play the game again!`;
    document.getElementById("intro-paragraph").classList.remove("hide");

    //show the buttons
    // let buttons = document.getElementsByTagName("button");
    // console.log(buttons);
    // buttons.shift();
    // for (let i = 0; i < buttons.length; i++) 
    // {
    //     buttons[i].classList.remove("hide");
    //     // buttons[i].classList.add("show");
    // }
    document.getElementById("play-now").classList.remove("hide");
    document.getElementById("play-now").style.marginTop = "20px";
    document.getElementById("instructions").classList.remove("hide");
    document.getElementById("high-scores").classList.remove("hide");
}