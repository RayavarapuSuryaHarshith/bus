document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("search-btn").addEventListener("click", searchBuses);
});

function searchBuses() {
        // Clear previous results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        // Get user input
        const departureValue = document.getElementById('departure').value;
        const arrivalValue = document.getElementById('arrival').value;
        const dateValue = document.getElementById('date').value;

        // You could optionally add input validation here

        // Dummy bus entries
        const buses = [
    {
            id: 1,
            departure: departureValue,
            arrival: arrivalValue,
            date: dateValue,
            time: '10:00 AM',
            price: '$25'
    },
    {
            id: 2,
            departure: departureValue,
            arrival: arrivalValue,
            date: dateValue,
            time: '02:00 PM',
            price: '$30'
    }
        ];

        // Render bus cards
        buses.forEach(bus => {
    const busCard = document.createElement('div');
    busCard.className = 'bus-card';
    busCard.innerHTML = `
            <h3>Bus ${bus.id}</h3>
            <p><strong>Departure:</strong> ${bus.departure}</p>
            <p><strong>Arrival:</strong> ${bus.arrival}</p>
            <p><strong>Date:</strong> ${bus.date}</p>
            <p><strong>Time:</strong> ${bus.time}</p>
            <p><strong>Price:</strong> ${bus.price}</p>
    `;
    busCard.onclick = function() {
            window.location.href = `payment.html?busId=${bus.id}&departure=${encodeURIComponent(bus.departure)}&arrival=${encodeURIComponent(bus.arrival)}&date=${encodeURIComponent(bus.date)}&time=${encodeURIComponent(bus.time)}&price=${encodeURIComponent(bus.price)}`;
    };
    resultsDiv.appendChild(busCard);
        });
}
