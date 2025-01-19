function addNotebookPage() {
    // Get the main container for the notebook pages
    const notes = document.getElementsByClassName('note-container');

    for (let noteContainer of notes) {
        // Get dimensions
        const containerHeight = noteContainer.offsetHeight;
        const containerWidth = noteContainer.offsetWidth;

        // Create a new notebook page
        const newPage = document.createElement('div');
        newPage.classList.add('notebook-paper');
        newPage.classList.add('notebook-paper-a')
        newPage.classList.add('notebook-paper.background');

        // Optional: Add some content to the new page
        newPage.innerHTML = '<p></p>';

        // Set random positioning for the new page
        const randomX = Math.floor((Math.random() -0.5) * (containerWidth + 1));
        const randomY = Math.floor(Math.random() * (containerHeight / 2  + 1));
        const randomRotation = Math.random() * 360; // Random rotation (-10 to 10 degrees)

        newPage.style.position = 'absolute';
        newPage.style.transform = `translate(${randomX}%, ${-randomY}%) rotate(${randomRotation}deg)`;
        newPage.style.zIndex = 0; // Random z-index to place behind/above others

        noteContainer.appendChild(newPage)
    }
}

// Call the function to add a few pages dynamically
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 100; i++) {
        addNotebookPage();
    }
});