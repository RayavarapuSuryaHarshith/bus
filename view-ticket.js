document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('view-ticket-btn').addEventListener('click', viewTicket);
});

function viewTicket() {
  const bookingId = document.getElementById('view-booking-id').value.trim();
  const ticketDetails = document.getElementById('ticket-details');

  // For demo/demo purposes, use some dummy/placeholder booking IDs and data
  if (bookingId === "ABC123") {
    ticketDetails.innerHTML = `
      <strong>Booking ID:</strong> ABC123<br>
      <strong>Name:</strong> John Doe<br>
      <strong>Departure:</strong> New York<br>
      <strong>Arrival:</strong> Washington D.C.<br>
      <strong>Date:</strong> 2024-07-23<br>
      <strong>Time:</strong> 10:00 AM<br>
      <strong>Seat:</strong> 12A<br>
      <strong>Bus No:</strong> 001
    `;
  } else if (bookingId === "XYZ789") {
    ticketDetails.innerHTML = `
      <strong>Booking ID:</strong> XYZ789<br>
      <strong>Name:</strong> Jane Smith<br>
      <strong>Departure:</strong> Boston<br>
      <strong>Arrival:</strong> New York<br>
      <strong>Date:</strong> 2024-07-25<br>
      <strong>Time:</strong> 2:00 PM<br>
      <strong>Seat:</strong> 18B<br>
      <strong>Bus No:</strong> 002
    `;
  } else if (bookingId === "") {
    ticketDetails.textContent = "Please enter your booking ID.";
  } else {
    ticketDetails.textContent = "No ticket details found for the given Booking ID.";
  }
}
