function pulse(navSelector, navArrowSelector, cvSelector, cvArrowSelector) {
    // ! Pulsing */
    const Portfolio = document.querySelector(navSelector),
        arrowPortfolio = Portfolio.querySelector(navArrowSelector),
        CV = document.querySelector(cvSelector),
        arrowCV = CV.querySelector(cvArrowSelector);

        function applyMouseEvents(element, elementChild, classToRemove, classToAdd) {
            element.addEventListener('mouseenter', () => {
                elementChild.classList.remove(classToRemove);
            });
        
            element.addEventListener('mouseleave', () => {
                elementChild.classList.add(classToAdd);
            });
        }
        
        applyMouseEvents(Portfolio, arrowPortfolio, 'pulse', 'pulse');
        applyMouseEvents(CV, arrowCV, 'pulseCV', 'pulseCV');
        
}

export default pulse;