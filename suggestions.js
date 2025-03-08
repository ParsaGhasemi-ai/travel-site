const attractions = {
    "France": {
        budget: 1500,
        flightTime: "6 hours",
        attractions: [
            { name: "Eiffel Tower", image: "images/eiffel_tower.jpg" },
            { name: "Louvre Museum", image: "louvre_museum.jpg" },
            { name: "Notre-Dame Cathedral", image: "notre_dame.jpg" }
        ]
    },
    "Germany": {
        budget: 1400,
        flightTime: "5 hours",
        attractions: [
            { name: "Brandenburg Gate", image: "brandenburg_gate.jpg" },
            { name: "Neuschwanstein Castle", image: "neuschwanstein_castle.jpg" },
            { name: "Berlin Wall", image: "berlin_wall.jpg" }
        ]
    },
    "Spain": {
        budget: 1300,
        flightTime: "5.5 hours",
        attractions: [
            { name: "Sagrada Familia", image: "sagrada_familia.jpg" },
            { name: "Alhambra", image: "alhambra.jpg" },
            { name: "Park Güell", image: "park_guell.jpg" }
        ]
    },
    "Italy": {
        budget: 1400,
        flightTime: "5.5 hours",
        attractions: [
            { name: "Colosseum", image: "colosseum.jpg" },
            { name: "Leaning Tower of Pisa", image: "leaning_tower_of_pisa.jpg" },
            { name: "Venice Canals", image: "venice_canals.jpg" }
        ]
    },
    "Iran": {
        budget: 800,
        drivingDistance: "0 km",
        attractions: [
            { name: "Persepolis", image: "persepolis.jpg" },
            { name: "Naqsh-e Jahan Square", image: "naqsh_e_jahan.jpg" },
            { name: "Golestan Palace", image: "golestan_palace.jpg" }
        ]
    }
    // سایر کشورها را به همین ترتیب اضافه کنید
};

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
