let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const text = "Hello, I m Iqbal Apriand Juartono!";
let index = 0;
let isDeleting = false;
const speed = 100; 
const delayBetweenCycles = 1000; 

function typeEffect() {
    const element = document.getElementById("typing");

    if (!isDeleting) {
        element.innerHTML = text.substring(0, index);
        index++;
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenCycles);
        } else {
            setTimeout(typeEffect, speed);
        }
    } else {
        element.innerHTML = text.substring(0, index);
        index--;
        if (index < 0) {
            isDeleting = false;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(typeEffect, speed);
        }
    }
}

window.onload = function() {
    typeEffect();
};





let currentIndex = [0, 0, 0, 0];  // Keep track of the current slide for each slider

function showSlide(sliderId, index) {
    const sliders = document.getElementById('slider' + sliderId).children;
    const totalSlides = sliders.length;
    
    if (index >= totalSlides) {
        currentIndex[sliderId - 1] = 0;  // Go back to the first slide if it exceeds total slides
    } else if (index < 0) {
        currentIndex[sliderId - 1] = totalSlides - 1;  // Go to the last slide if the index is less than 0
    } else {
        currentIndex[sliderId - 1] = index;
    }

    const newTransform = `translateX(-${currentIndex[sliderId - 1] * 100}%)`;
    document.getElementById('slider' + sliderId).style.transform = newTransform;
}

function nextSlide(sliderId) {
    showSlide(sliderId, currentIndex[sliderId - 1] + 1);
}

function prevSlide(sliderId) {
    showSlide(sliderId, currentIndex[sliderId - 1] - 1);
}




document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});
