document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleLink = document.getElementById('toggle-link');

    // Show login by default
    loginForm.style.display = "block";
    signupForm.style.display = "none";

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
            toggleLink.innerHTML = "Sign up here";
            toggleLink.parentElement.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign up here</a>`;
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            toggleLink.innerHTML = "Login here";
            toggleLink.parentElement.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login here</a>`;
        }
        // To ensure toggle keeps working after replacing parent content
        document.getElementById('toggle-link').addEventListener('click', arguments.callee);
    });
});
