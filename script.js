const adam = document.getElementById('me');

window.addEventListener('click', main);

function main() {
    adam.onclick = redirect();
}

function redirect (){
    window.location.href = "./om-mig.html";
}
