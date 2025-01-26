document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".site-navigation");
    const menu = nav.querySelector("ul");

    // Find all dropdowns and move their <li> children to the main menu
    const dropdowns = menu.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        // Move each <li> inside the dropdown to the top-level <ul>
        const dropdownItems = dropdown.querySelectorAll("li");
        dropdownItems.forEach((item) => {
            menu.appendChild(item.cloneNode(true)); // Clone and append
        });
        dropdown.remove(); // Remove the original dropdown <ul>
    });

    // Remove the "Explore" item from the menu
    const exploreItem = menu.querySelector("li > a[href='#']").parentElement;
    if (exploreItem) {
        exploreItem.remove();
    }

    // Add hamburger menu for mobile
    const hamburger = document.createElement("span");
    hamburger.classList.add("hamburger");
    hamburger.textContent = "☰";
    nav.insertBefore(hamburger, menu);

    // Toggle the mobile menu on hamburger click
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.display = menu.classList.contains("open") ? "block" : "none";
    });
});
