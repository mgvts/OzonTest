import './styles/main.css';
import './styles/main.pcss';
import './styles/preview.pcss';
import './preview'

function handleOrientationChange() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
        // Handle portrait mode
        console.log("Portrait mode detected");
        // Update layout for portrait
        document.body.classList.add('portrait-mode');
        document.body.classList.remove('landscape-mode');
    } else {
        // Handle landscape mode
        console.log("Landscape mode detected");
        // Update layout for landscape
        document.body.classList.add('landscape-mode');
        document.body.classList.remove('portrait-mode');
    }
}

// Add event listener for orientation changes
window.addEventListener("orientationchange", handleOrientationChange);

// Call the function on load to set initial state
handleOrientationChange();