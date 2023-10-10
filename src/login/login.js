// Get the modal and close button elements
var modal = document.getElementById('loginModal');
var closeBtn = document.getElementById('closeBtn');
var loginBtn = document.getElementById('loginBtn');

// Open the modal when the "Login" link is clicked
loginBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
