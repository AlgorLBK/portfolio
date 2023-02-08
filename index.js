var welcomePage = document.getElementById("welcomeBox");
var presentationPage = document.getElementById("presentation");
var scrollPosition = window.pageYOffset;
console.log(scrollPosition);
window.onscroll = function() {
    /*-----------------------------------Welcome-----------------------------------*/
    welcomePage.style.position = "fixed";
    var scrollWelcome = document.body.scrollTop || document.documentElement.scrollTop;
    var heightWelcome = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var opacityWelcome = 1 - (scrollWelcome / heightWelcome) * 4;
    welcomePage.style.opacity = opacityWelcome;
    if(opacityWelcome < 0) {document.getElementById("welcomeButton").style.fontSize = 1 + "%";
                            document.getElementById("welcomeText").style.fontSize = 0.001 + "%";}
    else {document.getElementById("welcomeButton").style.fontSize = 700 + "%";
    document.getElementById("welcomeText").style.fontSize = 150 + "%";}
    /*-----------------------------------Presentation-----------------------------------*/
    // if (presentationPage.offsetTop <= window.scrollY) {
    //     presentationPage.style.position = "fixed";
    //     presentationPage.style.top = 0;
    //     // var scrollPresentation = document.body.scrollTop || document.documentElement.scrollTop;
    //     // var heightPresentation = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     // var opacityPresentation = 1 - (scrollPresentation / heightPresentation) * 4;
    //     // presentationPage.style.opacity = opacityPresentation;
    // } else{
    //     presentationPage.style.position = "relative";
    // }
};
    /*-----------------------------------Knowledge-----------------------------------*/
    var elements = document.getElementsByClassName("try");
    let down = 0;
    let up = 0;
    if (down == up) {
        document.getElementById("moveup").setAttribute("disabled", "true");
    }
    function movedown() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transform += "translateY(-550px)";
            if(elements[0].style.transform != "") {
                document.getElementById("moveup").removeAttribute("disabled");
            }   
        }
        down++;
        if(down - up >= 12) {
            document.getElementById("movedown").setAttribute("disabled", "true");
        }        
      }
    function moveup() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transform += "translateY(550px)";
        }
        up++;
        if(down == up) {
            document.getElementById("moveup").setAttribute("disabled", "true");
        }
        if(down - up < 12) {
            document.getElementById("movedown").removeAttribute("disabled");
        }
      }
