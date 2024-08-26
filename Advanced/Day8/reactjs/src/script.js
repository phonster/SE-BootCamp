function attachHeroParallax() {
    window.addEventListener('scroll', function () {
        const parallax = document.querySelector('.parallax-section');
        let scrollPosition = window.pageYOffset;

        // Adjust background position for parallax effect
        parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    });
}