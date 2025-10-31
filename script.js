document.addEventListener('DOMContentLoaded', function() {

    const themeSwitch = document.getElementById('meu-switch');
    const body = document.body;

    function toggleTheme() {
        if (themeSwitch.checked) {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    }
    
    themeSwitch.addEventListener('change', toggleTheme);
});