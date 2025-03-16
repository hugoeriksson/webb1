document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Ensure the fun-button exists before accessing it
    const funButton = document.querySelector('.fun-button');
    if (funButton) {
        console.log("Fun button found");
        // Make the button appear after 2 seconds
        setTimeout(() => {
            funButton.style.display = 'block';
        }, 2000);

        // Add confetti animation on click
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

    // Ensure the dark-mode-toggle button exists before accessing it
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        console.log("Toggle button found");
        // Add click event listener to the button
        toggleButton.addEventListener('click', () => {
            console.log("Toggle button clicked");
            // Toggle the 'dark-mode' class on the body
            document.body.classList.toggle('dark-mode');

            // Toggle icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-moon')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }

            // Save the user's preference in localStorage
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

    // Check for saved user preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        console.log("Dark mode loaded from localStorage");
    } else {
        document.body.classList.remove('dark-mode');
        console.log("Light mode loaded from localStorage");
    }
});


// Pixel Rain effect script
document.addEventListener("DOMContentLoaded", function() {
    const rainButton = document.getElementById("rainButton");


    rainButton.addEventListener("click", function () {
        setInterval(createPixel, 100);
    });


    function createPixel() {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");


        // Random starting positions and colors
        const startX = Math.random() * window.innerWidth;
        const startColor = getRandomColor();


        pixel.style.left = `${startX}px`;
        pixel.style.backgroundColor = startColor;


        document.body.appendChild(pixel);


        // Falling effect
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


    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});




