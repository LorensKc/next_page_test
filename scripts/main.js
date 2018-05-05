
// create slider

const slider = () => {

    // get elements

    const sliderContent = document.getElementById('slider-content');
    const sliderInner = document.getElementById('slider-inner');

    const navBar = document.getElementsByClassName('nav-bar');
    const sliderSlides = document.getElementsByClassName('slider-slide');

    const buttonPrev = document.getElementById('btn-prev');
    const buttonNext = document.getElementById('btn-next');

    // get height slider

    let getHeightContent = sliderContent.offsetHeight;

    // func set height to elements

    const setHeight = (element, height) => {
        element.style.height = getHeightContent + 'px';
    };

    // func change active slide

    const change = (index) => {
        sliderContent.setAttribute('data-active', index);
        sliderInner.style.transform = 'translateY(-' + (index * getHeightContent) + 'px)';

        for(let i = 0; i < navBar.length; i++) {
        	const tempButtons =  navBar[i].getElementsByClassName('btn-change');


        	for (let j = 0; j < tempButtons.length; j++) {
	            tempButtons[j].classList.remove('active');
	            if (index === j) {
	                tempButtons[j].className += ' active';
	            }
	        }
        }
    };

    // add click for buttons

    for (let i = 0; i < sliderSlides.length; i++) {
        setHeight(sliderSlides[i], getHeightContent);

        for(let j = 0; j < navBar.length; j++) {
        	const tempButtons =  navBar[j].getElementsByClassName('btn-change');

        	for (let k = 0; k < tempButtons.length; k++) {
	            tempButtons[k].addEventListener('click', () => {
		            change(k);
		        }, false);
	        }
        }
    }

    // add click for prev button

    buttonPrev.addEventListener('click', () => {
        const getActive = sliderContent.getAttribute('data-active');
        const parseActive = parseInt(getActive) - 1;

        if (parseActive >= 0) {
            change(parseActive);
        }

    }, false);

    // add click for next button

    buttonNext.addEventListener('click', () => {
        const getActive = sliderContent.getAttribute('data-active');
        const parseActive = parseInt(getActive) + 1;

        if (parseActive < sliderSlides.length) {
            change(parseActive);
        }

    }, false);

    // resize slides

    window.onresize = () => {
        getHeightContent = sliderContent.clientHeight;

        for (let i = 0; i < sliderSlides.length; i++) {
            setHeight(sliderSlides[i], getHeightContent);
        }
    };

};

// init dom & slider

window.onload = function() {
    slider();
};