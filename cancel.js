document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cancel-booking-btn').addEventListener('click', cancelTicket);
});

function cancelTicket() {
    const bookingId = document.getElementById('booking-id').value.trim();
    const confirmation = document.getElementById('cancellation-confirmation');

    if (!bookingId) {
        confirmation.textContent = 'Please enter a booking ID.';
        confirmation.style.color = 'red';
        return;
    }

    // Example: Simulate cancellation process or replace with your backend API call
    // Clear previous message
    confirmation.textContent = '';

    // Simulate async operation (e.g., API call)
    setTimeout(() => {
        // Assume cancellation success
        confirmation.textContent = `Booking with ID "${bookingId}" has been successfully cancelled.`;
        confirmation.style.color = 'green';
        document.getElementById('cancel-form').reset();
    }, 500);

    // To implement real cancellation, replace the above setTimeout block with an API call like:
    /*
    fetch('/api/cancel-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
    })
    .then(response => {
        if(!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        confirmation.textContent = data.message || 'Booking cancelled successfully.';
        confirmation.style.color = 'green';
        document.getElementById('cancel-form').reset();
    })
    .catch(error => {
        confirmation.textContent = 'Failed to cancel booking. Please try again later.';
        confirmation.style.color = 'red';
        console.error('Error:', error);
    });
    */
}
