/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/about.js":
/*!*********************************!*\
  !*** ./src/js/modules/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/js/modules/filling.js":
/*!***********************************!*\
  !*** ./src/js/modules/filling.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filling);

/***/ }),

/***/ "./src/js/modules/pulsing.js":
/*!***********************************!*\
  !*** ./src/js/modules/pulsing.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pulse);

/***/ }),

/***/ "./src/js/modules/site.js":
/*!********************************!*\
  !*** ./src/js/modules/site.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function site(animateSelector) {
    //!Site Animation */
        const elementsToShow = document.querySelectorAll(animateSelector);
        elementsToShow.forEach((element, index) => {
            setTimeout(() => {
            element.style.opacity = '1';
        }, 300 * index);
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (site);

/***/ }),

/***/ "./src/js/modules/skills.js":
/*!**********************************!*\
  !*** ./src/js/modules/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skills);

/***/ }),

/***/ "./src/js/modules/sticks.js":
/*!**********************************!*\
  !*** ./src/js/modules/sticks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sticksAnimation);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_filling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/filling */ "./src/js/modules/filling.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ "./src/js/modules/about.js");
/* harmony import */ var _modules_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/skills */ "./src/js/modules/skills.js");
/* harmony import */ var _modules_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/site */ "./src/js/modules/site.js");
/* harmony import */ var _modules_sticks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sticks */ "./src/js/modules/sticks.js");
/* harmony import */ var _modules_pulsing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pulsing */ "./src/js/modules/pulsing.js");







window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_filling__WEBPACK_IMPORTED_MODULE_0__["default"])('.section__nav_info', '.section__contact_list', '.section__skills_blocks-other');
    (0,_modules_about__WEBPACK_IMPORTED_MODULE_1__["default"])('.section__nav_about-text-hidden', '.section__nav_about-btn-plus', '.section__experience_case-btn-plus');
    (0,_modules_skills__WEBPACK_IMPORTED_MODULE_2__["default"])('.section__skills_blocks-container', '.child, .section__skills_text-title, .section__skills_text', '.section__skills_blocks-webpack', '.section__skills_blocks-babel', '.section__skills_blocks-other');
    (0,_modules_site__WEBPACK_IMPORTED_MODULE_3__["default"])('.animate-on-load');
    (0,_modules_sticks__WEBPACK_IMPORTED_MODULE_4__["default"])('.section__experience_hackaton', '.stick-hackaton', '.section__experience_shogushi', '.stick-shogushi');
    (0,_modules_pulsing__WEBPACK_IMPORTED_MODULE_5__["default"])('.section__nav_portfolio-container', '.section__nav_portfolio-arrow', '.section__nav_cv-container', '.section__nav_cv-arrow');


})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map