window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    const budget = parseFloat(urlParams.get('budget'));
    const duration = parseInt(urlParams.get('duration'));

    if (!attractions[country]) {
        document.getElementById('suggestions').innerHTML = 'Attractions not available for this destination.';
        return;
    }

    const minBudget = attractions[country].budget;
    const suggestions = [];

    if (budget < minBudget) {
        for (const [key, value] of Object.entries(attractions)) {
            if (budget >= value.budget) {
                suggestions.push(key);
            }
        }

        if (suggestions.length > 0) {
            document.getElementById('suggestions').innerHTML = `Your budget is not sufficient for ${country}. How about visiting one of these countries instead: ${suggestions.join(', ')}.`;
        } else {
            document.getElementById('suggestions').innerHTML = 'Your budget is not sufficient for any suggested destination. Please increase your budget.';
        }
        return;
    }

    const selectedCountry = attractions[country];
    let details = `For the country ${country} with a budget of ${budget} dollars and travel duration of ${duration} days, here are the top attractions:<br><br>`;

    if (country === "Iran") {
        details += `<strong>Driving Distance from Tehran:</strong> ${selectedCountry.drivingDistance}<br><br>`;
    } else {
        details += `<strong>Flight Time from Iran:</strong> ${selectedCountry.flightTime}<br><br>`;
    }

    selectedCountry.attractions.forEach(attraction => {
        details += `<strong>${attraction.name}</strong><br><img src="${attraction.image}" alt="${attraction.name}" style="width: 100px; height: auto;"><br><br>`;
    });

    document.getElementById('suggestions').innerHTML = details;
}
