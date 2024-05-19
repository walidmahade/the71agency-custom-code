import './style.css';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);
MotionPathPlugin.convertToPath('circle');

// --------- CIRCLE 1 ---------
gsap.to('#logo-finsweet', {
    motionPath: {
        path: '#circle-1',
        align: '#circle-1',
        alignOrigin: [0.5, 0.5],
        autoRotate: false
    },
    transformOrigin: '50% 50%',
    duration: 60,
    ease: 'none',
    repeat: -1
});

// --------- CIRCLE 2 ---------
gsap.to('#logo-gsap', {
    motionPath: {
        path: '#circle-2',
        align: '#circle-2',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0.5,
        end: 1.5
    },
    transformOrigin: '50% 50%',
    duration: 80,
    ease: 'none',
    repeat: -1
});
gsap.to('#logo-wized', {
    motionPath: {
        path: '#circle-2',
        align: '#circle-2',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0.9,
        end: 1.9
    },
    transformOrigin: '50% 50%',
    duration: 80,
    ease: 'none',
    repeat: -1
});

// --------- CIRCLE 3 ---------
gsap.to('#logo-xano', {
    motionPath: {
        path: '#circle-3',
        align: '#circle-3',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0.2,
        end: 1.2
    },
    transformOrigin: '50% 50%',
    duration: 120,
    ease: 'none',
    repeat: -1
});
gsap.to('#logo-zapier', {
    motionPath: {
        path: '#circle-3',
        align: '#circle-3',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0.5,
        end: 1.5
    },
    transformOrigin: '50% 50%',
    duration: 120,
    ease: 'none',
    repeat: -1
});
gsap.to('#logo-hubspot', {
    motionPath: {
        path: '#circle-3',
        align: '#circle-3',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0.8,
        end: 1.8
    },
    transformOrigin: '50% 50%',
    duration: 120,
    ease: 'none',
    repeat: -1
});
