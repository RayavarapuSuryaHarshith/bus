document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('change-date-btn').addEventListener('click', changeTravelDate);
});

function changeTravelDate() {
    const bookingId = document.getElementById('current-booking-id').value.trim();
    const newDate = document.getElementById('new-date').value;
    const confirmation = document.getElementById('change-date-confirmation');

    if (!bookingId) {
        confirmation.textContent = 'Please enter your current booking ID.';
        confirmation.style.color = 'red';
        return;
    }

    if (!newDate) {
        confirmation.textContent = 'Please select a new travel date.';
        confirmation.style.color = 'red';
        return;
    }

    // Example: here you may call your backend API to perform the update
    // For demonstration, we simulate success:

    // Simulate async operation (e.g., API call)
    // Remove setTimeout if implementing with real backend call
    confirmation.textContent = '';
    setTimeout(() => {
        // Assume API success response
        confirmation.textContent = `Travel date for booking ID "${bookingId}" has been changed to ${newDate}.`;
        confirmation.style.color = 'green';

        // Optionally reset the form
        document.getElementById('change-date-form').reset();
    }, 500);
}
