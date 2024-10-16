// Magnetic

function applyMagneticEffect(element) {
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    element.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = element.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.5);
        yTo(y * 0.5);
    });

    element.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
    });
}

// Usage
const elements = document.querySelectorAll('.magnetic');

elements.forEach((element) => {
    applyMagneticEffect(element);
});



