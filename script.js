

roboticsButton = document.querySelector(".roboticsButton");
roboticsContent = document.querySelector(".roboticsContent");
toggleIconRobotics = document.querySelector(".toggleIconRobotics");
let roboticsToggleNum = 0;

roboticsButton.onclick = function(){
    if (roboticsToggleNum === 0){
        roboticsContent.style.display = "flex";
        toggleIconRobotics.innerHTML = "↑";
        roboticsToggleNum = 1
    } else if (roboticsToggleNum === 1){
        roboticsContent.style.display="none";
        toggleIconRobotics.innerHTML = "↓"
        roboticsToggleNum = 0
    }

}

mathLeagueButton = document.querySelector(".mathLeagueButton");
mathLeagueContent = document.querySelector(".mathLeagueContent");
toggleIconMathLeague = document.querySelector(".toggleIconMathLeague");
let mathLeagueToggleNum = 0;

mathLeagueButton.onclick = function(){
    if (mathLeagueToggleNum === 0){
        mathLeagueContent.style.display = "flex";
        toggleIconMathLeague.innerHTML = "↑";
        mathLeagueToggleNum = 1
    } else if (mathLeagueToggleNum === 1){
        mathLeagueContent.style.display="none";
        toggleIconMathLeague.innerHTML = "↓"
        mathLeagueToggleNum = 0
    }
}

NHSButton = document.querySelector(".NHSButton");
NHSContent = document.querySelector(".NHSContent");
toggleIconNHS = document.querySelector(".toggleIconNHS");
let NHSToggleNum = 0;

NHSButton.onclick = function(){
    if (NHSToggleNum === 0){
        NHSContent.style.display = "flex";
        toggleIconNHS.innerHTML = "↑";
        NHSToggleNum = 1
    } else if (NHSToggleNum === 1){
        NHSContent.style.display="none";
        toggleIconNHS.innerHTML = "↓"
        NHSToggleNum = 0
    }
}

enviroButton = document.querySelector(".enviroButton");
enviroContent = document.querySelector(".enviroContent");
toggleIconEnviro = document.querySelector(".toggleIconEnviro");
let enviroToggleNum = 0;

enviroButton.onclick = function(){
    if (enviroToggleNum === 0){
        enviroContent.style.display = "flex";
        toggleIconEnviro.innerHTML = "↑";
        enviroToggleNum = 1
    } else if (enviroToggleNum === 1){
        enviroContent.style.display="none";
        toggleIconEnviro.innerHTML = "↓"
        enviroToggleNum = 0
    }
}

techCrewButton = document.querySelector(".techCrewButton");
techCrewContent = document.querySelector(".techCrewContent");
toggleIconTechCrew = document.querySelector(".toggleIconTechCrew");
let techCrewToggleNum = 0;

techCrewButton.onclick = function(){
    if (techCrewToggleNum === 0){
        techCrewContent.style.display = "flex";
        toggleIconTechCrew.innerHTML = "↑";
        techCrewToggleNum = 1
    } else if (techCrewToggleNum === 1){
        techCrewContent.style.display="none";
        toggleIconTechCrew.innerHTML = "↓"
        techCrewToggleNum = 0
    }
}

EWCButton = document.querySelector(".EWCButton");
EWCContent = document.querySelector(".EWCContent");
toggleIconEWC = document.querySelector(".toggleIconEWC");
let EWCToggleNum = 0;

EWCButton.onclick = function(){
    if (EWCToggleNum === 0){
        EWCContent.style.display = "flex";
        toggleIconEWC.innerHTML = "↑";
        EWCToggleNum = 1
    } else if (EWCToggleNum === 1){
        EWCContent.style.display="none";
        toggleIconEWC.innerHTML = "↓"
        EWCToggleNum = 0
    }
}

keyClubButton = document.querySelector(".keyClubButton");
keyClubContent = document.querySelector(".keyClubContent");
toggleIconKeyClub = document.querySelector(".toggleIconKeyClub");
let keyClubToggleNum = 0;

keyClubButton.onclick = function(){
    if (keyClubToggleNum === 0){
        keyClubContent.style.display = "flex";
        toggleIconKeyClub.innerHTML = "↑";
        keyClubToggleNum = 1
    } else if (keyClubToggleNum === 1){
        keyClubContent.style.display="none";
        toggleIconKeyClub.innerHTML = "↓"
        keyClubToggleNum = 0
    }
}

bookButton = document.querySelector(".bookButton");
bookContent = document.querySelector(".bookContent");
toggleIconBook = document.querySelector(".toggleIconBook");
let bookToggleNum = 0;

bookButton.onclick = function(){
    if (bookToggleNum === 0){
        bookContent.style.display = "flex";
        toggleIconBook.innerHTML = "↑";
        bookToggleNum = 1
    } else if (bookToggleNum === 1){
        bookContent.style.display="none";
        toggleIconBook.innerHTML = "↓"
        bookToggleNum = 0
    }
}

artButton = document.querySelector(".artButton");
artContent = document.querySelector(".artContent");
toggleIconArt = document.querySelector(".toggleIconArt");
let artToggleNum = 0;

artButton.onclick = function(){
    if (artToggleNum === 0){
        artContent.style.display = "flex";
        toggleIconArt.innerHTML = "↑";
        artToggleNum = 1
    } else if (artToggleNum === 1){
        artContent.style.display="none";
        toggleIconArt.innerHTML = "↓"
        artToggleNum = 0
    }
}