let userName = "";
let questionCounter = 0;
let currentQuestion = 0;
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
        option4: "Nicholas Lyndhursy",
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

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-now") {
                createUserDetailsPage();
            }
            if (this.getAttribute("data-type") === "mute-unmute")
            {
                toggleMute();
            }
            if (this.getAttribute("data-type") === "lets-go") {
                userName = submitUserName();
                console.log(userName);
                createQuestionPage();
                startQuiz();
            }
            if (this.getAttribute("data-type") === "instructions")
            {
                displayInstructions();
            }
            if (this.getAttribute("data-type") === "high-scores")
            {
                console.log("high scores clicked");
                document.getElementById("only-fools").style.display = "none";
                displayHighScores();
            }
        })
    }

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
    let table = document.getElementById("high-scores-table");
    console.log(highScores);
    // let newRow = table.insertRow(-1);
    // let newCell1 = newRow.insertCell(0);
    // let newCell2 = newRow.insertCell(1);
    // let cell1Data = newRow.insertCell(0);
    // let cell2Data = newRow.insertCell(1);

    // cell1Data.textContent = highScores[0].name;
    // cell2Data.textContent = highScores[0].score;

    // let newRow1 = table.insertRow(-1);
    // let newCell3 = newRow1.insertCell(0);
    // let newCell4 = newRow1.insertCell(1);
    // let cell3Data = newRow1.insertCell(0);
    // let cell4Data = newRow1.insertCell(1);

    // cell3Data.textContent = highScores[1].name;
    // cell4Data.textContent = highScores[2].score;
    
    for(let i = 0; i < highScores.length; i++)
    {
        let newRow = table.insertRow(-1);
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let cell1Data = newRow.insertCell(0);
        let cell2Data = newRow.insertCell(1);
        //loop through each of the high scores
        cell1Data.textContent = highScores[i].name;
        cell2Data.textContent = highScores[i].score;

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
            //document.getElementById(sumbittedAnswer).classList.remove(".correct-answer"); 
            document.getElementById(sumbittedAnswer).classList.add("correct-answer");  
            let isCorrect = checkAnswer();
            if (isCorrect)
            {
                incrementScore();
                let audioCorrect = document.getElementById("audio-feedback");
                audioCorrect.setAttribute("src", "../assets/audio/lovely-jubbly.mp3");
                audioCorrect.play();
                setTimeout(displayNextQuestion, 5000);
            }
            else
            {   
                let audioIncorrect = document.getElementById("audio-feedback");
                audioIncorrect.setAttribute("src", "../assets/audio/plonker.mp3");
                audioIncorrect.play();
                setTimeout(displayNextQuestion, 5000);
            }
        }
        
        );
    }
    document.getElementById("answer-feedback").textContent = "";
    
}

function checkAnswer()
{
    //get the correct answer stored from the question
    let correctAns = String(questions[currentQuestion].correctAnswer);
    console.log(correctAns);
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
    document.getElementById("question-header").textContent = `Q${questionCounter + 1} : ` + questions[questionCounter].question;
    document.getElementById("option1").textContent = questions[questionCounter].option1;
    document.getElementById("option2").textContent = questions[questionCounter].option2;
    document.getElementById("option3").textContent = questions[questionCounter].option3;
    document.getElementById("option4").textContent = questions[questionCounter].option4;
}