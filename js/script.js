document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    const funButton = document.querySelector('.fun-button');
    if (funButton) {
        console.log("Fun button found");
        setTimeout(() => {
            funButton.style.display = 'block';
        }, 2000);

        funButton.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
    } else {
        console.log("Fun button not found");
    }

    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        console.log("Toggle button found");
        toggleButton.addEventListener('click', () => {
            console.log("Toggle button clicked");
            document.body.classList.toggle('dark-mode');

            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-moon')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                console.log("Dark mode enabled");
            } else {
                localStorage.setItem('theme', 'light');
                console.log("Dark mode disabled");
            }
        });
    } else {
        console.log("Toggle button not found");
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        console.log("Dark mode loaded from localStorage");
    } else {
        document.body.classList.remove('dark-mode');
        console.log("Light mode loaded from localStorage");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const rainButton = document.getElementById("rainButton");


    rainButton.addEventListener("click", function () {
        setInterval(createPixel, 100);
    });


    function createPixel() {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");


        const startX = Math.random() * window.innerWidth;
        const startColor = getRandomColor();


        pixel.style.left = `${startX}px`;
        pixel.style.backgroundColor = startColor;


        document.body.appendChild(pixel);


        let yPos = 0;
        const fallSpeed = Math.random() * 3 + 2;


        function fall() {
            yPos += fallSpeed;
            pixel.style.top = `${yPos}px`;


            if (yPos > window.innerHeight) {
                pixel.remove();
            }
        }


        setInterval(fall, 20);
    }


    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window) {
        const cards = document.querySelectorAll('.info-card');

        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    } else {
        document.querySelectorAll('.info-card').forEach(card => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        });
    }
});


