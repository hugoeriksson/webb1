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