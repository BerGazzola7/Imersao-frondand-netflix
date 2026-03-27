// Guarda o perfil ativo no localStorage para leitura em catalogo.html
window.addEventListener('DOMContentLoaded', () => {
  const profileLinks = document.querySelectorAll('.profiles .profile a');

  profileLinks.forEach(link => {
    link.addEventListener('click', event => {
      const profile = link.closest('.profile');
      const imageEl = profile?.querySelector('img');
      const nameEl = profile?.querySelector('figcaption');

      if (imageEl && nameEl) {
        localStorage.setItem('perfilAtivoNome', nameEl.textContent.trim());
        localStorage.setItem('perfilAtivoImagem', imageEl.src);
      }
      // segue para a página normalmente
    });
  });
});
