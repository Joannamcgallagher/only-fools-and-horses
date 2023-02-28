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
