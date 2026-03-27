// Função para obter o tema armazenado ou definir o padrão (dark)
function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

// Função para salvar o tema no localStorage
function setTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Função para aplicar o tema
function applyTheme(theme) {
    const body = document.body;
    
    // Remove as classes de tema anteriores
    body.classList.remove('dark-mode', 'light-mode');
    
    // Adiciona a classe do novo tema
    if (theme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }
    
    // Salva o tema no localStorage
    setTheme(theme);
    
    // Atualiza o botão
    updateThemeButton(theme);
    
    console.log('Tema alterado para:', theme);
}

// Função para alternar entre os temas
function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Função para atualizar o texto do botão
function updateThemeButton(theme) {
    const themeButton = document.getElementById('theme-toggle-btn');
    if (themeButton) {
        themeButton.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Aplicar o tema imediatamente (sem esperar DOMContentLoaded)
(function() {
    const theme = getTheme();
    applyTheme(theme);
})();

// Aplicar também quando a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const theme = getTheme();
    applyTheme(theme);
});

// Expor a função globalmente para garantir que o onclick funcione
window.toggleTheme = toggleTheme;

