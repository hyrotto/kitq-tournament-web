'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './carousel.module.css';

interface SlideData {
  id: number;
  src: string;
  alt: string;
}

interface CarouselProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
}

const SimpleCarousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 6000,
  showArrows = true,
  showIndicators = true
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const extendedSlides = [...slides, ...slides, ...slides];

  const handleSlideChange = useCallback((direction: 'next' | 'prev'): void => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (direction === 'next') {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange('next');
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, handleSlideChange]);

  useEffect(() => {
    if (!isTransitioning) return;

    const transitionEndHandler = () => {
      setIsTransitioning(false);
      if (currentSlide >= slides.length * 2) {
        setCurrentSlide(slides.length);
      }
      else if(currentSlide < slides.length) {
        setCurrentSlide(slides.length * 2 - 1)
      }
    };

    const container = slideContainerRef.current;
    container?.addEventListener('transitionend', transitionEndHandler);

    return () => {
      container?.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [currentSlide, slides.length, isTransitioning]);

  const goToSlide = (index: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + slides.length);
  };

    const actualSlideIndex = ((currentSlide % slides.length) + slides.length) % slides.length;

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer} ref={slideContainerRef}>
          <div 
          className={styles.slideWrapper}
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div 
              key={`${slide.id}-${index}`} 
              className={styles.slide}
              style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain' 
                }}
              />
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              onClick={() => handleSlideChange('prev')}
              className={`${styles.arrowButton} ${styles.prevButton}`}
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              ←
            </button>
            <button
              onClick={() => handleSlideChange('next')}
              className={`${styles.arrowButton} ${styles.nextButton}`}
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              →
            </button>
          </>
        )}

        {showIndicators && (
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.indicator} ${
                  actualSlideIndex === index ? styles.indicatorActive : ''
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCarousel;