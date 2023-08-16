function site(animateSelector) {
    //!Site Animation */
        const elementsToShow = document.querySelectorAll(animateSelector);
        elementsToShow.forEach((element, index) => {
            setTimeout(() => {
            element.style.opacity = '1';
        }, 300 * index);
        });
}

export default site;