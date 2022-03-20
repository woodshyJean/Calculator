/* calculator functions */

function printNum(){
    var n1 = document.getElementsByClassName("ns")[6];
    n1.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[6].innerText
    })
    var n2 = document.getElementsByClassName("ns")[7];
    n2.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[7].innerText
    })
    var n3 = document.getElementsByClassName("ns")[8];
    n3.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[8].innerText
    })
    var n4 = document.getElementsByClassName("ns")[3];
    n4.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[3].innerText
    })
    var n5 = document.getElementsByClassName("ns")[4];
    n5.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[4].innerText
    })
    var n6 = document.getElementsByClassName("ns")[5];
    n6.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[5].innerText
    })
    var n7 = document.getElementsByClassName("ns")[0];
    n7.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[0].innerText
    })
    var n8 = document.getElementsByClassName("ns")[1];
    n8.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[1].innerText
    })
    var n9 = document.getElementsByClassName("ns")[2];
    n9.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[2].innerText
    })
    var n0 = document.getElementsByClassName("ns")[9];
    n0.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("ns")[9].innerText
    })
    var addBtn = document.getElementsByClassName("op")[0];
    addBtn.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("op")[0].innerText
    })
    var subBtn = document.getElementsByClassName("op")[1];
    subBtn.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("op")[1].innerText
    })
    var mulBtn = document.getElementsByClassName("op")[3];
    mulBtn.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += '*' /*document.getElementsByClassName("op")[3].innerText*/
    })
    var divBtn = document.getElementsByClassName("op")[2];
    divBtn.addEventListener("click",function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText += document.getElementsByClassName("op")[2].innerText
    })
    var dotBtn = document.querySelectorAll(".numbers")[12];
        dotBtn.addEventListener("click",function(){
            document.querySelectorAll(".calcDisplay h1")[0].innerText += document.querySelectorAll(".numbers")[12].innerText
        })

}

printNum();

function getDisplayText(){
   var num1 = document.querySelectorAll(".calcDisplay h1")[0].innerText;
   return num1;
}

function calcBrain(){
    return eval(getDisplayText());
}

function equalBtn (){
    document.getElementsByClassName("equal")[0].addEventListener("click", getDisplayText);
    document.getElementsByClassName("reset")[1].addEventListener("click", function(){
        document.querySelectorAll(".calcDisplay h1")[0].innerText = "";
    })
    document.getElementsByClassName("reset")[0].addEventListener("click", function(){
        var del = getDisplayText().slice(0,-1);
        document.querySelectorAll(".calcDisplay h1")[0].innerText = del;
    })
    document.getElementsByClassName("equal")[0].addEventListener("click", function(){
        calcBrain();
        document.querySelectorAll(".calcDisplay h1")[0].innerText = calcBrain();
    });
}

equalBtn();



/* Theme Section */

function themeButtons(){
    var button1 = document.querySelectorAll(".calcThemeNumbers .headText")[0];
    button1.addEventListener("click", theme1);
    
    var button2 = document.querySelectorAll(".calcThemeNumbers .headText")[1];
    button2.addEventListener("click", theme2);

    var button3 = document.querySelectorAll(".calcThemeNumbers .headText")[2];
    button3.addEventListener("click", theme3);
}

function theme1(){
    document.querySelector(".background").style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector(".calcDisplay").style.backgroundColor = "hsl(224, 36%, 15%)";
    document.querySelector(".calcDisplay").style.color = "white";
    document.querySelector(".calcButtons").style.backgroundColor = "hsl(223, 31%, 20%)";
    for (i=0 ; i<16; i++){
        document.querySelectorAll(".numbers")[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        document.querySelectorAll(".numbers")[i].style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
    }

    for (i=0 ; i<2; i++){
        document.querySelectorAll(".reset")[i].style.backgroundColor = "hsl(225, 21%, 49%)";
        document.querySelectorAll(".reset")[i].style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
    }

    document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector(".equal").style.boxShadow = "0px 5px hsl(6, 70%, 34%)";

    for (i=0 ; i<15; i++){
        document.querySelectorAll(".textcol")[i].style.color = "black";
    }

    for (i = 0 ; i < 5 ;i++){
        document.querySelectorAll(".headText")[i].style.color = "white";
    }

    document.getElementsByClassName("t1")[0].style.visibility = "visible";
    document.getElementsByClassName("t1")[0].style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementsByClassName("t2")[0].style.visibility = "hidden";
    document.getElementsByClassName("t3")[0].style.visibility = "hidden";
    document.getElementsByClassName("calcThemeColors")[0].style.backgroundColor = "hsl(223, 31%, 20%)";

}

function theme2(){
    document.querySelector(".background").style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector(".calcDisplay").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.querySelector(".calcDisplay").style.color = "hsl(60, 10%, 19%)";
    document.querySelector(".calcButtons").style.backgroundColor = "hsl(0, 5%, 81%)";
    for (i=0 ; i<16; i++){
        document.querySelectorAll(".numbers")[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        document.querySelectorAll(".numbers")[i].style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
    }

    for (i=0 ; i<2; i++){
        document.querySelectorAll(".reset")[i].style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelectorAll(".reset")[i].style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
    }

    document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.querySelector(".equal").style.boxShadow = "0px 5px hsl(25, 99%, 27%)";

    for (i=0 ; i<15; i++){
        document.querySelectorAll(".textcol")[i].style.color = "hsl(60, 10%, 19%)";
    }

    for (i = 0 ; i < 5 ;i++){
        document.querySelectorAll(".headText")[i].style.color = "black";
    }

    document.getElementsByClassName("t1")[0].style.visibility = "hidden";
    document.getElementsByClassName("t2")[0].style.visibility = "visible";
    document.getElementsByClassName("t2")[0].style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementsByClassName("t3")[0].style.visibility = "hidden";
    document.getElementsByClassName("calcThemeColors")[0].style.backgroundColor = "hsl(0, 5%, 81%)";

}


function theme3(){
    document.querySelector(".background").style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector(".calcDisplay").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".calcDisplay").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".calcButtons").style.backgroundColor = "hsl(268, 71%, 12%)";
    for (i=0 ; i<16; i++){
        document.querySelectorAll(".numbers")[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        document.querySelectorAll(".numbers")[i].style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
    }

    for (i=0 ; i<2; i++){
        document.querySelectorAll(".reset")[i].style.backgroundColor = "hsl(281, 89%, 26%)";
        document.querySelectorAll(".reset")[i].style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
    }

    document.querySelector(".equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.querySelector(".equal").style.boxShadow = "0px 5px hsl(177, 92%, 70%)";
    document.querySelector(".equal h3").style.color = "hsl(0, 0, 100%)";

    for (i=0 ; i<15; i++){
        document.querySelectorAll(".textcol")[i].style.color = "hsl(52, 100%, 62%)";
    }

    for (i = 0 ; i < 5 ;i++){
        document.querySelectorAll(".headText")[i].style.color = "hsl(52, 100%, 62%)";
    }

    document.getElementsByClassName("t1")[0].style.visibility = "hidden";
    document.getElementsByClassName("t2")[0].style.visibility = "hidden";
    document.getElementsByClassName("t3")[0].style.visibility = "visible";
    document.getElementsByClassName("t3")[0].style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementsByClassName("calcThemeColors")[0].style.backgroundColor = "hsl(268, 71%, 12%)";

}

themeButtons();

