var buttons = document.querySelectorAll('input[type="radio"]');
buttons.forEach((buttons) => {
    buttons.addEventListener('click', function(e) {
        var theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme.toLowerCase());
    });
});