import classNames from 'classnames';
import { PropsWithChildren, UIEventHandler, useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';
import { PropsWithClassName } from '@/types/common.types';

const NavigationButton = ({
  children,
  className,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements['button']>) => (
  <button type="button" {...props} className={classNames(styles.arrowBtn, className)}>
    <span className="inline-flex justify-center items-center w-8 h-8 bg-sdGray rounded-full sm:w-12 sm:h-12 dark:bg-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      {children}
    </span>
  </button>
);

export default function Carousel({
  children,
  className,
  arrowBtnClass,
}: PropsWithChildren<PropsWithClassName<{ arrowBtnClass?: string }>>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [shouldShowArrowBtns, setShouldShowArrowBtns] = useState(true);

  useEffect(() => {
    const onResize = () => {
      const { current: container } = containerRef;

      if (!container) return;

      setShouldShowArrowBtns(container.scrollWidth > container.offsetWidth);
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scroll = (prev = false) => {
    if (!containerRef.current) return;

    const parentWidth = containerRef.current.parentElement!.clientWidth;
    containerRef.current.scrollTo({
      behavior: 'smooth',
      left: prev
        ? Math.max(0, containerRef.current.scrollLeft - parentWidth)
        : containerRef.current.scrollLeft + parentWidth,
    });
  };

  const previousArrow = shouldShowArrowBtns && (
    <NavigationButton
      className={classNames(styles.arrowBtn__prev, arrowBtnClass, scrollLeft <= 100 && '!hidden')}
      onClick={() => scroll(true)}
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Previous</span>
    </NavigationButton>
  );

  const nextArrow = shouldShowArrowBtns && (
    <NavigationButton
      className={classNames(
        styles.arrowBtn__next,
        arrowBtnClass,
        containerRef.current &&
          containerRef.current.scrollWidth - scrollLeft - containerRef.current.clientWidth <= 10 &&
          '!hidden',
      )}
      onClick={() => scroll()}
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 sm:w-6 sm:h-6 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next</span>
    </NavigationButton>
  );

  const onScroll: UIEventHandler<HTMLDivElement> = () => {
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  return (
    <div className={classNames('relative', className)}>
      {previousArrow}
      <div className={styles.carouselContainer} ref={containerRef} onScroll={onScroll}>
        {children}
      </div>
      {nextArrow}
    </div>
  );
}
