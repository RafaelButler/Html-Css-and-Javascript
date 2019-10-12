const menu = document.querySelector('#links-menu');

const a = document.createElement('a');
const texto = document.createTextNode("Help");
a.appendChild(texto);
const att = document.createAttribute("href");
att.value = "#";
a.setAttributeNode(att);
a.classList.add("help");
menu.appendChild(a);


//Section yellow

const secao = document.getElementById('anima').onmousemove = e => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
}
