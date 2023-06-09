export class Slider {
  constructor() {
    this.imgesUrls = [
      "https://images.unsplash.com/photo-1607355585249-f58e3af6b146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1685345323463-73d8141c3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1605525523427-256747d96e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1575362456145-6a6ce7e43baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/flagged/photo-1571674369311-f7d0b6774c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=759&q=80"
    ];
    this.currentImageIndex = 0;
  }

  start = () => {
    const slider = document.createElement('div');
    slider.className = 'slider';
    document.body.append(slider);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'button prev-btn';
    prevBtn.innerHTML = '&#60';
    slider.append(prevBtn);

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'img-wrapper';
    const image = document.createElement('img');
    image.className = 'image';
    imageWrapper.append(image);
    slider.append(imageWrapper);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'button next-btn';
    nextBtn.innerHTML = '&#62';
    slider.append(nextBtn);

    prevBtn.disabled = true;
    image.style.background = `url(${this.imgesUrls[this.currentImageIndex]}) no-repeat center center / cover`;

    prevBtn.addEventListener('click', this.onShowPrevBtnClick.bind(null, nextBtn, prevBtn, image));
    nextBtn.addEventListener('click', this.onShowNextBtnClick.bind(null, nextBtn, prevBtn, image));
  }

  onShowPrevBtnClick = (nextBtn, prevBtn, image) => {
    nextBtn.disabled = false;
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      image.style.background = `url(${this.imgesUrls[this.currentImageIndex]}) no-repeat center center / cover`;;
      if (this.currentImageIndex === 0) {
        prevBtn.disabled = true;
      }
    }
  }

  onShowNextBtnClick = (nextBtn, prevBtn, image) => {
    prevBtn.disabled = false;
    if (this.currentImageIndex < (this.imgesUrls.length - 1)) {
      this.currentImageIndex++;
      image.style.background = `url(${this.imgesUrls[this.currentImageIndex]}) no-repeat center center / cover`;
      if (this.currentImageIndex === this.imgesUrls.length - 1) {
        nextBtn.disabled = true;
      }
    }
  }
}