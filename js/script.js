function hello() {
    console.log("Cześć! Ten kod jest już w reozytorium GIT");
}


let backgroundToggle = () => {
    body.classList.toggle("dark");
    article.classList.toggle("article--dark");

    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
};

hello ();
 



let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let article = document.querySelector(".article");


button.addEventListener("click", backgroundToggle);
