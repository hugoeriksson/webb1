const database = {
};

function searchDatabase(keyword) {
    const results = {};
    for (const group in database) {
        results[group] = database[group].filter(text => text.toLowerCase().includes(keyword.toLowerCase()));
    }
    return results;
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('search-input').value;
    const searchResults = searchDatabase(keyword);
    displayResults(searchResults);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    for (const group in results) {
        if (results[group].length > 0) {
            const groupTitle = document.createElement('h2');
            groupTitle.textContent = group.charAt(0).toUpperCase() + group.slice(1);
            resultsContainer.appendChild(groupTitle);
            results[group].forEach(result => {
                const resultItem = document.createElement('p');
                resultItem.textContent = result;
                resultsContainer.appendChild(resultItem);
            });
        }
    }
}

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