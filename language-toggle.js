let language = {
    swe: {
        aboutMe: "Om mig",
        projects: "Projekt",
        contact: "Kontakt",
    },
    eng: {
        omMig: "About me",
        projects: "Projekt",
        contact: "Contact me"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#swe") {
        
    }
}








































window.addEventListener('load', main);

//State
let isEnglish = false;

/** Start of the program */
function main() {
    loadLanguageFromLS();
    renderLanguage();
    addEventListeners();
}

let links = document.getElementsByClassName("links");

/** loads isEnglish from LS and saves it to a global variable */

function loadLanguageFromLS(){
    isEnglish = JSON.parse(localStorage.isEnglish || null);
}


/** Toggles class on body element based on isEnglish state */
function renderLanguage(){
    if (isEnglish){
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

/** Adds all event listerners needed on page load */

function addEventListeners(){
    const toggleButton = document.querySelector('button');
    toggleButton.addEventListener('click', toggleTheme);
}

/** Toggle theme variable, saves to LS and renderes page */
function toggleTheme(){
    isEnglish = !isEnglish;
    localStorage.isEnglish = isEnglish;
    renderLanguage();
}