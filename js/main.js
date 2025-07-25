document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.theme-switcher-btn').addEventListener("click", () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'purple') {
            html.setAttribute('data-theme', 'brown');
        } else {
            html.setAttribute('data-theme', 'purple');
        }

        // document.documentElement.setAttribute('data-theme', 'brown');
    });
});
