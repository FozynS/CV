function sticksAnimation(hackSelector, stickHackSelector, shogushiSelector, stickShogushiSelector) {
    //!Sticks Animation*/
    function toggleStickHackaton() {
        const stickHack = document.querySelector(hackSelector),
            stick = document.querySelector(stickHackSelector);

        stickHack.addEventListener('mouseover', function () {
            stick.classList.add('hovered');
        });
        stickHack.addEventListener('mouseout', function () {
            stick.classList.remove('hovered');
        });
    }
    toggleStickHackaton();

    function toggleStickShogushi() {
        const stickShog = document.querySelector(shogushiSelector),
            stick = document.querySelector(stickShogushiSelector);
        
        stickShog.addEventListener('mouseover', function () {
            stick.classList.add('hovered');
        });
        stickShog.addEventListener('mouseout', function () {
            stick.classList.remove('hovered');
        });
    }
    toggleStickShogushi()
}

export default sticksAnimation;