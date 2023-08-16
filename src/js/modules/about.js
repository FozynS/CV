function about(hiddenSelector, btnSelector, caseSelector) {
    //! About */
    const hiddenText = document.querySelector(hiddenSelector),
            btn = document.querySelector(btnSelector),
            caseBtn = document.querySelector(caseSelector);

    //! Turn */
    function applyTurnLogic(element) {
        element.addEventListener('mouseenter', () => {
            element.classList.add('u-turn');
            element.classList.remove('return');
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('u-turn');
            element.classList.add('return');
        });
    }
    
    function turnItems() {
        applyTurnLogic(btn);
        applyTurnLogic(caseBtn);
    }
    turnItems();
    
    //!Open&CLose Text */
    function openCloseText() {
        hiddenText.classList.toggle('hide');
    }
    btn.addEventListener('click', () => openCloseText(hiddenText))
}

export default about;