const attractions = {
    "France": {
        budget: 1500,
        flightTime: "6 hours",
        attractions: [
            { name: "Eiffel Tower", image: "eiffel_tower.jpg" },
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

function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const duration = parseInt(document.getElementById('duration').value);

    const queryString = `country=${country}&budget=${budget}&duration=${duration}`;
    window.location.href = `suggestions.html?${queryString}`;
}
