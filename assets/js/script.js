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
    document.getElementById("game-area-background").style.background = "url('assets/images/banner.png') no-repeat center center";
    document.getElementById("game-area-background").style.height = "275px"
    //remove the buttons
    // let button = document.getElementById("play-now");
    // button.remove();

    let buttons = document.getElementsByTagName("button");
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].remove();
    }
    console.log(buttons); //instructions button still showing when button clicked
    let instrButton = document.getElementById("instructions");
    instrButton.remove();
    
    //create a div to hold the label & input elements and add to body
    let userDetails = document.createElement("div");
    userDetails.setAttribute("id", "quiz-container");
    userDetails.style.height = "275px"
    userDetails.style.width = "60%";
    userDetails.style.boxShadow = "20px yellow";
    userDetails.style.border = "4px solid darkgoldenrod";
    userDetails.style.borderRadius = "20px";
    userDetails.style.marginLeft = "auto";
    userDetails.style.marginRight = "auto";
    document.body.appendChild(userDetails);

    //create a form and add label & input 
    let userForm = document.createElement("form");
    userForm.setAttribute("id", "user-input");
    userForm.style.textAlign = "center";
    document.getElementById("quiz-container").appendChild(userForm);
    userForm.style.display = "grid";

    let label = document.createElement("label");
    label.setAttribute("for", "user-name");
    label.innerHTML = "Enter your name here : ";
    label.style.marginTop = "50px";
    userForm.appendChild(label);

    let input = document.createElement("input");
    input.setAttribute("name", "user-name");
    input.setAttribute("id", "user-name");
    input.setAttribute("type", "text");
    userForm.appendChild(input);

    //create a button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "lets-go");
    submitButton.textContent = "Let's Go!!";
    userForm.appendChild(submitButton);    
    
    
}
