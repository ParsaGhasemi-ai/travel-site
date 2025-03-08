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
    const visaTime = attractions[country].visaProcessingTime;

    if (budget < minBudget) {
        document.getElementById('suggestions').innerHTML = `
            <strong>Insufficient Budget:</strong> Your budget is not sufficient for ${country}.<br>
            <strong>Minimum Required Budget:</strong> ${minBudget} dollars.<br>
        `;
        return;
    }

    const selectedCountry = attractions[country];
    let details = `
        <strong>Country:</strong> ${country}<br>
        <strong>Visa Processing Time:</strong> ${visaTime}<br>
        <strong>Minimum Budget:</strong> ${minBudget} dollars<br>
        <strong>Flight Time:</strong> ${selectedCountry.flightTime || "N/A"}<br><br>
        <strong>Top Attractions:</strong><br>
    `;

    selectedCountry.attractions.forEach(attraction => {
        details += `<strong>${attraction.name}</strong><br><img src="${attraction.image}" alt="${attraction.name}" style="width: 100px; height: auto;"><br><br>`;
    });

    document.getElementById('suggestions').innerHTML = details;
};
