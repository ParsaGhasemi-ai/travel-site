const attractions = {
    "France": {
        budget: 2000,
        visaProcessingTime: "15 days",
        flightTime: "6 hours",
        attractions: [
            { name: "Eiffel Tower", image: "images/eiffel_tower.jpg" },
            { name: "Louvre Museum", image: "images/louvre_museum.jpg" },
            { name: "Notre-Dame Cathedral", image: "images/notre_dame.jpg" },
            { name: "Palace of Versailles", image: "images/palace_of_versailles.jpg" },
            { name: "Mont Saint-Michel", image: "images/mont_saint_michel.jpg" },
            { name: "Champs-Élysées", image: "images/champs_elysees.jpg" },
            { name: "Sainte-Chapelle", image: "images/sainte_chapelle.jpg" },
            { name: "Giverny (Monet's Garden)", image: "images/giverny.jpg" }
        ]
    },
    "Germany": {
        budget: 1800,
        visaProcessingTime: "14 days",
        flightTime: "5 hours",
        attractions: [
            { name: "Brandenburg Gate", image: "images/brandenburg_gate.jpg" },
            { name: "Neuschwanstein Castle", image: "images/neuschwanstein_castle.jpg" },
            { name: "Berlin Wall", image: "images/berlin_wall.jpg" },
            { name: "Cologne Cathedral", image: "images/cologne_cathedral.jpg" },
            { name: "Black Forest", image: "images/black_forest.jpg" },
            { name: "Heidelberg Castle", image: "images/heidelberg_castle.jpg" },
            { name: "Oktoberfest", image: "images/oktoberfest.jpg" },
            { name: "Nuremberg Old Town", image: "images/nuremberg_old_town.jpg" }
        ]
    },
    "Spain": {
        budget: 1700,
        visaProcessingTime: "10 days",
        flightTime: "5.5 hours",
        attractions: [
            { name: "Sagrada Familia", image: "images/sagrada_familia.jpg" },
            { name: "Alhambra", image: "images/alhambra.jpg" },
            { name: "Park Güell", image: "images/park_guell.jpg" },
            { name: "Seville Cathedral", image: "images/seville_cathedral.jpg" },
            { name: "Plaza Mayor", image: "images/plaza_mayor.jpg" },
            { name: "Prado Museum", image: "images/prado_museum.jpg" },
            { name: "La Rambla", image: "images/la_rambla.jpg" },
            { name: "Montserrat Monastery", image: "images/montserrat.jpg" }
        ]
    },
    "Italy": {
        budget: 2000,
        visaProcessingTime: "12 days",
        flightTime: "5.5 hours",
        attractions: [
            { name: "Colosseum", image: "images/colosseum.jpg" },
            { name: "Leaning Tower of Pisa", image: "images/leaning_tower_of_pisa.jpg" },
            { name: "Venice Canals", image: "images/venice_canals.jpg" },
            { name: "Vatican Museums", image: "images/vatican_museums.jpg" },
            { name: "Amalfi Coast", image: "images/amalfi_coast.jpg" },
            { name: "Pompeii", image: "images/pompeii.jpg" },
            { name: "Florence Cathedral", image: "images/florence_cathedral.jpg" },
            { name: "Sistine Chapel", image: "images/sistine_chapel.jpg" }
        ]
    },
    "Iran": {
        budget: 1000,
        visaProcessingTime: "N/A (for residents)",
        drivingDistance: "0 km",
        attractions: [
            { name: "Persepolis", image: "images/persepolis.jpg" },
            { name: "Naqsh-e Jahan Square", image: "images/naqsh_e_jahan.jpg" },
            { name: "Golestan Palace", image: "images/golestan_palace.jpg" },
            { name: "Azadi Tower", image: "images/azadi_tower.jpg" },
            { name: "Nasir-ol-Molk Mosque", image: "images/nasir_ol_molk.jpg" },
            { name: "Caspian Sea (North)", image: "images/caspian_sea.jpg" },
            { name: "Shah Cheragh Shrine", image: "images/shah_cheragh.jpg" },
            { name: "Kandovan Village", image: "images/kandovan.jpg" }
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
