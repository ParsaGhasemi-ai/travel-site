async function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = document.getElementById('budget').value;
    const duration = document.getElementById('duration').value;

    // API Key and Endpoint
    const apiKey = 'YOUR_TRIPOSO_API_KEY';
    const endpoint = `https://www.triposo.com/api/v2/poi.json?location_id=${country}&tag_labels=sightseeing&count=10&account=YOUR_ACCOUNT_ID&token=${apiKey}`;

    // Fetch Travel Suggestions
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        let suggestions = `For the country ${country} with a budget of ${budget} Toman and travel duration of ${duration} days, here are the top suggestions:<br><br>`;

        data.results.forEach(poi => {
            suggestions += `<strong>${poi.name}</strong>: ${poi.snippet}<br>`;
        });

        document.getElementById('suggestions').innerHTML = suggestions;
    } catch (error) {
        document.getElementById('suggestions').innerHTML = 'An error occurred while fetching travel suggestions. Please try again later.';
        console.error(error);
    }
}
