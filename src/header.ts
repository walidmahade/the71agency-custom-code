export function initHeaderAnimation() {
    const $header = $('.nav_fixed');

    const showAnim = gsap
        .from($header, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        })
        .progress(1);

    ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        markers: true,
        onUpdate: self => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
    });
}
