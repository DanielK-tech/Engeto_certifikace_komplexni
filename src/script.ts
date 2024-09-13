const DarkMode = document.getElementById("Dark") as HTMLInputElement; /** check box **/
const BodyInPage = document.querySelector("body") as HTMLElement; //body 
const menuBackgroud = document.querySelector('.pozadi-navigace') as HTMLDivElement; //pozadí menu
const footerInPage = document.querySelector('footer') as HTMLElement;
const LoginFormular = document.querySelector('.login-section') as HTMLDivElement;
const InvalidTryText = document.querySelector('.invalid') as HTMLParagraphElement; //invalid paragraf
const Header = document.querySelector('header') as HTMLElement //header
const Arrow = document.getElementById('arrow-UP') as HTMLImageElement
//formulář na hesla
const PasswordInput = document.getElementById('password1') as HTMLInputElement;
const PasswordCheck = document.getElementById('password2') as HTMLInputElement;
// tlačítko přihlásit se
const LoginButton = document.getElementById('Login') as HTMLInputElement;
/*********************************************************************************************************** */

/** vytahnutí proměných z css */
const root = document.documentElement;
const darkModeColor = getComputedStyle(root).getPropertyValue('--menu_background'); //vytáhnutí konkrítní barvy
const headerOriginal = getComputedStyle(Header).getPropertyValue('background'); //background headeru
/**uložení původní barvy v menu */
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;



if (DarkMode) {
  DarkMode.addEventListener("change", bodyClick);
}

if (LoginButton) {
  LoginButton.addEventListener('click', PassChecking);
}

if (Arrow) {
  Arrow.addEventListener('click', ArrowUp);
}

window.addEventListener('scroll', ScrollingDown);

/** funkce pro dark mode */

function bodyClick() {
  if (DarkMode.checked) {
    BodyInPage.classList.add("dark-mode");
    Header.style.background = 'transparent'
    menuBackgroud.style.background = darkModeColor;
    LoginFormular.style.background = darkModeColor;
    footerInPage.style.background = darkModeColor;
  } else {
    BodyInPage.classList.remove('dark-mode');
    Header.style.background = headerOriginal;
    menuBackgroud.style.background = originalBackgroundColor;
    LoginFormular.style.background = originalBackgroundColor;
    footerInPage.style.background = originalBackgroundColor;
  }
}
/************************************************************** */

/** funkce pro kontrolu hesel  **/

function PassChecking(event: any) {
  event.preventDefault();
  const password1 = PasswordInput.value;
  const password2 = PasswordCheck.value;

  if (password1 !== password2) {
    InvalidTryText.classList.remove('none');
  } else {
    InvalidTryText.classList.add('none');
  }
}
/****************************************** */

/** funkce na scrolování **/
function ScrollingDown() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    Arrow.style.display = 'block';
  } else {
    Arrow.style.display = 'none';
  }
}

function ArrowUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  Arrow.style.display = 'none';
}


