document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.querySelector(".closeBtn");

    // Show the modal when login button is clicked
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
    });

    // Close the modal when close button is clicked
    closeBtn.addEventListener("click", function() {
        loginModal.style.display = "none";
    });

    // Close the modal if outside of modal content is clicked
    window.addEventListener("click", function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});

// login


document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".modal-content form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Stop form from submitting to server
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can do real authentication here using fetch or XMLHttpRequest to your server.
        // For this example, we just do a dummy check:
        if (username === "admin" && password === "password123") {
            alert("Successfully logged in!");
            // Maybe redirect to a dashboard or another page
            // window.location.href = '/dashboard';
        } else {
            alert("Incorrect username or password.");
        }
    });
});