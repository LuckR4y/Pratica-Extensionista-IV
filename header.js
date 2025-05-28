let ultimoScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollAtual = window.scrollY;

  if (scrollAtual > ultimoScroll && scrollAtual > 100) {
    header.classList.add("header-animation");
  } else {
    header.classList.remove("header-animation");
  }

  ultimoScroll = scrollAtual;
});

window.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo-recarregar");
  if (logo) {
    logo.addEventListener("click", function () {
      window.location.href = window.location.origin + window.location.pathname;
    });
  }
});