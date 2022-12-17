/* ========================== typing animation ====================*/
var typed = new Typed(".typing",{
    strings:["Web Developer", "Web Developer", "Web Designer","Graphic Designer", "Music Producer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ===================== aside colors ===================== */
const asideColors = document.querySelectorAll(".active");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("i"))
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}