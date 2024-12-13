accomplishments();

function applyBackground() {
    const savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }
}

// Accomplishments page code
function accomplishments() {
    applyBackground();
}