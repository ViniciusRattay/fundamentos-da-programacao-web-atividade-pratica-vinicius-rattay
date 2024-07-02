// scripts.js

// Espera o documento carregar totalmente
document.addEventListener("DOMContentLoaded", (event) => {
  // Menu de navegação com rolagem suave
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    // Adiciona um evento de clique ao link
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      // Faz a página rolar suavemente até a sessão
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Seleciona o botão de voltar ao topo
  const voltarTopoBtn = document.getElementById("voltar-topo");
  // Adiciona um evento de clique ao botão
  voltarTopoBtn.addEventListener("click", () => {
    // Faz a página rolar suavemente até o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
