/*jshint esversion: 6 */
let userName = "";
let questionCounter = 0; //Counter for referecing the questions in the object array
let currentQuestion = 1; //Counter to display the number of the current question
let nextQ = [];
let sumbittedAnswer;
let currentScore = 0;
let audioOn = true;
const questions = [{
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
let highScores = [{
        name: "Simon",
        score: 9
    },
    {
        name: "Mary",
        score: 8
    },
    {
        name: "Sandra",
        score: 6
    },
    {
        name: "Jimmy",
        score: 5
    },
    {
        name: "Fred",
        score: 5
    },
    {
        name: "Josie",
        score: 5
    },
    {
        name: "Maggie",
        score: 4
    },
    {
        name: "James",
        score: 4
    },
    {
        name: "Penelope",
        score: 3
    },
    {
        name: "Bob",
        score: 2
    }
]
//Below function is from the Love Maths Walkthrough project
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        //https://www.w3schools.com/jsref/prop_style_cursor.asp
        button.style.cursor = "pointer";
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-now") {
                createUserDetailsPage();
            }
            if (this.getAttribute("data-type") === "mute-unmute") {
                toggleMute();
            }
            if (this.getAttribute("data-type") === "instructions") {
                displayInstructions();
            }
            if (this.getAttribute("data-type") === "high-scores") {
                document.getElementById("only-fools").style.display = "none";
                displayHighScores();
            }
        })
    }
    //Tutor support (Sean) provided the below to fix the form validation to ensure the user enters a username
    //select the form
    const formLetsGo = document.getElementById("form-lets-go");
    //listen for the form submission
    formLetsGo.addEventListener("submit", function (event) {
        //stop the page from reloading
        event.preventDefault();
        //get the form from the submit event, the target is the form
        const form = event.target;
        //get the inputs value with the name "username"
        userName = form.username.value;
        console.log(userName);
        createQuestionPage();
        startQuiz();
    })

})
/**
 * Function to toggle the sound depending on whether the user has clicked on the button displayed.
 * This also updates the icon from font awesome
 */
function toggleMute() {
    if (audioOn) {
        document.getElementById("only-fools").muted = true;
        document.getElementById("audio-feedback").muted = true;
        document.getElementById("volume").classList.remove("fas", "fa-music");
        document.getElementById("volume").classList.add("fas", "fa-volume-mute");
        audioOn = false;
    } else {
        document.getElementById("only-fools").muted = false;
        document.getElementById("audio-feedback").muted = false;
        document.getElementById("volume").classList.remove("fas", "fa-volume-mute");
        document.getElementById("volume").classList.add("fas", "fa-music");
        audioOn = true;
    }
}
/**
 * Function to display the instructions for the user. It updates the p element on index.html
 */
function displayInstructions() {
    document.getElementById("intro-paragraph").textContent =
        `There are ten questions to be answered and these will be have 4 possible answers! Click on Play Now, you will be asked to enter your name and then click on Let's go!
    Read the questions, think carefully and then select an option! The game will let you know if you are right or wrong!`;
}
/**
 * Function to display the highscores provided in the array of objects. It also determines if the user has already played the game. If so, the layout of the page
 * will slightly differ so it needs to be udpated for the table to display correctly.
 */
function displayHighScores() {
    //check to see if the user has already completed the quiz as the page style will be different if so
    if (userName === "") {
        document.getElementById("game-area-background").classList.add("high-scores-display");
        //align the game-area-background div so the font awesome and table centers on the page
        document.getElementById("game-area-background").style.textAlign = "center";
        document.getElementById("intro-paragraph").classList.add("hide");
        document.getElementById("trophy").classList.remove("hide");
        document.getElementById("high-scores-table").classList.remove("hide");
        //use the high scores declared and add the names and scores to the table element
        // https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOMz
        let table = document.getElementById("high-scores-table");
        console.log(highScores);
        for (let i = 0; i < highScores.length; i++) {
            let newRow = table.insertRow(-1);
            let newCell1 = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            newCell1.textContent = highScores[i].name;
            newCell2.textContent = highScores[i].score;
        }
    }
    //if the user has already played the game
    else {
        document.getElementById("question-container").classList.add("hide");
        document.getElementById("game-area-background").style.background = "none";
        document.getElementById("game-area-background").classList.add("high-scores-display");
        document.getElementById("trophy").classList.remove("hide");
        document.getElementById("game-area-background").style.textAlign = "center";
        document.getElementById("high-scores-table").classList.remove("hide");
        document.getElementById("game-area-background").style.height = "550px";
        let table = document.getElementById("high-scores-table");
        console.log(highScores);
        for (let i = 0; i < highScores.length; i++) {
            let newRow = table.insertRow(-1);
            let newCell1 = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            newCell1.textContent = highScores[i].name;
            newCell2.textContent = highScores[i].score;

        }
    }
}
/**
 * Function called to style the page and show/hide elements which the uer will be shown in order for them to enter their username
 */
function createUserDetailsPage() {
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
    document.getElementById("button-mute").classList.remove("hide");
    document.getElementById("question-container").classList.add("update-question-div");
    document.getElementById("user-label").classList.add("user-label-style");
    document.getElementById("user-input").classList.add("user-input");
    //https://www.geeksforgeeks.org/how-to-pre-select-an-input-element-when-the-page-loads-in-html5/
    document.getElementById("user-input").focus();
    document.getElementById("btn-lets-go").classList.add("button-additional");
}
/**
 * Function to retrieve the username the suer has entered and to store it in the global variable above so it can be accessed later on
 */
function submitUserName() {
    let submittedtUserName = document.getElementById("user-input").value;
    // https://www.tutorialspoint.com/check-if-value-is-empty-in-javascript#:~:text=Use%20the%20condition%20with%20%E2%80%9C%E2%80%9D%20and,fill%20the%20text%20box%20value.
    if (submittedtUserName === "") {
        alert("Please enter a username. This should not be blank.")
    } else {
        return submittedtUserName;
    }
}
/**
 * Function to style the quiz including containers, headers, options and buttons etc. Mutliple elements have classes that are added or removed
 */
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
/**
 * Function to start the quiz by displaying the question.
 */
function startQuiz() {
    displayQuestion();
}
/**
 * Function to style the question part of the quiz. There are event listeners added to the p elements here so when a usesr clicks on an option/answer,
 * the function will apply the relevant audio, call the check the answer function and display the next question when a timeout
 * of 5 seconds has passed. The answer-feedback element is also cleared on completion of the function so it does not show when the next question is loadedd.
 */
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
    //remove the first p element from the array - the intro paragraph
    pOptionsArray.shift();
    for (let pOption of pOptionsArray) {
        pOption.style.cursor = "pointer";
        pOption.addEventListener("click", function () {
                sumbittedAnswer = this.getAttribute("data-type");
                //change the color of the p clicked to show that it was selcted
                let isCorrect = checkAnswer();
                if (isCorrect) {
                    document.getElementById(sumbittedAnswer).classList.add("correct-answer");
                    incrementScore();
                    let audioCorrect = document.getElementById("audio-feedback");
                    audioCorrect.setAttribute("src", "../assets/audio/lovely-jubbly.mp3");
                    audioCorrect.play();
                    console.log(currentQuestion);
                    //check to see if the user has answered all questions and if not, display the next question. If yes, end the game.
                    if (currentQuestion < 2) {
                        setTimeout(displayNextQuestion, 5000);
                    } else {
                        setTimeout(finishQuiz, 5000);
                        return;
                    }
                } else {
                    document.getElementById(sumbittedAnswer).classList.add("incorrect-answer");
                    console.log(currentQuestion);
                    let audioIncorrect = document.getElementById("audio-feedback");
                    audioIncorrect.setAttribute("src", "../assets/audio/plonker.mp3");
                    audioIncorrect.play();
                    if (currentQuestion < 2) {
                        setTimeout(displayNextQuestion, 5000);
                    } else {
                        setTimeout(finishQuiz, 5000);
                        return;
                    }
                }
            }

        );
    }
    document.getElementById("answer-feedback").textContent = "";

}
/**
 * Function to check whether the option that the user selected is correct or incorrect and returns true or false.
 * Function also displays the correct answer if the user has selected an incorrect answer.
 */
function checkAnswer() {
    //get the correct answer stored from the question
    let correctAns = String(questions[questionCounter].correctAnswer);
    //compare the correct answer with the answer submitted
    if (correctAns === sumbittedAnswer) {
        document.getElementById("answer-feedback").textContent = "Lovely Jubbly!!";
        return true;
    } else {
        let showCorrectAnswer = questions[questionCounter].correctAnswer; //this will show the option 1, 2 etc.
        //Now need to take that showCorrectAnswer and get the actual answer
        document.getElementById("answer-feedback").textContent = `You Plonker! The correct answer is ${questions[questionCounter][showCorrectAnswer]}`;
        return false;
    }
}
/**
 * Function to increment the score if the user has answered correctly.
 */
function incrementScore() {
    currentScore++;
    document.getElementById("current-score").textContent = currentScore;
}
/**
 * Function to display the next question in the array. Before doing that, it will revert the selected options styles to the default style set in style.css
 */
function displayNextQuestion() {
    //increment both question counters
    questionCounter++;
    currentQuestion++;
    //remove the previous selections and styles added to show button clicked
    let pSelected = document.getElementsByTagName("p");
    for (let p of pSelected) {
        p.classList.remove("correct-answer");
        p.classList.remove("incorrect-answer");
    }
    document.getElementById("question-header").textContent = `Q${currentQuestion} : ` + questions[questionCounter].question;
    document.getElementById("option1").textContent = questions[questionCounter].option1;
    document.getElementById("option2").textContent = questions[questionCounter].option2;
    document.getElementById("option3").textContent = questions[questionCounter].option3;
    document.getElementById("option4").textContent = questions[questionCounter].option4;
    //clear the feedback from the previous answer
    document.getElementById("answer-feedback").textContent = "";
}
/**
 * Function to finish the quiz once the user has answered all 10 questions. Hides the current elements displayed and updates the p element to show the 
 * users name and score. If the user has scored greater than 0, the name and score will be added to the highscores table that the user can click on and 
 * view
 */
function finishQuiz() {
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

    document.getElementById("play-now").classList.remove("hide");
    document.getElementById("play-now").style.marginTop = "20px";
    document.getElementById("instructions").classList.remove("hide");
    document.getElementById("high-scores").classList.remove("hide");
    console.log(userName);
    //add the username and score to the highscores table if the value is greater than 0
    if (currentScore > 0) {
        let newHighscore = {
            "name": userName,
            "score": currentScore
        };
        highScores.push(newHighscore);
        //sort the array by score high to low
    }
}