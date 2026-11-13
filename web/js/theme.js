const themeSwitch = document.querySelector(".themeswitch");
const page = document.documentElement;

function setTheme(theme) {
    page.dataset.theme = theme;
    themeSwitch.setAttribute("aria-checked", String(theme === "dark"));
}

let startingTheme = "dark";
try {
    if (localStorage.getItem("portfolio-theme") === "light") {
        startingTheme = "light";
    }
} catch {
    // The switch still works when browser storage is unavailable.
}
setTheme(startingTheme);

themeSwitch.addEventListener("click", function () {
    const theme = page.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    try {
        localStorage.setItem("portfolio-theme", theme);
    } catch {
        // Keep this choice for the current page.
    }
});

if (window.anime && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const projects = document.querySelector(".projectsgrid");
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            window.anime({
                targets: ".projectsgrid > span",
                translateY: [12, 0],
                opacity: [0.65, 1],
                duration: 400,
                delay: window.anime.stagger(70),
                easing: "easeOutQuad"
            });
            observer.disconnect();
        }
    });
    if (projects) {
        observer.observe(projects);
    }
}
