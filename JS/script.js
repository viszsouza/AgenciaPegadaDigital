// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list")

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));


// Carrosel inicio
// Arrays de URLs das imagens de background para cada tamanho de tela
const desktopBackgrounds = [
    '/IMG/ImagesInicioDesktop/Branding.jpg',
    '/IMG/ImagesInicioDesktop/Follow-up.jpg',
    '/IMG/ImagesInicioDesktop/Performace.jpg',
    '/IMG/ImagesInicioDesktop/Produção de conteúdo.jpg',
    '/IMG/ImagesInicioDesktop/Tech.jpg'
];

const tabletBackgrounds = [
    '/IMG/ImagesInicioTablet/Branding.png',
    '/IMG/ImagesInicioTablet/Follow-up.png',
    '/IMG/ImagesInicioTablet/Performace.png',
    '/IMG/ImagesInicioTablet/Produção de conteúdo.png',
    '/IMG/ImagesInicioTablet/Tech.png'
];

const mobileBackgrounds = [
    '/IMG/ImagesInicioSmart/Branding.png',
    '/IMG/ImagesInicioSmart/Follow-up.png',
    '/IMG/ImagesInicioSmart/Performace.png',
    '/IMG/ImagesInicioSmart/Produção de conteúdo.png',
    '/IMG/ImagesInicioSmart/Tech.png'
];

const backgroundContainer = document.querySelector('.inicio');
const backgroundLayer = document.querySelector('.background-layer');

let currentIndexInicio = 0;
let currentImages = getBackgroundImages(); // Armazena as imagens corretas ao carregar

function getBackgroundImages() {
    const width = window.innerWidth;

    if (width > 1024) {
        return desktopBackgrounds;
    } else if (width >= 751 && width <= 1024) {
        return tabletBackgrounds;
    } else {
        return mobileBackgrounds;
    }
}

function changeBackground() {
    currentImages = getBackgroundImages(); // Atualiza em caso de resize
    currentIndexInicio = (currentIndexInicio + 1) % currentImages.length;
    const nextImage = currentImages[currentIndexInicio];

    // Aplica a nova imagem e animação
    backgroundLayer.classList.remove('visible');
    
    setTimeout(() => {
        backgroundLayer.style.backgroundImage = `url(${nextImage})`;
        backgroundLayer.classList.add('visible');
    }, 200); // Pequeno delay para resetar a opacidade antes de aplicar a nova
}

// Inicializa
backgroundLayer.style.backgroundImage = `url(${currentImages[0]})`;
backgroundLayer.classList.add('visible');

// Muda a cada 3s
setInterval(changeBackground, 3000);
// Coletando o observador da página
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting === true){
            entry.target.classList.add('show')
        }
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach( (element) => myObserver.observe(element))