document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-feedback-btn').addEventListener('click', submitFeedback);
});

function submitFeedback() {
    const name = document.getElementById('feedback_name').value.trim();
    const email = document.getElementById('feedback_email').value.trim();
    const ratingEls = document.getElementsByName('rating');
    let rating = null;
    const comments = document.getElementById('feedback_comments').value.trim();
    const confirmation = document.getElementById('feedback-confirmation');

    // Get selected rating
    for (const r of ratingEls) {
        if (r.checked) {
            rating = r.value;
            break;
        }
    }

    // Basic validation
    if (!name) {
        confirmation.textContent = 'Please enter your name.';
        confirmation.style.color = 'red';
        return;
    }
    if (!email) {
        confirmation.textContent = 'Please enter your email.';
        confirmation.style.color = 'red';
        return;
    }
    if (!rating) {
        confirmation.textContent = 'Please select a rating.';
        confirmation.style.color = 'red';
        return;
    }

    // Here you can add code to send the feedback data to a server if you want

    // For now, just show confirmation and clear form
    confirmation.textContent = 'Thank you for your feedback!';
    confirmation.style.color = 'green';

    // Clear form inputs
    document.getElementById('feedback-form').reset();
}
