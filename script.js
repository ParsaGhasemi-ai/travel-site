function getTravelSuggestions() {
    const country = document.getElementById('country').value;
    const budget = document.getElementById('budget').value;
    const duration = document.getElementById('duration').value;

    // You can add your AI code and recommendation algorithm here

    let suggestions = `For the country ${country} with a budget of ${budget} and travel duration of ${duration} days, you will receive the best travel suggestions.`;

    document.getElementById('suggestions').innerHTML = suggestions;
}
