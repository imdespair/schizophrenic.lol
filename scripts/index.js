document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar__link");

    function navigateTo(url) {
        history.pushState(null, null, url);
        
        // Redirect to the target URL
        window.location.href = url;
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetUrl = link.getAttribute("href");
            navigateTo(targetUrl);
        });
    });

    window.addEventListener("popstate", function (event) {
    });
});
