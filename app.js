// ==============================
// LOADING SCREEN
// ==============================

const loadingScreen = document.getElementById("loading-screen");

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";
        loadingScreen.style.visibility = "hidden";

    }, 3500);

});


// ==============================
// PASSWORD PAGE
// ==============================

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock");
const passwordPage = document.getElementById("password-page");
const introPage = document.getElementById("intro");
const errorText = document.getElementById("password-error");
const passwordCard = document.querySelector(".password-card");

// PASSWORD REAL
const correctPassword = "170825";

function unlockPage(){

    if(passwordInput.value === correctPassword){

        passwordPage.style.opacity="0";

        setTimeout(()=>{

            passwordPage.style.display="none";

            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";

            introPage.style.display="flex";

        setTimeout(()=>{

            introPage.style.opacity = "1";

            const typingElements = document.querySelectorAll(".typing");

            typingElements.forEach((element,index)=>{

                setTimeout(()=>{

                    element.classList.add("showTyping");

                }, index * 1100);

            });

            setTimeout(()=>{

                document
                .getElementById("start-button")
                .classList.add("showTyping");

            },4700);

        },50);

    },900);

    }

    else{

        errorText.style.opacity = "1";

        passwordCard.classList.add("shake");

        setTimeout(()=>{

            passwordCard.classList.remove("shake");

        },500);

    }

}

unlockButton.addEventListener("click", unlockPage);

passwordInput.addEventListener("keypress",(event)=>{

    if(event.key==="Enter"){

        unlockPage();

    }

});

//==============================
// OPEN BUTTON
//==============================

const startButton = document.getElementById("start-button");

startButton.addEventListener("click",()=>{

    document.getElementById("wrapped").scrollIntoView({

        behavior:"smooth"

    });

});

//==============================
// MUSIC PLAYER
//==============================

const song = document.getElementById("ourSong");

const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function(){

    if(song.paused){

        song.play();

        playButton.innerHTML = "❚❚";

    }

    else{

        song.pause();

        playButton.innerHTML = "▶";

    }

});

//==============================
// DAYS COUNTER
//==============================

const counter = document.getElementById("days-counter");

const startDate = new Date("2025-08-17");

const today = new Date();

const totalDays = Math.floor(

    (today-startDate)/(1000*60*60*24)

);

counter.textContent = totalDays;

//==============================
// LETTER POPUP
//==============================

const openLetter = document.getElementById("open-letter");

const letterPopup = document.getElementById("letter-popup");

const closeLetter = document.getElementById("close-letter");

openLetter.addEventListener("click",()=>{

    letterPopup.style.display="flex";

});

closeLetter.addEventListener("click",()=>{

    letterPopup.style.display="none";

});

//==============================
// SCROLL ANIMATION
//==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.25
});

document.querySelectorAll(".fade-up").forEach((el)=>{

    observer.observe(el);

});

//==============================
// REPLAY
//==============================

const replayButton = document.getElementById("replay-button");

replayButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//================================
// CUSTOM CURSOR
//================================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("button,a").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="38px";

        cursor.style.height="38px";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="18px";

        cursor.style.height="18px";

    });

});