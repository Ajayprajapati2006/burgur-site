const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcan = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    })
);

closeIcan.addEventListener("click", () => {
    navMenu.classList.add('hidden');
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
});

/*--------------Tabs----------------------*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks = document.querySelectorAll('.snack');

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        // Remove active class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        // Add active class to clicked tab
        tab.classList.add('active');

        const tabval = tab.getAttribute('data-tabs');

        // Hide all items
        all.forEach(item => {
            item.style.display = 'none';
        });

        // Show items based on the selected tab
        if (tabval === 'food') {
            foods.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval === 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval === 'beverage') {
            beverages.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            all.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

/*----------------- DARK LIGHT THEME-------------------*/
const html = document.querySelector("html");
const themebtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
    // lightmode();
    
} else {
    lightmode();
}


themebtn.addEventListener('click', (e) => {
    console.log(localStorage.getItem("mode"));

    if (localStorage.getItem("mode") == "light") {
        darkMode();
        
    } else {
        lightmode();
    }
})

function darkMode() {
    html.classList.add("dark");
    themebtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightmode() {
    html.classList.remove("dark");
    themebtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");

}

/*----------------- SHOW SCROLL UP-------------------*/
const scrollUp = () => {
    const scrollUpbtn = document.getElementById("scroll-up");
    // console.log(this.scrollY);

    if (this.scrollY >= 250) {
        scrollUpbtn.classList.remove("-bottom-1/2");
        scrollUpbtn.classList.add("bottom-4");

    } else {
        scrollUpbtn.classList.add("-bottom-1/2");
        scrollUpbtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll', scrollUp)

/*----------------- CHANGE BACKGROUND HEADER-------------------*/


const scrollHeader = () => {
    const header = document.getElementById("header");

    // console.log(this.scrollY);

    if (this.scrollY >= 50) {
        header.classList.remove("border-b", "border-secondaryColor");

    } else {
        header.classList.add("border-b", "border-secondaryColor");

    }
}
window.addEventListener('scroll', scrollHeader)

/*----------------- SCROLL SECTIONS ACTIVE LINK-------------------*/

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll(".nav__link");

    let current = "home";


    sections.forEach(sections =>  {
        const sectionTop = sections.offsetTop;


        if(this.scrollY >= sectionTop - 60 ){
            current = sections.getAttribute('id')
        }
    })

    navLink.forEach(item => {
        item.classList.remove("text-secondaryColor");
        if(item.href.includes(current)) {
            item.classList.add("text-secondaryColor");
        }
    });
};


window.addEventListener('scroll', 'activeLink')
/*----------------- SCROLL REVEAL ANIMATION-------------------*/

