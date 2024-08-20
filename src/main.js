import './styles/main.css';
import './styles/main.pcss';
import './styles/preview.pcss';
import './preview'

function handleOrientationChange() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
        // Update layout for portrait
        document.body.classList.add('portrait-mode');
        document.body.classList.remove('landscape-mode');
    } else {
        // Update layout for landscape
        document.body.classList.add('landscape-mode');
        document.body.classList.remove('portrait-mode');
    }
}

window.addEventListener("orientationchange", handleOrientationChange);