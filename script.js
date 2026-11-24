
/* =========================
   1. NAVIGATION ACTIVE LINK
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


/* =========================
   2. SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, " +
    ".project-card, .education-card, .strength-card, " +
    ".contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   3. FOOTER YEAR
========================= */

const footerText = document.querySelector("footer p");

footerText.innerHTML =
    `&copy; ${new Date().getFullYear()} Sriram | ` +
    `Designed & Developed with HTML, CSS and JavaScript.`;
