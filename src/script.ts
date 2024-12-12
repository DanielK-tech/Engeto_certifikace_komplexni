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
const formular = document.getElementById("Formular-main") as HTMLDivElement;
const LoginButton = document.getElementById("Login") as HTMLInputElement;
const warningText = document.getElementById("Check-name") as HTMLParagraphElement;
const passVal = document.getElementById("Check-pass-val") as HTMLParagraphElement;
const CapsLock = document.getElementById("Warning") as HTMLParagraphElement;
/** loader */
const loader = document.getElementById("Loader") as HTMLDivElement;
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
/*** FCE Kontrola KapsoLoku */
function controling(event: KeyboardEvent) {
  if (event.getModifierState("CapsLock")) {
    CapsLock.classList.remove("none");
  } else {
    CapsLock.classList.add("none");
  }
}
/** funkce pro kontrolu hesel a jména  **/

const PassChecking = (event: Event): void => {
  event.preventDefault();
  const password1 = PasswordInput.value.trim();
  const password2 = PasswordCheck.value.trim();
  const usernameValue = UserName.value.trim();

  InvalidTryText.classList.toggle("none", password1 === password2);
  warningText.classList.toggle("none", usernameValue !== "");
  //
  if (!password1 || !password2) {
    passVal.classList.remove("none");
    return;
  } else {
    passVal.classList.add("none");
  }
  // zobrazení loaderu
  if (password1 === password2 && usernameValue) {
    loader.style.display = "grid";
    formular.style.display = "none";
    setTimeout((): void => {
      loader.style.display = "none";
      formular.style.display = "block";
    }, 3000);
  }
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
window.addEventListener("keyup", controling); //kontrola capslocku
/*************************************************************************************************************
 * *************************************** SCROLLING SMILE ****************************************************
 *************************************************************************************************************/
//scrolující smajlík 
const scrollImage = document.getElementById('Scroll') as HTMLImageElement & { hideTimeout?: number };
let lastScrollTop = 0;
/**FCE na skroling */
const handleScroll = (): void => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollImage.style.display = 'block';
  scrollImage.style.animation = (scrollTop > lastScrollTop) ? 'rotate-left 1s linear infinite' : 'rotate-right 1s linear infinite';
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Skyrytí obrázku po čase
  clearTimeout(scrollImage.hideTimeout);
  scrollImage.hideTimeout = setTimeout((): void => {
    scrollImage.style.display = 'none';
  }, 300); // potomto  čase se skryje
};
window.addEventListener('scroll', handleScroll);














// class PageManager {
//   private lastScrollTop: number = 0;
//   private scrollImage!: HTMLImageElement & { hideTimeout?: number };
//   private darkModeColor: string;
//   private originalBackgroundColor: string;
//   private headerOriginal: string;
//   private contactBackground: string;

//   constructor() {
//  const root = document.documentElement;
//  const Header = document.querySelector("header") as HTMLElement;
//  const menuBackgroud = document.getElementById("navigation-one") as HTMLDivElement;
//  const Contact = document.getElementById("My-info") as HTMLDivElement;

//  Uložení původních barev
//  this.darkModeColor = getComputedStyle(root).getPropertyValue("--menu_background");
//  this.headerOriginal = getComputedStyle(Header).getPropertyValue("background");
//  this.originalBackgroundColor = getComputedStyle(menuBackgroud).background;
//  this.contactBackground = getComputedStyle(Contact).getPropertyValue("background");

//  this.scrollImage = document.getElementById('Scroll') as HTMLImageElement & { hideTimeout?: number };
//  this.attachEventListeners();
//   }

//   // Připojení všech posluchačů událostí
//   private attachEventListeners(): void {
//     const DarkMode = document.getElementById("Dark") as HTMLInputElement;
//     const LoginButton = document.getElementById("Login") as HTMLInputElement;
//     const Arrow = document.getElementById("arrow-UP") as HTMLImageElement;
//     const Hamburger = document.getElementById("Hamburger") as HTMLDivElement;
//     const CrossRed = document.getElementById("Red-Cross") as HTMLAnchorElement;
//     const MojeTvorba = document.querySelectorAll(".tvorba") as NodeListOf<HTMLAnchorElement>;
//     const Ome = document.querySelectorAll(".o-me") as NodeListOf<HTMLAnchorElement>;
//     const Kontakt = document.querySelectorAll(".kontact") as NodeListOf<HTMLAnchorElement>; 


// private toggleDarkMode(): void {
//   const BodyInPage = document.querySelector("body") as HTMLElement;
//   const Header = document.querySelector("header") as HTMLElement;
//   const menuBackgroud = document.getElementById("navigation-one") as HTMLDivElement;
//   const LoginFormular = document.querySelector(".fomular") as HTMLDivElement;
//   const footerInPage = document.querySelector("footer") as HTMLElement;
//   const Contact = document.getElementById("My-info") as HTMLDivElement;
//   const DarkMode = document.getElementById("Dark") as HTMLInputElement;

//   if(!DarkMode) return;

//   if(DarkMode.checked) {
//   BodyInPage.classList.add("dark-mode");
//   Header.style.background = "transparent";
//   menuBackgroud.style.background = this.darkModeColor;
//   LoginFormular.style.background = this.darkModeColor;
//   Contact.style.background = "transparent";
//   footerInPage.style.background = this.darkModeColor;
// } else {
//   BodyInPage.classList.remove("dark-mode");
//   Header.style.background = this.headerOriginal;
//   menuBackgroud.style.background = this.originalBackgroundColor;
//   LoginFormular.style.background = this.originalBackgroundColor;
//   Contact.style.background = this.contactBackground;
//   footerInPage.style.background = this.originalBackgroundColor;
// }
//   }

//     if (DarkMode) DarkMode.addEventListener("change", this.toggleDarkMode.bind(this));
//     if (LoginButton) LoginButton.addEventListener("click", this.handleLogin.bind(this));
//     if (Arrow) Arrow.addEventListener("click", this.scrollToTop.bind(this));
//     if (Hamburger) Hamburger.addEventListener("click", this.showHamburgerMenu.bind(this));
//     if (CrossRed) CrossRed.addEventListener("click", this.hideHamburgerMenu.bind(this));

//     // Posluchače na více elementů
//     MojeTvorba.forEach((element) => element.addEventListener("click", this.scrollToSection.bind(this, "projekty")));
//     Ome.forEach((element) => element.addEventListener("click", this.scrollToSection.bind(this, "about-me")));
//     Kontakt.forEach((element) => element.addEventListener("click", this.scrollToSection.bind(this, "My-info")));

//     window.addEventListener("scroll", this.handleScroll.bind(this));
//     window.addEventListener("keyup", this.checkCapsLock.bind(this));
//   }

//   // Metody třídy

//   private toggleDarkMode(): void {
//     const BodyInPage = document.querySelector("body") as HTMLElement;
//     const Header = document.querySelector("header") as HTMLElement;
//     const footerInPage = document.querySelector("footer") as HTMLElement;
//     const menuBackgroud = document.getElementById("navigation-one") as HTMLDivElement;
//     const LoginFormular = document.querySelector(".fomular") as HTMLDivElement;
//     const DarkMode = document.getElementById("Dark") as HTMLInputElement;
//     const Contact = document.getElementById("My-info") as HTMLDivElement;

//     if (!DarkMode) return;

//     const root = document.documentElement;
//     const darkModeColor = getComputedStyle(root).getPropertyValue("--menu_background");
//     const headerOriginal = getComputedStyle(Header).getPropertyValue("background");
//     const ContactBackground = getComputedStyle(Contact).getPropertyValue("background");
//     const originalBackgroundColor = getComputedStyle(menuBackgroud).background;

//     if (DarkMode.checked) {
//       BodyInPage.classList.add("dark-mode");
//       Header.style.background = "transparent";
//       menuBackgroud.style.background = darkModeColor;
//       LoginFormular.style.background = darkModeColor;
//       Contact.style.background = "transparent";
//       footerInPage.style.background = darkModeColor;
//     } else {
//       BodyInPage.classList.remove("dark-mode");
//       Header.style.background = headerOriginal;
//       menuBackgroud.style.background = originalBackgroundColor;
//       LoginFormular.style.background = originalBackgroundColor;
//       Contact.style.background = ContactBackground;
//       footerInPage.style.background = originalBackgroundColor;
//     }
//   }

//   private handleLogin(event: Event): void {
//     event.preventDefault();
//     const PasswordInput = document.getElementById("password1") as HTMLInputElement;
//     const PasswordCheck = document.getElementById("password2") as HTMLInputElement;
//     const UserName = document.getElementById("Username") as HTMLInputElement;
//     const InvalidTryText = document.getElementById("Check-pass") as HTMLParagraphElement;
//     const warningText = document.getElementById("Check-name") as HTMLParagraphElement;
//     const passVal = document.getElementById("Check-pass-val") as HTMLParagraphElement;
//     const loader = document.getElementById("Loader") as HTMLDivElement;
//     const formular = document.getElementById("Formular-main") as HTMLDivElement;

//     const password1 = PasswordInput.value.trim();
//     const password2 = PasswordCheck.value.trim();
//     const usernameValue = UserName.value.trim();

//     InvalidTryText.classList.toggle("none", password1 === password2);
//     warningText.classList.toggle("none", usernameValue !== "");

//     if (!password1 || !password2) {
//       passVal.classList.remove("none");
//       return;
//     }

//     if (password1 === password2 && usernameValue) {
//       loader.style.display = "grid";
//       formular.style.display = "none";
//       setTimeout((): void => {
//         loader.style.display = "none";
//         formular.style.display = "block";
//       }, 3000);
//     }
//   }

//   private scrollToTop(): void {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   private handleScroll(): void {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     this.scrollImage.style.display = "block";
//     this.scrollImage.style.animation = (scrollTop > this.lastScrollTop)
//       ? "rotate-left 1s linear infinite"
//       : "rotate-right 1s linear infinite";

//     this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

//     clearTimeout(this.scrollImage.hideTimeout);
//     this.scrollImage.hideTimeout = setTimeout((): void => {
//       this.scrollImage.style.display = "none";
//     }, 300);
//   }

//   private checkCapsLock(event: KeyboardEvent): void {
//     const CapsLock = document.getElementById("Warning") as HTMLParagraphElement;
//     if (event.getModifierState("CapsLock")) {
//       CapsLock.classList.remove("none");
//     } else {
//       CapsLock.classList.add("none");
//     }
//   }

//   private scrollToSection(sectionId: string, event: Event): void {
//     event.preventDefault();
//     const target = document.getElementById(sectionId);
//     if (target) {
//       const offset = window.innerHeight * 0.15;
//       const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({ top: targetPosition, behavior: "smooth" });
//     }
//   }

//   private showHamburgerMenu(): void {
//     const SecondMenu = document.getElementById("second-nav-menu") as HTMLDivElement;
//     const DarkBoxMode = document.getElementById("mode") as HTMLDivElement;
//     const Hamburger = document.getElementById("Hamburger") as HTMLDivElement;
//     const menuBackgroud = document.getElementById("navigation-one") as HTMLDivElement;

//     SecondMenu.style.display = "flex";
//     DarkBoxMode.style.display = "none";
//     Hamburger.style.display = "none";
//     menuBackgroud.style.display = "none";
//   }

//   private hideHamburgerMenu(event: Event): void {
//     event.preventDefault();
//     const SecondMenu = document.getElementById("second-nav-menu") as HTMLDivElement;
//     const DarkBoxMode = document.getElementById("mode") as HTMLDivElement;
//     const Hamburger = document.getElementById("Hamburger") as HTMLDivElement;
//     const menuBackgroud = document.getElementById("navigation-one") as HTMLDivElement;

//     SecondMenu.style.display = "none";
//     DarkBoxMode.style.display = "flex";
//     Hamburger.style.display = "block";
//     menuBackgroud.style.display = "block";
//   }
// }

// // Inicializace
// new PageManager();
