// Sample user credentials (for demonstration purposes)
const validEmail = "user@example.com";
const validPassword = "password123";

// Get HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");

// Add a click event listener to the login button
loginButton.addEventListener("click", () => {
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
        // Successful login
        alert("LOgin Successful");
    } else {
        // Failed login
        alert("login failed");
    }
});

