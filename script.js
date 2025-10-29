document.addEventListener('DOMContentLoaded', function() {

    const themeSwitch = document.getElementById('meu-switch');
    const body = document.body;

    function toggleTheme() {
        // Verifica se o switch está MARCADO (checked = true)
        // MARCADO = Sol = MODO CLARO
        if (themeSwitch.checked) {
            // Se sim, ADICIONA a classe "light-mode"
            body.classList.add('light-mode');
        } else {
            // Se não (desmarcado = Lua = Modo Escuro), REMOVE a classe
            body.classList.remove('light-mode');
        }
    }

    // Adiciona o "ouvinte" de clique
    themeSwitch.addEventListener('change', toggleTheme);

    // (Não precisamos mais chamar a função no início, 
    // pois o estado padrão "sem classe" já é o nosso Modo Escuro)
});