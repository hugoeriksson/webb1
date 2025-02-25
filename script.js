console.log("Script is running!");
const button = document.querySelector('.fun-button');

// Make the button appear after 2 seconds
setTimeout(() => {
    button.style.display = 'block';
}, 2000);

// Add confetti animation on click
button.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});


// Get the toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Add click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved user preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}