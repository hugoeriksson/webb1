const database = {
    "customers": [
        "Welcome customers! Here you will find information about our products and services.",
        "We are proud to offer a wide range of products that will suit your needs."
    ],
    "suppliers": [
        "Welcome suppliers! Here you will find information about our products and services.",
        "We are proud to offer a wide range of products that will suit your needs."
    ],
    "journalists": [
        "Welcome journalists! Here you will find information about our products and services.",
        "We are proud to offer a wide range of products that will suit your needs."
    ],
    "applicants": [
        "Welcome applicants! Here you will find information about our products and services.",
        "We are proud to offer a wide range of products that will suit your needs."
    ]
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