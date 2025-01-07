const title = document.getElementById("title--name");
const textos = ["Programador", "Frontend", "Juan José"];
let index = 0;

setInterval(() => {
  title.innerText = textos[index];
  index = index < textos.length - 1 ? index + 1 : 0;
}, 5000);
