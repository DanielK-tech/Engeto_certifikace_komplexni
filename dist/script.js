"use strict";
const BodyInPage = document.querySelector("body");
const Header = document.querySelector("header");
const footerInPage = document.querySelector("footer");
const DarkMode = document.getElementById("Dark");
const menuBackgroud = document.getElementById("navigation-one");
const LoginFormular = document.querySelector(".fomular");
const InvalidTryText = document.getElementById("Check-pass");
const Arrow = document.getElementById("arrow-UP");
const Hamburger = document.getElementById("Hamburger");
const Photos = document.getElementById("projekty");
const AboutMe = document.getElementById("about-me");
const Contact = document.getElementById("My-info");
const MojeTvorba = document.querySelectorAll(".tvorba");
const Ome = document.querySelectorAll(".o-me");
const Kontakt = document.querySelectorAll(".kontact");
const SecondMenu = document.getElementById("second-nav-menu");
const CrossRed = document.getElementById("Red-Cross");
const DarkBoxMode = document.getElementById("mode");
const PasswordInput = document.getElementById("password1");
const PasswordCheck = document.getElementById("password2");
const UserName = document.getElementById("Username");
const LoginButton = document.getElementById("Login");
const warningText = document.getElementById("Check-name");
const root = document.documentElement;
const darkModeColor = getComputedStyle(root).getPropertyValue("--menu_background");
const headerOriginal = getComputedStyle(Header).getPropertyValue("background");
const ContactBackground = getComputedStyle(Contact).getPropertyValue("background");
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;
const bodyClick = () => {
    if (DarkMode.checked) {
        BodyInPage.classList.add("dark-mode");
        Header.style.background = "transparent";
        menuBackgroud.style.background = darkModeColor;
        LoginFormular.style.background = darkModeColor;
        Contact.style.background = "transparent";
        footerInPage.style.background = darkModeColor;
    }
    else {
        BodyInPage.classList.remove("dark-mode");
        Header.style.background = headerOriginal;
        menuBackgroud.style.background = originalBackgroundColor;
        LoginFormular.style.background = originalBackgroundColor;
        Contact.style.background = ContactBackground;
        footerInPage.style.background = originalBackgroundColor;
    }
};
const PassChecking = (event) => {
    event.preventDefault();
    const password1 = PasswordInput.value;
    const password2 = PasswordCheck.value;
    const usernameValue = UserName.value;
    InvalidTryText.classList.toggle("none", password1 === password2);
    warningText.classList.toggle("none", usernameValue !== "");
};
const ScrollingDown = () => {
    Arrow.style.display = (window.innerHeight + window.scrollY >= document.body.offsetHeight) ? "block" : "none";
};
const ArrowUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Arrow.style.display = "none";
};
const GalerryClick = (e) => {
    e.preventDefault();
    if (Photos) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = Photos.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};
const OmeClick = (e) => {
    e.preventDefault();
    if (AboutMe) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = AboutMe.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};
const KontaktClick = (e) => {
    e.preventDefault();
    if (Contact) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = Contact.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};
const HamburgerClick = () => {
    SecondMenu.style.display = "flex";
    DarkBoxMode.style.display = "none";
    Hamburger.style.display = "none";
    menuBackgroud.style.display = "none";
};
const CrossClick = (e) => {
    e.preventDefault();
    SecondMenu.style.display = "none";
    DarkBoxMode.style.display = "flex";
    Hamburger.style.display = "block";
    menuBackgroud.style.display = "block";
};
if (DarkMode &&
    MojeTvorba &&
    Ome &&
    Kontakt &&
    LoginButton &&
    Arrow &&
    Hamburger &&
    CrossRed) {
    DarkMode.addEventListener("change", bodyClick);
    Array.from(MojeTvorba).forEach((element) => {
        element.addEventListener("click", GalerryClick);
    });
    Array.from(Ome).forEach((element) => {
        element.addEventListener("click", OmeClick);
    });
    Array.from(Kontakt).forEach((element) => {
        element.addEventListener("click", KontaktClick);
    });
    LoginButton.addEventListener("click", PassChecking);
    Arrow.addEventListener("click", ArrowUp);
    Hamburger.addEventListener("click", HamburgerClick);
    CrossRed.addEventListener("click", CrossClick);
}
window.addEventListener("scroll", ScrollingDown);
const scrollImage = document.getElementById('Scroll');
let lastScrollTop = 0;
const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollImage.style.display = 'block';
    scrollImage.style.animation = (scrollTop > lastScrollTop) ? 'rotate-left 1s linear infinite' : 'rotate-right 1s linear infinite';
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    clearTimeout(scrollImage.hideTimeout);
    scrollImage.hideTimeout = setTimeout(() => {
        scrollImage.style.display = 'none';
    }, 300);
};
window.addEventListener('scroll', handleScroll);
