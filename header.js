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