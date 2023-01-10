document.addEventListener('DOMContentLoaded', () => {
	const sliderWrapper = document.querySelector('.slider__wrapper');
	const sliderItems = document.querySelectorAll('.slider__item');
	const sliderPrevButton = document.querySelector('button.slider__prev-button');
	const sliderNextButton = document.querySelector('button.slider__next-button');
	const sliderGap = 32;
	let sliderWidth = 0;

	Array.from(sliderItems).forEach((item) => {
		sliderWidth += sliderGap + item.getBoundingClientRect().width;
	});

	sliderNextButton.addEventListener('click', () => {
		sliderWrapper.scrollLeft += sliderItems[0].getBoundingClientRect().width;
	});

	sliderPrevButton.addEventListener('click', () => {
		sliderWrapper.scrollLeft -= sliderItems[0].getBoundingClientRect().width;
	});

	sliderWrapper.addEventListener('scroll', () => {
		if (sliderWrapper.scrollLeft > 0) {
			sliderPrevButton.classList.add('slider__prev-button--active');
		} else {
			sliderPrevButton.classList.remove('slider__prev-button--active');
		}

		/* if (sliderWrapper.scrollLeft === sliderWrapper.offsetWidth) {
			sliderNextButton.classList.remove('slider__next-button--active');
		} else {
			sliderNextButton.classList.add('slider__next-button--active');
		} */
	});
});
