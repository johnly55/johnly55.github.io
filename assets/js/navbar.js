const navbarEl = document.getElementById('navbar');
const navHeight = navbarEl.offsetHeight;

const returnNavEl = document.getElementById('return-nav')
const returnNavSize = returnNavEl.offsetHeight;
const offsetHeight = 180;
const offsetWidth = 70;

// Shrink navbar after scrolling past the intro background.
// Hide or show upward arrow to redirect to top of page.
document.addEventListener('scroll', (event) => {
    if(window.scrollY + navHeight > window.innerHeight){
        navbarEl.classList.add('navbar-shrink');
        returnNavEl.classList.remove('invisible');
    }
    else{
        navbarEl.classList.remove('navbar-shrink');
        returnNavEl.classList.add('invisible');
    }
});