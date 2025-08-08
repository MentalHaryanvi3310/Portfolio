const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});


const activePage = () =>{
    navLinks.forEach(link =>{
        link.classList.remove('active')
    })
    sections.forEach(section =>{
        section.classList.remove('active', 'slide-out')
    })
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

const transitionToSection = (targetIndex) => {
    const currentSection = document.querySelector('section.active');
    const targetSection = sections[targetIndex];
    
    if (currentSection && currentSection !== targetSection) {
        // Add slide-out class to current section
        currentSection.classList.add('slide-out');
        
        // After transition, remove active and slide-out classes
        setTimeout(() => {
            currentSection.classList.remove('active', 'slide-out');
            
            // Activate target section
            targetSection.classList.add('active');
        }, 400); // Half of the transition duration
    } else if (!currentSection) {
        // If no current section, just activate target
        targetSection.classList.add('active');
    }
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () =>{
        if (!link.classList.contains('active')){
            activePage();
            link.classList.add('active');
            transitionToSection(idx);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active');
        transitionToSection(0);
    }
});


const resumeBtns =document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails=document.querySelectorAll(('.resume-detail'));

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () =>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails =document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index*2}rem))`;

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index =0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});
