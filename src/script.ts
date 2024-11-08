const BodyInPage = document.querySelector("body") as HTMLElement; //body
const Header = document.querySelector("header") as HTMLElement; //header
const footerInPage = document.querySelector("footer") as HTMLElement;
const DarkMode = document.getElementById(
  "Dark"
) as HTMLInputElement; /** check box **/
const menuBackgroud = document.getElementById(
  "navigation-one"
) as HTMLDivElement; //pozadí menu
const LoginFormular = document.querySelector(".fomular") as HTMLDivElement;
const InvalidTryText = document.getElementById(
  "Check-pass"
) as HTMLParagraphElement; //invalid paragraf
const Arrow = document.getElementById("arrow-UP") as HTMLImageElement;
const Hamburger = document.getElementById("Hamburger") as HTMLDivElement; //hamburger menu
//Položky ve stránce
const Photos = document.getElementById("projekty") as HTMLElement; //sekce fotky
const AboutMe = document.getElementById("about-me") as HTMLElement; //sekce o mě
const Contact = document.getElementById("My-info") as HTMLDivElement;
//odkazy v menu (odkazuji na položky na stránce)
const MojeTvorba = document.querySelectorAll(
  ".tvorba"
) as NodeListOf<HTMLAnchorElement>;
const Ome = document.querySelectorAll(".o-me") as NodeListOf<HTMLAnchorElement>;
const Kontakt = document.querySelectorAll(
  ".kontact"
) as NodeListOf<HTMLAnchorElement>;
//vyjížděcí menu
const SecondMenu = document.getElementById("second-nav-menu") as HTMLDivElement;
const CrossRed = document.getElementById("Red-Cross") as HTMLAnchorElement;
const DarkBoxMode = document.getElementById("mode") as HTMLDivElement;
//formulář na hesla
const PasswordInput = document.getElementById("password1") as HTMLInputElement;
const PasswordCheck = document.getElementById("password2") as HTMLInputElement; 
const UserName = document.getElementById("Username") as HTMLInputElement; 
// tlačítko přihlásit se
const LoginButton = document.getElementById("Login") as HTMLInputElement; 
const warningText = document.getElementById("Check-name") as HTMLParagraphElement;
/*********************************************************************************************************** */

/** vytahnutí proměných z css */
const root = document.documentElement;
const darkModeColor =
  getComputedStyle(root).getPropertyValue("--menu_background"); //vytáhnutí konkrétní barvy
const headerOriginal = getComputedStyle(Header).getPropertyValue("background"); //background headeru
const ContactBackground =
  getComputedStyle(Contact).getPropertyValue("background"); //background u Kontakt
/**uložení původní barvy v menu */
const originalBackgroundColor = getComputedStyle(menuBackgroud).background;
/*************************************************************************************************************
 * *************************************** FUNKCE ************************************************************
 *************************************************************************************************************/

/** funkce pro dark mode */
const bodyClick = (): void => {
  if (DarkMode.checked) {
    BodyInPage.classList.add("dark-mode");
    Header.style.background = "transparent";
    menuBackgroud.style.background = darkModeColor;
    LoginFormular.style.background = darkModeColor;
    Contact.style.background = "transparent";
    footerInPage.style.background = darkModeColor;
  } else {
    BodyInPage.classList.remove("dark-mode");
    Header.style.background = headerOriginal;
    menuBackgroud.style.background = originalBackgroundColor;
    LoginFormular.style.background = originalBackgroundColor;
    Contact.style.background = ContactBackground;
    footerInPage.style.background = originalBackgroundColor;
  }
};
/************************************************************** */
/** funkce pro kontrolu hesel a jména  **/

const PassChecking = (event: Event): void => {
  event.preventDefault();
  const password1 = PasswordInput.value;
  const password2 = PasswordCheck.value; 
  const usernameValue = UserName.value;
  
  InvalidTryText.classList.toggle("none", password1 === password2);
  warningText.classList.toggle("none", usernameValue !== "");
};
/************************************************************************ */
/** funkce na scrolování (šipka se objeví/zmizí) **/
const ScrollingDown = (): void => {  
  Arrow.style.display = (window.innerHeight + window.scrollY >= document.body.offsetHeight) ? "block" : "none";
};

const ArrowUp = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  Arrow.style.display = "none";
};
/*********************************************************************** */
/** funkce na přesun v menu **/

const GalerryClick = (e: Event): void => {
  e.preventDefault();
  if (Photos) {
    // 15% nad element
    const offset = window.innerHeight * 0.15;
    //pozice elementu - 15%
    const targetPosition =
      Photos.getBoundingClientRect().top + window.scrollY - offset;
    //scrolování na pozici nad element
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
/** funkce na přesun (o Mě) **/
const OmeClick = (e: Event): void => {
  e.preventDefault();
  if (AboutMe) {
    const offset = window.innerHeight * 0.15;
    const targetPosition =
      AboutMe.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
/**Funkce na přesun (Kontakt) **/
const KontaktClick = (e: Event): void => {
  e.preventDefault();
  if (Contact) {
    const offset = window.innerHeight * 0.15;
    const targetPosition =
      Contact.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
/**************************************************************** */
/** funkce na vyjížděcí menu a křížek **/

//hamburger
const HamburgerClick = (): void => {
  SecondMenu.style.display = "flex";
  DarkBoxMode.style.display = "none";
  Hamburger.style.display = "none";
  menuBackgroud.style.display = "none";
};
/** fce na křížek v hamburgeru **/
const CrossClick = (e: Event): void => {
  e.preventDefault();
  SecondMenu.style.display = "none";
  DarkBoxMode.style.display = "flex";
  Hamburger.style.display = "block";
  menuBackgroud.style.display = "block";
};
/***********************************************************************
 * ********************* AKCE KLIKÁNÍ **********************************
 ***********************************************************************/

/** akce **/
if (
  DarkMode &&
  MojeTvorba &&
  Ome &&
  Kontakt &&
  LoginButton &&
  Arrow &&
  Hamburger &&
  CrossRed
) {
  DarkMode.addEventListener("change", bodyClick);
  //posluchače na více elementu se stejnou třídou
  Array.from(MojeTvorba).forEach((element: HTMLAnchorElement) => {
    element.addEventListener("click", GalerryClick);
  });
  Array.from(Ome).forEach((element: HTMLAnchorElement) => {
    element.addEventListener("click", OmeClick);
  });
  Array.from(Kontakt).forEach((element: HTMLAnchorElement) => {
    element.addEventListener("click", KontaktClick);
  });
  //
  LoginButton.addEventListener("click", PassChecking);
  Arrow.addEventListener("click", ArrowUp);
  Hamburger.addEventListener("click", HamburgerClick);
  CrossRed.addEventListener("click", CrossClick);
}

window.addEventListener("scroll", ScrollingDown);
