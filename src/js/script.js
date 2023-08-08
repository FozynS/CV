//!Filling */
const blocks = document.querySelectorAll('.section__nav_info'),
        contacts = document.querySelectorAll('.section__contact_list'),
        dots = document.querySelector('.section__skills_blocks-other')

blocks.forEach(item => {    
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover')
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover')
    })   
});
contacts.forEach(item => {    
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover')
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover')
    })   
});

dots.addEventListener('mouseenter', () => {
    dots.classList.add('hover')
})
dots.addEventListener('mouseleave', () => {
    dots.classList.remove('hover')
})

//! Pulsing */
// const Portfolio = document.querySelector('.section__nav_portfolio-container'),
//         arrowPortfolio = Portfolio.querySelector('.section__nav_portfolio-arrow'),
//         CV = document.querySelector('.section__nav_cv-container'),
//         arrowCV = CV.querySelector('.section__nav_cv-arrow')

// Portfolio.addEventListener('mouseenter', () => {
//     arrowPortfolio.classList.add('pulse')  
// })
// Portfolio.addEventListener('mouseleave', () => {
//     arrowPortfolio.classList.remove('pulse')
// })   

// CV.addEventListener('mouseenter', () => {
//     arrowCV.classList.add('pulse')  
// })
// CV.addEventListener('mouseleave', () => {
//     arrowCV.classList.remove('pulse')
// })   

//! About */
const hiddenText = document.querySelector('.section__nav_about-text-hidden'),
        btn = document.querySelector('.section__nav_about-btn-plus'),
        caseBtn = document.querySelector('.section__experience_case-btn-plus');

//! Turn */
btn.addEventListener('mouseenter', () => {
    btn.classList.add('u-turn')
    btn.classList.remove('return')
})
btn.addEventListener('mouseleave', () => {
    btn.classList.remove('u-turn')
    btn.classList.add('return')
})
caseBtn.addEventListener('mouseenter', () => {
    caseBtn.classList.add('u-turn')
    caseBtn.classList.remove('return')
})
caseBtn.addEventListener('mouseleave', () => {
    caseBtn.classList.remove('u-turn')
    caseBtn.classList.add('return')
})

//!Open&CLose Text */
function openCloseText() {
    hiddenText.classList.toggle('hide');
}
btn.addEventListener('click', () => openCloseText(hiddenText))

//!Skills Animation */
const skillBlocks = document.querySelector('.section__skills_blocks-container'),
    skillChild = document.querySelectorAll('.child, .section__skills_text-title, .section__skills_text'),
    skillWebpack = document.querySelector('.section__skills_blocks-webpack'),
    skillBabel = document.querySelector('.section__skills_blocks-babel');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Примерный процент видимости элемента
};

function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
            entry.target.classList.add('element-show');
        }, index * 200);    // Задержка между появлением элементов (в миллисекундах)
    } else {
        entry.target.classList.remove('element-show');
    }
    });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

skillChild.forEach((child) => {
    observer.observe(child);
});

dots.addEventListener('click', () => {
    skillWebpack.classList.toggle('show');
    skillWebpack.classList.toggle('hidden');
    
    skillBabel.classList.toggle('show');
    skillBabel.classList.toggle('hidden');
});

//!Site Animation */
document.addEventListener('DOMContentLoaded', function () {
    const elementsToShow = document.querySelectorAll('.animate-on-load');
    elementsToShow.forEach((element, index) => {
        setTimeout(() => {
        element.style.opacity = '1';
      }, 300 * index);
    });
});

//!Sticks Animation*/
function toggleStickHackaton() {
    const stickHack = document.querySelector('.section__experience_hackaton'),
        stick = document.querySelector('.stick-hackaton');

    stickHack.addEventListener('mouseover', function () {
        stick.classList.add('hovered');
    });
    stickHack.addEventListener('mouseout', function () {
        stick.classList.remove('hovered');
    });
}
toggleStickHackaton();

function toggleStickShogushi() {
    const stickShog = document.querySelector('.section__experience_shogushi'),
        stick = document.querySelector('.stick-shogushi');
    
    stickShog.addEventListener('mouseover', function () {
        stick.classList.add('hovered');
    });
    stickShog.addEventListener('mouseout', function () {
        stick.classList.remove('hovered');
    });
}
toggleStickShogushi()



