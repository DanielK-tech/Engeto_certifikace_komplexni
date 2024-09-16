"use strict";
const DarkMode = document.getElementById("Dark");
const BodyInPage = document.querySelector("body");
const menuBackgroud = document.querySelector('.pozadi-navigace');
const footerInPage = document.querySelector('footer');
const LoginFormular = document.querySelector('.login-section');
const InvalidTryText = document.querySelector('.invalid');
const Header = document.querySelector('header');
const Arrow = document.getElementById('arrow-UP');
const Hamburger = document.getElementById('hamburger');
const Photos = document.getElementById('projekty');
const AboutMe = document.getElementById('about-me');
const Contact = document.getElementById('My-info');
const MojeTvorba = document.querySelectorAll('.tvorba');
const Ome = document.querySelectorAll('.o-me');
const Kontakt = document.querySelectorAll('.Kontact');
const SecondMenu = document.getElementById('second-nav-menu');
const CrossRed = document.getElementById('Red-Cross');
const DarkBoxMode = document.getElementById('mode');
const PasswordInput = document.getElementById('password1');
const PasswordCheck = document.getElementById('password2');
const LoginButton = document.getElementById('Login');
const root = document.documentElement;
const darkModeColor = getComputedStyle(root).getPropertyValue('--menu_background');
const headerOriginal = getComputedStyle(Header).getPropertyValue('background');
const ContactBackground = getComputedStyle(Contact).getPropertyValue('background');
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;
if (DarkMode && MojeTvorba && Ome && Kontakt && LoginButton && Arrow && Hamburger && CrossRed) {
    DarkMode.addEventListener("change", bodyClick);
    Array.from(MojeTvorba).forEach((element) => {
        element.addEventListener('click', GalerryClick);
    });
    Array.from(Ome).forEach((element) => {
        element.addEventListener('click', OmeClick);
    });
    Array.from(Kontakt).forEach((element) => {
        element.addEventListener('click', KontaktClick);
    });
    LoginButton.addEventListener('click', PassChecking);
    Arrow.addEventListener('click', ArrowUp);
    Hamburger.addEventListener('click', HamburgerClick);
    CrossRed.addEventListener('click', CrossClick);
}
window.addEventListener('scroll', ScrollingDown);
function bodyClick() {
    if (DarkMode.checked) {
        BodyInPage.classList.add("dark-mode");
        Header.style.background = 'transparent';
        menuBackgroud.style.background = darkModeColor;
        LoginFormular.style.background = darkModeColor;
        Contact.style.background = 'transparent';
        footerInPage.style.background = darkModeColor;
    }
    else {
        BodyInPage.classList.remove('dark-mode');
        Header.style.background = headerOriginal;
        menuBackgroud.style.background = originalBackgroundColor;
        LoginFormular.style.background = originalBackgroundColor;
        Contact.style.background = ContactBackground;
        footerInPage.style.background = originalBackgroundColor;
    }
}
function PassChecking(event) {
    event.preventDefault();
    const password1 = PasswordInput.value;
    const password2 = PasswordCheck.value;
    if (password1 !== password2) {
        InvalidTryText.classList.remove('none');
    }
    else {
        InvalidTryText.classList.add('none');
    }
}
function ScrollingDown() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        Arrow.style.display = 'block';
    }
    else {
        Arrow.style.display = 'none';
    }
}
function ArrowUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Arrow.style.display = 'none';
}
function GalerryClick(e) {
    e.preventDefault();
    if (Photos) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = Photos.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
function OmeClick(e) {
    e.preventDefault();
    if (AboutMe) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = AboutMe.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
function KontaktClick(e) {
    e.preventDefault();
    if (Contact) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = Contact.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
function HamburgerClick() {
    SecondMenu.style.display = 'flex';
    DarkBoxMode.style.display = 'none';
    Hamburger.style.display = 'none';
    menuBackgroud.style.display = 'none';
}
function CrossClick(e) {
    e.preventDefault();
    SecondMenu.style.display = 'none';
    DarkBoxMode.style.display = 'flex';
    Hamburger.style.display = 'block';
    menuBackgroud.style.display = 'block';
}
