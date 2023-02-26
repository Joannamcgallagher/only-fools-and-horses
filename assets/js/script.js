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
            
        })
    }

})

function createUserDetailsPage()
{
    console.log("Button clicked");

    //clear the paragraph text so the label & input fields can be added
    document.getElementById("intro-paragraph").textContent = "";

    //change the main image and make set the height smaller
    document.getElementById("game-area-background").style.opacity = "0.7";

    //create the label and input fields & add them to the DOM tree
    let userArray = ["userLabel", "inputUser"];
    userArray.userLabel = document.createElement("label");
    //set attributes
    userArray.userLabel.setAttribute("for", "user-name-label");
    userArray.userLabel.setAttribute("id", "user-name-label");
    userArray.userLabel.style.opacity = "1";
    userArray.userLabel.textContent = "Enter your name here: ";

    userArray.inputUser = document.createElement("input");
    userArray.inputUser.setAttribute("id", "user-name");
    userArray.inputUser.setAttribute("type", "text");

    document.getElementById("game-area").appendChild(userArray.userLabel);
  

    //change the text on the button
    let submitButton = document.getElementById("play-now");
    submitButton.textContent = "Let's go!!";
}

function mySimpleFunction(event)
{
    console.log("you clicked play-now");
}