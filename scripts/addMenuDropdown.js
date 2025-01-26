document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.createElement("span");
    hamburger.classList.add("hamburger");
    hamburger.textContent = "☰";

    const header = document.querySelector("#header");
    const navDesktop = document.querySelector(".site-navigation");
    const navMobile = document.querySelector(".site-navigation-mobile");

    // Add the hamburger menu to the header for mobile
    header.insertBefore(hamburger, navDesktop);

    // Ensure the mobile navigation is hidden by default
    navMobile.style.display = "none";

    // Toggle mobile menu visibility when hamburger is clicked
    hamburger.addEventListener("click", () => {
        const isMobileVisible = navMobile.style.display === "block";
        navMobile.style.display = isMobileVisible ? "none" : "block";

        // Hide the desktop menu on mobile view
        navDesktop.style.display = "none";
    });
});
