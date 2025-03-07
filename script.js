async function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = document.getElementById('budget').value;
    const duration = document.getElementById('duration').value;

    // API Keys
    const weatherApiKey = '8c440b87e89d7903fa1c9a12dabddcc8';
    const amadeusApiKey = '1ZQhiPZf9LPirbMuV6VbyPM9SqCplx38';

    // Fetch Weather Information
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${weatherApiKey}`;
    const weatherResponse = await fetch(weatherEndpoint);
    const weatherData = await weatherResponse.json();

    // Fetch Travel Suggestions
    const amadeusEndpoint = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=48.8566&longitude=2.3522&radius=10&apikey=${amadeusApiKey}`;
    const amadeusResponse = await fetch(amadeusEndpoint);
    const amadeusData = await amadeusResponse.json();

    // Display Suggestions
    let suggestions = `For the country ${country} with a budget of ${budget} Toman and travel duration of ${duration} days, here are the top suggestions:<br><br>`;
    suggestions += `<strong>Weather:</strong> ${weatherData.weather[0].description}<br><br>`;

    amadeusData.data.forEach(poi => {
        suggestions += `<strong>${poi.name}</strong>: ${poi.category}<br>`;
    });

    document.getElementById('suggestions').innerHTML = suggestions;
}
