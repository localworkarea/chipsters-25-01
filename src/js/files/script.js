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


    // ==   VIDEO YOUTUBE ON CLICK BUTTON ==================================================
    const videoYoutubeButtons = document.querySelectorAll('.video-youtube__button');
    videoYoutubeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const youTubeCode = this.getAttribute('data-youtube');
            let autoplay = true; // Автоплей разрешено (true) или нет (false)
    
            let urlVideo = `https://www.youtube.com/embed/${youTubeCode}?rel=0&showinfo=0`;
    
            const iframe = document.createElement('iframe');
            iframe.setAttribute('allowfullscreen', '');
    
            if (autoplay) {
                urlVideo += '&autoplay=1';
                iframe.setAttribute('allow', 'autoplay; encrypted-media');
            }
    
            iframe.setAttribute('src', urlVideo);
    
            const body = this.closest('.video-youtube__body');
            const bodyWrap = this.closest('.video-youtube');
            body.innerHTML = '';
            body.appendChild(iframe);
            body.classList.add('video-added');
            bodyWrap.classList.add('video-play');
        });
    });
    // =====================================================================================
  