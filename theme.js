document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) {
        return;
    }

    // Get previously selected theme
    const savedTheme = localStorage.getItem("thirdy-portfolio-theme");

    // Apply saved theme
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    updateThemeButton();


    // Dark / Light button
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem(
                "thirdy-portfolio-theme",
                "light"
            );

        } else {

            localStorage.setItem(
                "thirdy-portfolio-theme",
                "dark"
            );
        }

        updateThemeButton();
    });


    function updateThemeButton() {

        if (document.body.classList.contains("light-mode")) {

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i> Dark Mode';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

        } else {

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i> Light Mode';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );
        }
    }

});
