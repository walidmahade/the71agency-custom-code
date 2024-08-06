import './style.css';
import { setup } from './stars.ts';
import { initHeaderAnimation } from './header.ts';
import { solarSystemAnimation } from './solarSystemAnimation.ts';

// on page load call setup function
window.onload = () => {
    setup();
    // gsap header animation
    initHeaderAnimation();
    // gsap solar system animation
    solarSystemAnimation();
};
