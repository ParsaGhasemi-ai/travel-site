const attractions = {
    "France": {
        budget: 1500,
        flightTime: "6 hours",
        attractions: [
            { name: "Eiffel Tower", image: "images/eiffel_tower.jpg" },
            { name: "Louvre Museum", image: "images/louvre_museum.jpg" },
            { name: "Notre-Dame Cathedral", image: "images/notre_dame.jpg" }
        ]
    },
    "Germany": {
        budget: 1400,
        flightTime: "5 hours",
        attractions: [
            { name: "Brandenburg Gate", image: "images/brandenburg_gate.jpg" },
            { name: "Neuschwanstein Castle", image: "images/neuschwanstein_castle.jpg" },
            { name: "Berlin Wall", image: "images/berlin_wall.jpg" }
        ]
    },
    "Spain": {
        budget: 1300,
        flightTime: "5.5 hours",
        attractions: [
            { name: "Sagrada Familia", image: "images/sagrada_familia.jpg" },
            { name: "Alhambra", image: "images/alhambra.jpg" },
            { name: "Park Güell", image: "images/park_guell.jpg" }
        ]
    },
    "Italy": {
        budget: 1400,
        flightTime: "5.5 hours",
        attractions: [
            { name: "Colosseum", image: "images/colosseum.jpg" },
            { name: "Leaning Tower of Pisa", image: "images/leaning_tower_of_pisa.jpg" },
            { name: "Venice Canals", image: "images/venice_canals.jpg" }
        ]
    },
    "Iran": {
        budget: 800,
        drivingDistance: "0 km",
        attractions: [
            { name: "Persepolis", image: "images/persepolis.jpg" },
            { name: "Naqsh-e Jahan Square", image: "images/naqsh_e_jahan.jpg" },
            { name: "Golestan Palace", image: "images/golestan_palace.jpg" }
        ]
    }
};

function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const duration = parseInt(document.getElementById('duration').value);

    const queryString = `country=${country}&budget=${budget}&duration=${duration}`;
    window.location.href = `suggestions.html?${queryString}`;
}
