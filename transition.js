let lastScrollTop = window.pageYOffset;

function revealOnScroll() {

    let sections = document.querySelectorAll(".section");
    let screenHeight = window.innerHeight;
    let scrollDirection = window.pageYOffset > lastScrollTop ? "down" : "up";

    sections.forEach((section, index) => {

        let position = section.getBoundingClientRect().top;

        if (position < screenHeight - 400) {

            section.classList.add("show");

            // Ta bort "hide" från aktuell sektion så att den inte fastnar i osynligt läge
            section.classList.remove("hide");   

            // Om det finns en föregående sektion, göm den när vi scrollar ner
            if (index > 0 && scrollDirection === "down") {
                sections[index - 1].classList.add("hide");
            }

        }


    });

    lastScrollTop = window.pageYOffset;
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();   