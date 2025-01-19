function createRandomNotebookPaper(content, link) {
    // Create a new div element for the notebook paper
    const paper = document.createElement('div');
    paper.className = 'notebook-paper';

    let bold_det = Math.random() 
    if (bold_det > 0.7) {
      paper.innerHTML = `<p class="notebook-paper-bold-text">${content}</p>`;
    } else {
      paper.innerHTML = `<p class="notebook-paper-normal-text">${content}</p>`;
    }

    // Generate random position offsets and rotation
    const randomTop = (Math.random() -0.5) * 1200 + 600; // Random offset between -25px and 25px
    const randomLeft = (Math.random() -0.5) * 1000 + 400; // Random offset between -25px and 25px
    const randomRotation = (Math.random() -0.5 ) * 90; // Random rotation between -10 and 10 degrees

    // Apply styles for position and rotation
    paper.style.top = `${50 + randomTop}px`; // Ensure there's enough space from the top
    paper.style.left = `${50 + randomLeft}px`; // Ensure there's enough space from the left
    paper.style.transform = `rotate(${randomRotation}deg)`; // Apply random rotation
    paper.style.zIndex = `${Math.floor(Math.random() * 10)}`; // Random stacking order
  
    // Add hover effects
    paper.addEventListener('mouseover', () => {
          console.log(`Hovered element z-index: ${window.getComputedStyle(paper).zIndex}`);
          paper.style.zIndex = 99;
      });
      paper.addEventListener('mouseout', () => {
          paper.style.zIndex = Math.floor(Math.random() *10);
      });

    // Add links
    if (link) {
      paper.addEventListener('click', () => {
          window.location.href = link
      });
    }

    return paper;
  }

function addNotebookPapers() {
    const contents = [
        ['This important website contains shocking secrets about the Get A Clue 2025 organization.', 'gac-history.html'],
        ['These secrets make up the keychain that holds the key that unlocks the door that hides the mystery.', 'secrets.html'],
        ['To properly collect the necessary evidence, you\'ll need to use your resources carefully.', 'contact.html'],
        ['Dedicated volunteers will review all of the needed research, and with each review, seemingly more evidence comes to light.\nResearch is a word here which means search again, or read thoroughly, at least twice.', 'research.html'],
        ['THE FIRST OF TWELVE CLUES WILL BE SERVED AT THE COUCH BUILDING ON APRIL THE FOURTH', 'countdown.html'],
        ['TO REGISTER FOR GET A CLUE 2025, PLEASE REVIEW THIS NOTE', 'registration.html'],
    ];

    // Add the notebook-paper elements to the body
    contents.forEach(([content, link]) => {
        const randomBreaks = Math.floor(Math.random() * 10) + 1;
        let breaks = '';
        for (let i = 0; i < randomBreaks; i++) {
            breaks += '<br>';
        }
        content = breaks + content;
        const paper = createRandomNotebookPaper(content, link);

        document.body.appendChild(paper);
    });
}

// Call the function to generate the notebook pages
window.onload = addNotebookPapers;