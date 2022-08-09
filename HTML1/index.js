var random1;
let play11=0;
let play12=0;
let play13=0;
let play14=0;
let play15=0;
let play21=0;
let play22=0;
let play23=0;
let play24=0;
let play25=0;

let btn2 = document.querySelector("#btn-2");
let btn1 = document.querySelector("#btn-1");

btn1.disabled= false;
btn2.disabled= true;

document.getElementById("btn-1").addEventListener("click",function(){
    
    btn1.disabled= true;
    btn2.disabled= false;
    random1= 1+Math.floor(Math.random()*5);
    document.getElementById("play1").innerHTML=random1;
    //document.getElementById("boxa"+random1).style.backgroundImage="url('img1.png')";
    if (random1===1) {  
        play11+=1;
        if (play11===1) {
            document.getElementById("boxa1").style.backgroundImage="url('img1.png')";
        }
        if (play11===2) {
            document.getElementById("boxa1").style.backgroundImage="url('img2.png')";
        }
        if (play11===3) {
            document.getElementById("boxa1").style.backgroundImage="url('img3.png')";
        }
        if (play11===4) {
            document.getElementById("boxa1").style.backgroundImage="url('img4.png')";
        }
        if (play11===5) {
            document.getElementById("boxa1").style.backgroundImage="url('img5.png')";
        }
        if (play11===6) {
            document.getElementById("boxa1").style.backgroundImage="url('img6.png')";
        }
        if (play11>=7 && play11<=9) {
            document.getElementById("boxa1").style.backgroundImage="url('img17.png')";
            let shoot11 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxb"+shoot11).style.backgroundImage="url('img1.png')";
            if (shoot11==="1") {
                play21=1;
            }
            if (shoot11==="2") {
                play22=1;
            }
            if (shoot11==="3") {
                play23=1;
            }
            if (shoot11==="4") {
                play24=1;
            }
            if (shoot11==="5") {
                play25=1;
            }
            
        }
    }
    if (random1===2) {  
        play12+=1;
        if (play12===1) {
            document.getElementById("boxa2").style.backgroundImage="url('img1.png')";
        }
        if (play12===2) {
            document.getElementById("boxa2").style.backgroundImage="url('img2.png')";
        }
        if (play12===3) {
            document.getElementById("boxa2").style.backgroundImage="url('img3.png')";
        }
        if (play12===4) {
            document.getElementById("boxa2").style.backgroundImage="url('img4.png')";
        }
        if (play12===5) {
            document.getElementById("boxa2").style.backgroundImage="url('img5.png')";
        }
        if (play12===6) {
            document.getElementById("boxa2").style.backgroundImage="url('img6.png')";
        }
        if (play12>=7 && play12<=9) {
            document.getElementById("boxa2").style.backgroundImage="url('img17.png')";
            let shoot12 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxb"+shoot12).style.backgroundImage="url('img1.png')";
            if (shoot12==="1") {
                play21=1;
            }
            if (shoot12==="2") {
                play22=1;
            }
            if (shoot12==="3") {
                play23=1;
            }
            if (shoot12==="4") {
                play24=1;
            }
            if (shoot12==="5") {
                play25=1;
            }
        }
        
    }
    if (random1===3) {  
        play13+=1;
        if (play13===1) {
            document.getElementById("boxa3").style.backgroundImage="url('img1.png')";
        }
        if (play13===2) {
            document.getElementById("boxa3").style.backgroundImage="url('img2.png')";
        }
        if (play13===3) {
            document.getElementById("boxa3").style.backgroundImage="url('img3.png')";
        }
        if (play13===4) {
            document.getElementById("boxa3").style.backgroundImage="url('img4.png')";
        }
        if (play13===5) {
            document.getElementById("boxa3").style.backgroundImage="url('img5.png')";
        }
        if (play13===6) {
            document.getElementById("boxa3").style.backgroundImage="url('img6.png')";
        }
        if (play13>=7 && play13<=9) {
            document.getElementById("boxa3").style.backgroundImage="url('img17.png')";
            let shoot13 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxb"+shoot13).style.backgroundImage="url('img1.png')";
            if (shoot13==="1") {
                play21=1;
            }
            if (shoot13==="2") {
                play22=1;
            }
            if (shoot13==="3") {
                play23=1;
            }
            if (shoot13==="4") {
                play24=1;
            }
            if (shoot13==="5") {
                play25=1;
            }
        }
    }
    if (random1===4) {  
        play14+=1;
        if (play14===1) {
            document.getElementById("boxa4").style.backgroundImage="url('img1.png')";
        }
        if (play14===2) {
            document.getElementById("boxa4").style.backgroundImage="url('img2.png')";
        }
        if (play14===3) {
            document.getElementById("boxa4").style.backgroundImage="url('img3.png')";
        }
        if (play14===4) {
            document.getElementById("boxa4").style.backgroundImage="url('img4.png')";
        }
        if (play14===5) {
            document.getElementById("boxa4").style.backgroundImage="url('img5.png')";
        }
        if (play14===6) {
            document.getElementById("boxa4").style.backgroundImage="url('img6.png')";
        }
        if (play14>=7 && play14<=9) {
            document.getElementById("boxa1").style.backgroundImage="url('img17.png')";
            let shoot14 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxb"+shoot14).style.backgroundImage="url('img1.png')";
            if (shoot14==="1") {
                play21=1;
            }
            if (shoot14==="2") {
                play22=1;
            }
            if (shoot14==="3") {
                play23=1;
            }
            if (shoot14==="4") {
                play24=1;
            }
            if (shoot14==="5") {
                play25=1;
            }
        }
    }
    if (random1===5) {  
        play15+=1;
        if (play15===1) {
            document.getElementById("boxa5").style.backgroundImage="url('img1.png')";
        }
        if (play15===2) {
            document.getElementById("boxa5").style.backgroundImage="url('img2.png')";
        }
        if (play15===3) {
            document.getElementById("boxa5").style.backgroundImage="url('img3.png')";
        }
        if (play15===4) {
            document.getElementById("boxa5").style.backgroundImage="url('img4.png')";
        }
        if (play15===5) {
            document.getElementById("boxa5").style.backgroundImage="url('img5.png')";
        }
        if (play15===6) {
            document.getElementById("boxa5").style.backgroundImage="url('img6.png')";
        }
        if (play15>=7 && play15<=9) {
            document.getElementById("boxa1").style.backgroundImage="url('img17.png')";
            let shoot15 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxb"+shoot15).style.backgroundImage="url('img1.png')";
            if (shoot15==="1" ) {
                play21=1;
            }
            if (shoot15==="2" ) {
                play22=1;
            }
            if (shoot15==="3") {
                play23=1;
            }
            if (shoot15==="4") {
                play24=1;
            }
            if (shoot15==="5") {
                play25=1;
            }
        }
    }
    if (play11>=6 && play12>=6 && play13>=6 && play14>=6 && play15>=6) {
        alert("PLAYER 1 WINS!!");
    }   
}
);
var random2;

document.getElementById("btn-2").addEventListener("click",function(){
    
    btn1.disabled= false;
    btn2.disabled= true;
    random2= 1+Math.floor(Math.random()*5);
    document.getElementById("play2").innerHTML=random2;
    if (random2===1) {  
        play21+=1;
        if (play21===1) {
            document.getElementById("boxb1").style.backgroundImage="url('img1.png')";
        }
        if (play21===2) {
            document.getElementById("boxb1").style.backgroundImage="url('img2.png')";
        }
        if (play21===3) {
            document.getElementById("boxb1").style.backgroundImage="url('img3.png')";
        }
        if (play21===4) {
            document.getElementById("boxb1").style.backgroundImage="url('img4.png')";
        }
        if (play21===5) {
            document.getElementById("boxb1").style.backgroundImage="url('img5.png')";
        }
        if (play21===6) {
            document.getElementById("boxb1").style.backgroundImage="url('img6.png')";
        }
        if (play21>=7 && play21<=9) {
            document.getElementById("boxb1").style.backgroundImage="url('img27.png')";
            let shoot21 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxa"+shoot21).style.backgroundImage="url('img1.png')";
            if (shoot21==="1") {
                play11=1;
            }
            if (shoot21==="2") {
                play12=1;
            }
            if (shoot21==="3") {
                play13=1;
            }
            if (shoot21==="4") {
                play14=1;
            }
            if (shoot21==="5") {
                play15=1;
            }
        }
    }
    if (random2===2) {  
        play22+=1;
        if (play22===1) {
            document.getElementById("boxb2").style.backgroundImage="url('img1.png')";
        }
        if (play22===2) {
            document.getElementById("boxb2").style.backgroundImage="url('img2.png')";
        }
        if (play22===3) {
            document.getElementById("boxb2").style.backgroundImage="url('img3.png')";
        }
        if (play22===4) {
            document.getElementById("boxb2").style.backgroundImage="url('img4.png')";
        }
        if (play22===5) {
            document.getElementById("boxb2").style.backgroundImage="url('img5.png')";
        }
        if (play22===6) {
            document.getElementById("boxb2").style.backgroundImage="url('img6.png')";
        }
        if (play22>=7 && play22<=9) {
            document.getElementById("boxb2").style.backgroundImage="url('img27.png')";
            let shoot22 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxa"+shoot22).style.backgroundImage="url('img1.png')";
            if (shoot22==="1") {
                play11=1;
            }
            if (shoot22==="2") {
                play12=1;
            }
            if (shoot22==="3") {
                play13=1;
            }
            if (shoot22==="4") {
                play14=1;
            }
            if (shoot22==="5") {
                play15=1;
            }
            
        }
    }
    if (random2===3) {  
        play23+=1;
        if (play23===1) {
            document.getElementById("boxb3").style.backgroundImage="url('img1.png')";
        }
        if (play23===2) {
            document.getElementById("boxb3").style.backgroundImage="url('img2.png')";
        }
        if (play23===3) {
            document.getElementById("boxb3").style.backgroundImage="url('img3.png')";
        }
        if (play23===4) {
            document.getElementById("boxa3").style.backgroundImage="url('img4.png')";
        }
        if (play23===5) {
            document.getElementById("boxb3").style.backgroundImage="url('img5.png')";
        }
        if (play23===6) {
            document.getElementById("boxb3").style.backgroundImage="url('img6.png')";
        }
        if (play23>=7 && play23<=9) {
            document.getElementById("boxb1").style.backgroundImage="url('img27.png')";
            let shoot23 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxa"+shoot23).style.backgroundImage="url('img1.png')";
            if (shoot23==="1") {
                play11=1;
            }
            if (shoot23==="2") {
                play12=1;
            }
            if (shoot23==="3") {
                play13=1;
            }
            if (shoot23==="4") {
                play14=1;
            }
            if (shoot23==="5") {
                play15=1;
            }
        }
    }
    if (random2===4) {  
        play24+=1;
        if (play24===1) {
            document.getElementById("boxb4").style.backgroundImage="url('img1.png')";
        }
        if (play24===2) {
            document.getElementById("boxb4").style.backgroundImage="url('img2.png')";
        }
        if (play24===3) {
            document.getElementById("boxb4").style.backgroundImage="url('img3.png')";
        }
        if (play24===4) {
            document.getElementById("boxb4").style.backgroundImage="url('img4.png')";
        }
        if (play24===5) {
            document.getElementById("boxb4").style.backgroundImage="url('img5.png')";
        }
        if (play24===6) {
            document.getElementById("boxb4").style.backgroundImage="url('img6.png')";
        }
        if (play24>=7 && play24<=9) {
            document.getElementById("boxb4").style.backgroundImage="url('img27.png')";
            let shoot24 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxa"+shoot24).style.backgroundImage="url('img1.png')";
            if (shoot24==="1") {
                play11=1;
            }
            if (shoot24==="2") {
                play12=1;
            }
            if (shoot24==="3") {
                play13=1;
            }
            if (shoot24==="4") {
                play14=1;
            }
            if (shoot24==="5") {
                play15=1;
            }
        }
    }
    if (random2===5) {  
        play25+=1;
        if (play25===1) {
            document.getElementById("boxb5").style.backgroundImage="url('img1.png')";
        }
        if (play25===2) {
            document.getElementById("boxb5").style.backgroundImage="url('img2.png')";
        }
        if (play25===3) {
            document.getElementById("boxb5").style.backgroundImage="url('img3.png')";
        }
        if (play25===4) {
            document.getElementById("boxb5").style.backgroundImage="url('img4.png')";
        }
        if (play25===5) {
            document.getElementById("boxb5").style.backgroundImage="url('img5.png')";
        }
        if (play25===6) {
            document.getElementById("boxb5").style.backgroundImage="url('img6.png')";
        }
        if (play25>=7 && play25<=9) {
            document.getElementById("boxb5").style.backgroundImage="url('img27.png')";
            let shoot25 = prompt("Enter the box number of human to be shot")
            document.getElementById("boxa"+shoot25).style.backgroundImage="url('img1.png')";
            if (shoot25==="1") {
                play11=1;
            }
            if (shoot25==="2") {
                play12=1;
            }
            if (shoot25==="3") {
                play13=1;
            }
            if (shoot25==="4") {
                play14=1;
            }
            if (shoot25==="5") {
                play15=1;
            }
        }
        
    }
    if (play21>=6 && play22>=6 && play23>=6 && play24>=6 && play25>=6) {
        alert("PLAYER 2 WINS!!");
    } 
}
);