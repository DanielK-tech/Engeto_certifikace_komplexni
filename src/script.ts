const DarkMode = document.getElementById("Dark") as HTMLInputElement; /** check box **/
const BodyInPage = document.querySelector("body") as HTMLElement; //body 
const menuBackgroud = document.querySelector('.pozadi-navigace') as HTMLDivElement; //pozadí menu
const footerInPage = document.querySelector('footer') as HTMLElement;
const LoginFormular = document.querySelector('.login-section') as HTMLDivElement;
const InvalidTryText = document.querySelector('.invalid') as HTMLParagraphElement; //invalid paragraf
const Header = document.querySelector('header') as HTMLElement //header
const Arrow = document.getElementById('arrow-UP') as HTMLImageElement
//Položky ve stránce
const Photos = document.getElementById('projekty') as HTMLElement; //sekce fotky
const AboutMe = document.getElementById('about-me') as HTMLElement; //sekce o mě
const Contact = document.getElementById('My-info') as HTMLDivElement;
//odkazy v menu (odkazuji na položky na stránce)
const MojeTvorba = document.querySelector('.tvorba') as HTMLAnchorElement;
const Ome = document.querySelector('.o-me') as HTMLAnchorElement;
const Kontakt = document.querySelector('.Kontact') as HTMLAnchorElement;
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
const ContactBackground = getComputedStyle(Contact).getPropertyValue('background'); //background u Kontakt
/**uložení původní barvy v menu */
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;
/************************************************************************************************************* */



if (DarkMode && MojeTvorba && Ome && Kontakt && LoginButton && Arrow) {
  DarkMode.addEventListener("change", bodyClick);
  MojeTvorba.addEventListener('click', GalerryClick);
  Ome.addEventListener('click', OmeClick);
  Kontakt.addEventListener('click', KontaktClick);
  LoginButton.addEventListener('click', PassChecking);
  Arrow.addEventListener('click', ArrowUp);
}

window.addEventListener('scroll', ScrollingDown);

/** funkce pro dark mode */

function bodyClick() {
  if (DarkMode.checked) {
    BodyInPage.classList.add("dark-mode");
    Header.style.background = 'transparent';
    menuBackgroud.style.background = darkModeColor;
    LoginFormular.style.background = darkModeColor;
    Contact.style.background = 'transparent';
    footerInPage.style.background = darkModeColor;
  } else {
    BodyInPage.classList.remove('dark-mode');
    Header.style.background = headerOriginal;
    menuBackgroud.style.background = originalBackgroundColor;
    LoginFormular.style.background = originalBackgroundColor;
    Contact.style.background = ContactBackground;
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

/************************************************* */

/** funkce na přesun v menu **/

function GalerryClick(e: any) {
  e.preventDefault();
  if (Photos) {
    // 15% nad element
    const offset = window.innerHeight * 0.15;
    //pozice elementu - 15%
    const targetPosition = Photos.getBoundingClientRect().top + window.scrollY - offset;
    //scrolování na pozici nad element
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}
/**************************************************** */

/** funkce na přesun (o Mě) **/
function OmeClick(e: any) {
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

/******************************************************* */

/**Funkce na přesun (Kontakt) **/
function KontaktClick(e: any) {
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


