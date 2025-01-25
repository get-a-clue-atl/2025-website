document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.createElement("span");
    hamburger.classList.add("hamburger");
    hamburger.textContent = "☰";

    const nav = document.querySelector(".site-navigation");
    const menu = nav.querySelector("ul");

    // Add the hamburger menu to the header
    nav.insertBefore(hamburger, menu);

    // Ensure all dropdown menus are hidden by default
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        dropdown.style.display = "none";
    });

    // Toggle the mobile menu on hamburger click
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // Handle dropdown behavior on mobile
    const dropdownToggles = document.querySelectorAll(".site-navigation li > a[href='#']");
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown")) {
                // Toggle dropdown visibility
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            }
        });
    });
});