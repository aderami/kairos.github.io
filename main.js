
window.onload = () => {
    anime({
        targets: '#KAIROS path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 10000,
        delay: function(el, i) { return i * 250},
        direction: 'alternate',
        loop: false
    })
    gsap.to("span", {
        opacity: 0,
        delay: 3.7
    })
    gsap.to(".volet div", {
        top: "-100%",
        delay: 4,
        stagger: 0.5
    })
    gsap.to(".volet", {
        display: "none",
        delay: 5
    })
}
