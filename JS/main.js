function green(val)
{
    document.getElementById("displayGreen").value+=val
}
//function for evaluation
function solveGreen()
{
    let x = document.getElementById("displayGreen").value
    let y = eval(x)
    document.getElementById("displayGreen").value = y
}
//function for clearing the display
function clrGreen()
{
    document.getElementById("displayGreen").value = ""
}




function blue(val)
{
    document.getElementById("displayBlue").value+=val
}
//function for evaluation
function solveBlue()
{
    let x = document.getElementById("displayBlue").value
    let y = eval(x)
    document.getElementById("displayBlue").value = y
}
//function for clearing the display
function clrBlue()
{
    document.getElementById("displayBlue").value = ""
}



function pink(val)
{
    document.getElementById("displayPink").value+=val
}
//function for evaluation
function solvePink()
{
    let x = document.getElementById("displayPink").value
    let y = eval(x)
    document.getElementById("displayPink").value = y
}
//function for clearing the display
function clrPink()
{
    document.getElementById("displayPink").value = ""
}
