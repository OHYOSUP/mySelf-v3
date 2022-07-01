const root = document.getElementById('root');

const actorTextBox = document.querySelectorAll('#actorTextBox>div>span');
const imageBox = document.getElementById('imageBox');
const imageDescription = document.getElementById('imageDescription');
let posY = 0;
let i = 0;

console.log(actorTextBox);
const nameArr = Array.from(actorTextBox);



export const scrollElemFadein = function scrollElement(pageName) {

  pageName.addEventListener('wheel', (e) => {
    e.preventDefault();
    // span.textContent = posY;

    if (window.scrollY <= 0) {
      posY = 0;
      if (window.scrollY >= 30) {
        posY = 30;
      }
    }

    if (e.deltaY > 0) {
      window.scrollBy({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
      posY++;
      console.log(posY);
      if (posY >= 16) {
        nameArr.forEach(elem => {
          elem.style.opacity = 1;
          elem.style.transition = '0.5s';
        });
      }
      if (posY >= 21) {
        imageBox.style.opacity = 1;
        imageBox.style.transition = '0.5s';
      }
      if (posY >= 24) {
        imageDescription.style.opacity = 1;
        imageDescription.style.transition = '0.5s';
      }

      if (posY >= 30) {
        box[3].style.opacity = 1;
        box[3].style.transition = '0.5s';
      }
      console.log(posY);
    }
    if (e.deltaY < 0) {
      window.scrollBy({
        top: -200,
        left: 0,
        behavior: 'smooth'
      });
      posY--;


      if (posY <= 5) {
        box[0].style.opacity = 0;
        box[0].style.transition = '0.5s';
      }
      if (posY <= 15) {
        box[1].style.opacity = 0;
        box[1].style.transition = '0.5s';
      }
      if (posY <= 25) {
        box[2].style.opacity = 0;
        box[2].style.transition = '0.5s';
      }
      if (posY <= 35) {
        box[3].style.opacity = 0;
        box[3].style.transition = '0.5s';
      }
      console.log(posY);
    }
    // console.log(window.scrollY);


    // if(window.scrollY >= 100){
    //   box[2].style.opacity = 1;
    //   box[2].style.transition = '0.5s';
    // }

  });
}
