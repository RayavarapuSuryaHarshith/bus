// Function to get URL parameters as an object
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while ((m = regex.exec(queryString))) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return params;
}

// Populate bus info when DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
    const params = getUrlParams();
    const busInfoDiv = document.getElementById('bus-info');

    if (params.busId) {
        busInfoDiv.innerHTML = `
        <h3>Bus ${params.busId}</h3>
        <p><strong>Departure:</strong> ${params.departure || ''}</p>
        <p><strong>Arrival:</strong> ${params.arrival || ''}</p>
        <p><strong>Date:</strong> ${params.date || ''}</p>
        <p><strong>Time:</strong> ${params.time || ''}</p>
        <p><strong>Price:</strong> ${params.price || ''}</p>
        `;

    }
});
