async function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = document.getElementById('budget').value;
    const duration = document.getElementById('duration').value;

    // API Keys
    const weatherApiKey = '0fa70fe173723ae8bd45db8a1dc742ea';
    const amadeusApiKey = '1ZQhiPZf9LPirbMuV6VbyPM9SqCplx38';

    try {
        // Fetch Weather Information
        const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${weatherApiKey}`;
        const weatherResponse = await fetch(weatherEndpoint);
        if (!weatherResponse.ok) throw new Error('Weather API error');
        const weatherData = await weatherResponse.json();

        // Fetch Places of Interest
        const amadeusEndpoint = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=48.8566&longitude=2.3522&radius=10&apikey=${amadeusApiKey}`;
        const amadeusResponse = await fetch(amadeusEndpoint);
        if (!amadeusResponse.ok) throw new Error('Amadeus API error');
        const amadeusData = await amadeusResponse.json();

        // Display Suggestions
        let suggestions = `For the country ${country} with a budget of ${budget} Toman and travel duration of ${duration} days, here are the top suggestions:<br><br>`;
        suggestions += `<strong>Weather:</strong> ${weatherData.weather[0].description}<br><br>`;

        amadeusData.data.forEach(poi => {
            suggestions += `<strong>${poi.name}</strong>: ${poi.category}<br>`;
        });

        document.getElementById('suggestions').innerHTML = suggestions;
    } catch (error) {
        document.getElementById('suggestions').innerHTML = 'An error occurred while fetching travel suggestions. Please try again later.';
        console.error(error);
    }
}
