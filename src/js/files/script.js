// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const chipsButton = document.querySelector('.chips__btn');

if (chipsButton) {
  chipsButton.addEventListener('click', () => {
    document.documentElement.classList.add('chips-fell');
    chipsButton.classList.add('_clicked');

    // setTimeout(() => {
    //   document.documentElement.classList.remove('chips-fell');
    //   chipsButton.classList.remove('_clicked');
    // }, 5000); 
  });
}

