import React, { useEffect, useRef, useState } from 'react';
import './Headerimage.css';

export default function Headerimage() {
  const slideGalleryRef = useRef(null);
  const thumbnailContainerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(540);

  const highlightThumbnail = () => {
    const thumbnails = thumbnailContainerRef.current.querySelectorAll('div.highlighted');
    thumbnails.forEach((el) => el.classList.remove('highlighted'));
    const index = Math.floor(slideGalleryRef.current.scrollLeft / slideWidth);
    thumbnailContainerRef.current.querySelector(`div[data-id="${index}"]`).classList.add('highlighted');
  };

  const scrollToElement = (el) => {
    const index = parseInt(el.dataset.id, 10);
    slideGalleryRef.current.scrollTo(index * slideWidth, 0);
  };

  useEffect(() => {
    const slides = slideGalleryRef.current.querySelectorAll('div');
    const thumbnailContainer = thumbnailContainerRef.current;
    const slideCount = slides.length;

    setSlideWidth(slides[0].clientWidth);

    thumbnailContainer.innerHTML += [...slides].map((slide, i) => `<div data-id="${i}"></div>`).join('');

    thumbnailContainer.querySelectorAll('div').forEach((el) => {
      el.addEventListener('click', () => scrollToElement(el));
    });

    slideGalleryRef.current.addEventListener('scroll', highlightThumbnail);

    highlightThumbnail();
  }, [slideWidth]);

  return (
    <div>
      <div className="gallery-container">
        <div className="thumbnails" ref={thumbnailContainerRef}></div>
        <div className="slides" ref={slideGalleryRef}>
          <div><img src="https://picsum.photos/id/1067/540/720" alt="Slide 1" /></div>
          <div><img src="https://picsum.photos/id/122/540/720" alt="Slide 2" /></div>
          <div><img src="https://picsum.photos/id/188/540/720" alt="Slide 3" /></div>
          <div><img src="https://picsum.photos/id/249/540/720" alt="Slide 4" /></div>
          <div><img src="https://picsum.photos/id/257/540/720" alt="Slide 5" /></div>
          <div><img src="https://picsum.photos/id/259/540/720" alt="Slide 6" /></div>
          <div><img src="https://picsum.photos/id/283/540/720" alt="Slide 7" /></div>
          <div><img src="https://picsum.photos/id/288/540/720" alt="Slide 8" /></div>
          <div><img src="https://picsum.photos/id/299/540/720" alt="Slide 9" /></div>
        </div>
      </div>
    </div>
  );
}
