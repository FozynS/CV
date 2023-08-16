function skills(skillsSelector, childSelector, webpackSelector, babelSelector, dotsSelector) {
    //!Skills Animation */
    const skillBlocks = document.querySelector(skillsSelector),
            skillChild = document.querySelectorAll(childSelector),
            skillWebpack = document.querySelector(webpackSelector),
            skillBabel = document.querySelector(babelSelector),
            dots = document.querySelector(dotsSelector)

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

    function showOtherSkills() {
        dots.addEventListener('click', () => {
            skillWebpack.classList.toggle('show');
            skillWebpack.classList.toggle('hidden');
    
            skillBabel.classList.toggle('show');
            skillBabel.classList.toggle('hidden');
        });
    }
    showOtherSkills();
}

export default skills;