const title = document.getElementById("title--name");
const subtitle = document.getElementById("home--title");
const textos = [
  { text: "Programador", color: "#6bffd0" },
  { text: "Frontend", color: "#6bffd0" },
  { text: "Juan Jose", color: "#6bffd0" },
];
let index = 0;

function cambiarTextoConAnimacion() {
  title.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  subtitle.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  title.style.opacity = "0";
  title.style.transform = "translateY(-20px)";
  subtitle.style.opacity = "0";
  subtitle.style.transform = "translateY(-20px)";

  setTimeout(() => {
    title.innerHTML = title.innerHTML.replace(
      /<span.*?>.*?<\/span>/,
      `<span style="color: ${textos[index].color};">${textos[index].text}</span>`
    );
    subtitle.innerHTML = subtitle.innerHTML.replace(
      /<span.*?>.*?<\/span>/,
      `<span style="color: ${textos[index].color};">${textos[index].text}</span>`
    );

    index = (index + 1) % textos.length;

    title.style.transform = "translateY(20px)";
    subtitle.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
    });
  }, 500);
}

setInterval(cambiarTextoConAnimacion, 5000);
