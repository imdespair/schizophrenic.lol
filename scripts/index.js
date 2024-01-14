// scripts/index.js

$(document).ready(function () {
    // Function to clean links
    function cleanLinks() {
        // Select links directly by class, avoiding unnecessary elements
        var links = $('.navbar__link');

        // Loop through links and update href attributes
        links.each(function () {
            var originalHref = $(this).attr('href');

            // Use a single replace call to remove .html extension
            var cleanedHref = originalHref.replace(/\.html$/, '');

            // Update the href attribute with the cleaned link
            $(this).attr('href', 'https://schizophrenic.lol' + cleanedHref);
        });
    }

    // Call the cleanLinks function when the document is ready
    cleanLinks();

    // Call the cleanLinks function when a link is clicked
    $('.navbar__link').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        cleanLinks(); // Clean the links
        window.location.href = $(this).attr('href'); // Navigate to the cleaned link
    });

    // Reclean links when the orientation changes on mobile devices
    $(window).on('orientationchange', function () {
        cleanLinks();
    });
});
