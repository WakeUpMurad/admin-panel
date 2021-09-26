    let acc = document.getElementsByClassName("filters");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const element = document.getElementById("grid-container");
        element.style.gridTemplateRows = '0.3fr 0.2fr 0.5fr 2.0fr';
            this.classList.toggle("active");

        })
    }
    let app = document.getElementsByClassName("apply_button");
    let j;
    for (j = 0; j < app.length; j++) {
        app[j].addEventListener("click", function () {
            const element = document.getElementById("grid-container");
            element.style.gridTemplateRows = '0.3fr 0.2fr 0 2.5fr';
        })
    }