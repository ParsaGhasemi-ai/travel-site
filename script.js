document.getElementById('get-suggestions').addEventListener('click', function() {
    const country = document.getElementById('country').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const duration = parseInt(document.getElementById('duration').value);

    const queryString = `country=${country}&budget=${budget}&duration=${duration}`;
    window.location.href = `suggestions.html?${queryString}`;
});
