class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.imgData = this.element.dataset.num;
        this.currentIndex = this.element.querySelectorAll(`img[data-num=${this.imgData}`);
        this.indexMaxLength = this.element.querySelectorAll('img')[this.element.querySelectorAll('img').length - 1];
        this.leftButton.addEventListener('click', () => {this.leftClick()});
        this.rightButton.addEventListener('click', () => {this.rightClick()});       
    }
    const rightClick = () => {
        let images = document.querySelectorAll('.carousel img').forEach(image => {image.style.display='none'});
        if (this.currentIndex == this.indexMaxLength) {
            this.currentIndex = this.element.querySelectorAll(`.img[data-num="1"`);
            this.element.style.display= 'flex';
        } else {
            this.currentIndex = this.element.querySelectorAll(`.img[data-num=${this.imgData + 1}`);
            this.element.style.display= 'flex';
        }
    };
    const leftClick = () => {
        let images = document.querySelectorAll('.carousel img').forEach(image => {image.style.display='none'});
        if (this.currentIndex == this.element.querySelectorAll(`.img[data-num="1"`)) {
            this.currentIndex = this.indexMaxLength;
            this.currentIndex.style.display= 'flex';
        } else {
            this.currentIndex = this.element.querySelectorAll(`.img[data-num=${this.imgData - 1}`);
            this.currentIndex.style.display= 'flex';
        }
    };
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
