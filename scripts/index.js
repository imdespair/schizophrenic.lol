// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    var navLinks = document.querySelectorAll(".navbar__link");

    // Function to handle navigation
    function navigateTo(url) {
        // Use the pushState method to change the URL without reloading the page
        history.pushState(null, null, url);

        // Call your function to load content or update the UI as needed
        loadContent(url);
    }

    // Function to load content based on the URL
    function loadContent(url) {
        // You can implement logic here to fetch and display the content for the given URL
        // For simplicity, you can just log the URL to the console for now
        console.log("Loading content for URL:", url);
    }

    // Attach click event listeners to the navigation links
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target URL from the link's href attribute
            var targetUrl = link.getAttribute("href");

            // Navigate to the target URL
            navigateTo(targetUrl);
        });
    });

    // Listen for popstate event to handle browser back/forward button clicks
    window.addEventListener("popstate", function (event) {
        // Get the URL from the event state
        var url = location.pathname;

        // Load content for the URL
        loadContent(url);
    });
});
