const title = document.getElementById("title--name");
const subtitle = document.getElementById("home--title");
const textos = ["Programador", "Frontend", "Juan José"];
let index = 0;

function cambiarTextoConAnimacion() {
  title.style.opacity = 0;
  subtitle.style.opacity = 0;

  setTimeout(() => {
    title.innerText = textos[index];
    subtitle.innerText = `Hola, soy ${textos[index]}`;
    index = index < textos.length - 1 ? index + 1 : 0;

    title.style.opacity = 1;
    subtitle.style.opacity = 1;
  }, 1000);
}

setInterval(cambiarTextoConAnimacion, 5000);
