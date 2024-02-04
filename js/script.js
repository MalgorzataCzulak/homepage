{
    const hello = () => {
        console.log("Cześć! Ten kod jest już w reozytorium GIT");
    }


    const backgroundToggle = () => {
        const body = document.querySelector(".body");
        const article = document.querySelector(".article");
        const themeName = document.querySelector(".themeName");

        article.classList.toggle("article--dark");

        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    };



    const init = () => {
    const button = document.querySelector(".button");
       button.addEventListener("click", backgroundToggle);

        hello();
    };

    init();

}