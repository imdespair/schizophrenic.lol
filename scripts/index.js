// scripts/index.js

$(document).ready(function () {
    // Function to clean links
    function cleanLinks() {
        // Get all links with class navbar__link
        var links = $('.navbar__link');

        // Iterate through each link
        links.each(function () {
            // Get the current href attribute
            var href = $(this).attr('href');

            // Remove the .html extension if it exists
            href = href.replace('.html', '');

            // Update the href attribute with the cleaned link
            $(this).attr('href', 'https://schizophrenic.lol' + href);
        });
    }

    // Call the cleanLinks function when a link is clicked
    $('.navbar__link').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        cleanLinks(); // Clean the links
        window.location = $(this).attr('href'); // Navigate to the cleaned link
    });
});
