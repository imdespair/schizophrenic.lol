// scripts/index.js

$(document).ready(function () {
    // Function to clean links
    function cleanLink(link) {
        return link.replace(/\.html$/, '');
    }

    // Function to clean all links
    function cleanLinks() {
        $('.navbar__link').each(function () {
            var originalHref = $(this).attr('href');
            $(this).attr('href', 'https://schizophrenic.lol' + cleanLink(originalHref));
        });
    }

    // Call the cleanLinks function when the document is ready
    cleanLinks();

    // Call the cleanLinks function when a link is clicked
    $('.navbar__link').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = cleanLink($(this).attr('href')); // Navigate to the cleaned link
    });

    // Reclean links when the orientation changes on mobile devices
    $(window).on('orientationchange', cleanLinks);
});
