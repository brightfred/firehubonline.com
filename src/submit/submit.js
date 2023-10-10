// This is just a basic form handling example. In real applications, you would send this to your backend.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submitPostForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const category = document.getElementById("category").value;
        const content = document.getElementById("content").value;

        // Send the post data to your backend, e.g., using fetch
        console.log({title, category, content});
        alert("Post submitted! Thank you.");
        
        // Reset form fields after submission for better user experience
        form.reset();
    });
});