// show navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbarButton = document.getElementById("navbar-sticky");
    const navbarList = document.getElementById("nav-list");

    navbarButton.addEventListener("click", () => {
        navbarList.classList.toggle("hidden");
    });
});

// navbar scroll
const nav = document.getElementById('nav');

function changeBgnav() {
    if (window.scrollY > 20) {
        nav.style.backgroundColor = 'white';
        nav.style.border = '1px solid gainsboro';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.borderBottom = 'none';
    }
}

window.addEventListener('scroll', changeBgnav);

// expand faq
const faq = document.querySelectorAll('.faq');

faq.forEach(faq => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');

    question.addEventListener("click", () => {
        faq.classList.toggle("active");
        if (faq.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
})

