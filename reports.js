document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generate-report-btn').addEventListener('click', generateReport);
});

function generateReport() {
  const reportType = document.getElementById('report-type').value;
  const outputDiv = document.getElementById('report-output');

  let html = '';

  if (reportType === 'booking') {
    html = `
      <h3>Booking Report</h3>
      <table border="1" cellpadding="6">
        <tr>
          <th>Bus ID</th>
          <th>Date</th>
          <th>Bookings</th>
        </tr>
        <tr>
          <td>001</td>
          <td>2024-07-20</td>
          <td>29</td>
        </tr>
        <tr>
          <td>002</td>
          <td>2024-07-20</td>
          <td>35</td>
        </tr>
      </table>
    `;
  } else if (reportType === 'revenue') {
    html = `
      <h3>Revenue Report</h3>
      <table border="1" cellpadding="6">
        <tr>
          <th>Bus ID</th>
          <th>Date</th>
          <th>Revenue</th>
        </tr>
        <tr>
          <td>001</td>
          <td>2024-07-20</td>
          <td>$725</td>
        </tr>
        <tr>
          <td>002</td>
          <td>2024-07-20</td>
          <td>$1050</td>
        </tr>
      </table>
    `;
  } else {
    html = "<p>No data found.</p>";
  }

  outputDiv.innerHTML = html;
}
