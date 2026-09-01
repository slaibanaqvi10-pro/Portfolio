/* =========================================================
   LAIBA BATOOL PORTFOLIO
   UNIVERSAL NAVIGATION SCRIPT
========================================================= */


/* =========================================================
   AUTOMATIC ACTIVE NAV LINK
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase() || "index.html";


    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach(function (link) {

        const linkPage =
            link
                .getAttribute("href")
                .split("/")
                .pop()
                .toLowerCase();


        link.classList.remove("active");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   NAVBAR SCROLL (shrinks the floating pill navbar)
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar =
        document.getElementById(
            "navbar"
        );

    if (!navbar) return;

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }
    );

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const burger =
            document.getElementById(
                "navBurger"
            );

        const nav =
            document.getElementById(
                "navLinks"
            );


        if (!burger || !nav) return;


        burger.addEventListener(
            "click",
            function () {

                const isOpen =
                    nav.classList.toggle(
                        "open"
                    );


                burger.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* Close mobile menu after clicking link */

        nav.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove(
                            "open"
                        );

                        burger.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }
);


/* =========================================================
   LAVENDER MOUSE POINTER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const mouseGlow =
            document.getElementById(
                "mouseGlow"
            );


        if (!mouseGlow) return;


        let mouseX = 0;
        let mouseY = 0;

        let glowX = 0;
        let glowY = 0;


        document.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            }
        );


        function animateGlow() {

            glowX +=
                (mouseX - glowX) * 0.12;

            glowY +=
                (mouseY - glowY) * 0.12;


            mouseGlow.style.left =
                glowX + "px";

            mouseGlow.style.top =
                glowY + "px";


            requestAnimationFrame(
                animateGlow
            );

        }


        animateGlow();

    }
);


/* =========================================================
   DARK MODE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        if (!themeToggle) return;


        const savedTheme =
            localStorage.getItem(
                "portfolioTheme"
            );


        if (savedTheme === "dark") {

            document.documentElement
                .setAttribute(
                    "data-theme",
                    "dark"
                );

            themeToggle.textContent =
                "☀️";

        }


        themeToggle.addEventListener(
            "click",
            function () {

                const currentTheme =
                    document.documentElement
                        .getAttribute(
                            "data-theme"
                        );


                if (
                    currentTheme === "dark"
                ) {

                    document.documentElement
                        .removeAttribute(
                            "data-theme"
                        );

                    themeToggle.textContent =
                        "🌙";

                    localStorage.setItem(
                        "portfolioTheme",
                        "light"
                    );

                } else {

                    document.documentElement
                        .setAttribute(
                            "data-theme",
                            "dark"
                        );

                    themeToggle.textContent =
                        "☀️";

                    localStorage.setItem(
                        "portfolioTheme",
                        "dark"
                    );

                }

            }
        );

    }
);


/* =========================================================
   FOOTER YEAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const year =
            document.getElementById(
                "year"
            );


        if (year) {

            year.textContent =
                new Date()
                    .getFullYear();

        }

    }
);


/* =========================================================
   SCROLL TO TOP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const scrollTop =
            document.getElementById(
                "scrollTop"
            );


        if (!scrollTop) return;


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 400
                ) {

                    scrollTop.classList.add(
                        "show"
                    );

                } else {

                    scrollTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        scrollTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);