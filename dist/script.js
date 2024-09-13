"use strict";
const DarkMode = document.getElementById("Dark");
const BodyInPage = document.querySelector("body");
const menuBackgroud = document.querySelector('.pozadi-navigace');
const footerInPage = document.querySelector('footer');
const LoginFormular = document.querySelector('.login-section');
const InvalidTryText = document.querySelector('.invalid');
const Header = document.querySelector('header');
const PasswordInput = document.getElementById('password1');
const PasswordCheck = document.getElementById('password2');
const LoginButton = document.getElementById('Login');
const root = document.documentElement;
const darkModeColor = getComputedStyle(root).getPropertyValue('--menu_background');
const headerOriginal = getComputedStyle(Header).getPropertyValue('background');
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;
if (DarkMode) {
    DarkMode.addEventListener("change", bodyClick);
}
if (LoginButton) {
    LoginButton.addEventListener('click', PassChecking);
}
function bodyClick() {
    if (DarkMode.checked) {
        BodyInPage.classList.add("dark-mode");
        Header.style.background = 'transparent';
        menuBackgroud.style.background = darkModeColor;
        LoginFormular.style.background = darkModeColor;
        footerInPage.style.background = darkModeColor;
    }
    else {
        BodyInPage.classList.remove('dark-mode');
        Header.style.background = headerOriginal;
        menuBackgroud.style.background = originalBackgroundColor;
        LoginFormular.style.background = originalBackgroundColor;
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
