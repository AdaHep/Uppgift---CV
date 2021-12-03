//Funktion för att kunna trycka på bilden på första sidan för att komma vidare

window.addEventListener('click', main);

function main() {
    const adam = document.getElementById('me');
    adam.addEventListener('click', redirect)
}

function redirect (){
    window.location.href = "./om-mig.html";
}
