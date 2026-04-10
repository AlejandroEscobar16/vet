
function appearAnimation(entries){
    entries.forEach(entry => {
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting);

    });
}

const options ={
    root: null,
    rootMargin: '0px',
    thrshold: 1
}

const observer = new IntersectionObserver(appearAnimation, options);
const objetos = document.querySelectorAll('.appear');
//const element = document.querySelector('.appear');

objetos.forEach(image =>{

    observer.observe(image);

});
