window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollY >= clientHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelector('.slides');
    var slideItems = document.querySelectorAll('.slides > *');
    var slideIndex = 0;

    function showSlides() {
        for (var i = 0; i < slideItems.length; i++) {
            slideItems[i].style.display = 'none';
        }

        slideIndex++;
        if (slideIndex >= slideItems.length) {
            slideIndex = 0;
        }

        slideItems[slideIndex].style.display = 'block';

        setTimeout(showSlides, 3000);
    }

    showSlides();
});


var button = document.getElementById('course');
    button.addEventListener('click', function() {
      alert("You are enrolled in the course.");
    });

var button = document.getElementById('courses');
    button.addEventListener('click', function() {
      alert('Currently we only have this course. Please come later for more courses.');
    });

var button = document.getElementById('signin');
    button.addEventListener('click', function() {
      alert('Thank you for Signing Up!');
    });