function filling(blocksSelector, contactsSelector, dotsSelector) {
    //!Filling */
    const blocks = document.querySelectorAll(blocksSelector),
        contacts = document.querySelectorAll(contactsSelector),
        dots = document.querySelector(dotsSelector);

        function addHoverClass(item) {
            item.classList.add('hover');
        }

        function removeHoverClass(item) {
            item.classList.remove('hover');
        }

        function setupHoverListeners(elements) {
            elements.forEach(item => {
                item.addEventListener('mouseenter', () => addHoverClass(item));
                item.addEventListener('mouseleave', () => removeHoverClass(item));
            });
        }

        function fillItems() {
            setupHoverListeners(blocks);
            setupHoverListeners(contacts);
        
            dots.addEventListener('mouseenter', () => addHoverClass(dots));
            dots.addEventListener('mouseleave', () => removeHoverClass(dots));
        }
        fillItems();
}

export default filling;