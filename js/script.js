// Nav Links
let navLinks = Array.from(document.querySelectorAll('header .nav-list > li > a'));

navLinks.forEach(e => {
    e.addEventListener("click", function (e) {        
        e.preventDefault();
    });
});

// Menu Icon
let menuIcon = document.querySelector('.menu-icon');
document.querySelector(".close").onclick = () => {
    document.getElementsByTagName('nav')[0].classList.toggle('hide');
};

menuIcon.addEventListener("click", function () {
    document.getElementsByTagName('nav')[0].classList.toggle('hide');
});

document.addEventListener("keypress", (e) => {
    document.documentElement.scrollTo(0, document.querySelector('.counters').offsetTop);
});

// Scroll To Top
let scrollButton = document.querySelector(".up");

scrollButton.onclick = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

window.onscroll = () => {
    scrollToTop(document.documentElement.scrollTop);
};

scrollToTop(document.documentElement.scrollTop);

function scrollToTop(scrollX) {
    if (scrollX >= 1000) {
        scrollButton.classList.remove("hide");
    } else {
        scrollButton.classList.add("hide");
    };
};

// Increment Numbers
let numbers = Array.from(document.querySelectorAll(".counters .num"));
let started = false;

function incrementDunction() {
    numbers.forEach(num => {
        let increment = setInterval(() => {
            num.innerHTML++;
            if (num.innerHTML === num.dataset.goal) {
                clearInterval(increment);
            };
        }, 10);
        
        console.log(num.innerHTML);
    });
};

window.onscroll = () => {
    if (window.scrollY >= document.querySelector(".counters").offsetTop - (document.documentElement.clientHeight - document.querySelector(".counters").offsetHeight)) {
        if (!started) {
            incrementDunction();
            started = true;
        };
    };
};

console.log(document.documentElement.clientHeight - document.querySelector(".counters").offsetHeight);
console.log();