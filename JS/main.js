const slider = document.querySelector(".slider");
const imgSlider = document.querySelectorAll('.slider img');

//Buttons
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');


//Counter
let count = 0;
const size = imgSlider[0].clientWidth;

//Listeners
nextBtn.addEventListener('click', function nextStep(){
    if(count >= 1) return;
    count++;
    slider.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevBtn.addEventListener('click', function preStep() {
    if(count <= 0) return;
    count--;
    slider.style.transform = 'translateX(' + (-size * count) + 'px)';
});


//Animation NavBar
const linkMobile = document.querySelector('.link-mobile');
const menu = document.querySelector('.menu');
linkMobile.addEventListener('click', () => {
    menu.classList.toggle('appear');
});


function inter(){
    const secaoProd = document.querySelector('#product');
    secaoProd.classList.add('chama');
};

function downToTop(){
    const form = document.querySelector('.container-form');
    form.classList.toggle('comeBack');
}



//Message when the button is clicked
const response = document.querySelector('#para'); 

const but = document.querySelector('#btn');

but.addEventListener('click', (event) => {
    event.preventDefault();
    const paragraph = document.createElement('p');
    const content = document.createTextNode('Your message has been sent successfully');
    paragraph.appendChild(content);
    response.appendChild(paragraph);
    response.classList.add('first-box');
});
   




//All called functions here
const app = () =>{
    inter();
    downToTop();
}

app();  




