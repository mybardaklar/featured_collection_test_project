document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".slider__wrapper"),t=document.querySelectorAll(".slider__item"),n=document.querySelector("button.slider__prev-button"),r=document.querySelector("button.slider__next-button");Array.from(t).forEach((function(e){e.getBoundingClientRect().width})),r.addEventListener("click",(function(){e.scrollLeft+=t[0].getBoundingClientRect().width})),n.addEventListener("click",(function(){e.scrollLeft-=t[0].getBoundingClientRect().width})),e.addEventListener("scroll",(function(){e.scrollLeft>0?n.classList.add("slider__prev-button--active"):n.classList.remove("slider__prev-button--active")}))}));