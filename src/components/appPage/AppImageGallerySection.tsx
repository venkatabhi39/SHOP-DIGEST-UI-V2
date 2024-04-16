/* eslint-disable @next/next/no-img-element */
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Modal } from 'flowbite-react';
import { PropsWithChildren, useRef, useState } from 'react';
import classNames from 'classnames';
import { PropsWithAppData } from '@/models/appsData.model';
import AppCard from '@/components/appPage/AppCard';
import youtubeIconSvgProps from '@/assets/youtube-icon.svg';
import styles from './AppImageGallerySection.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoMdClose } from 'react-icons/io';

const isYoutubeEmbedUrl = (url: string) => url.includes('youtube');

const NavigationButton = ({
  children,
  className,
  shouldHide,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements['button']> & { shouldHide: boolean }) => (
  <button
    type="button"
    {...props}
    className={classNames(styles.arrowBtn, className, shouldHide && '!hidden')}
  >
    <span className="inline-flex justify-center items-center w-8 h-8 bg-sdGray rounded-full sm:w-12 sm:h-12 dark:bg-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      {children}
    </span>
  </button>
);

export default function AppImageGallerySection({ appsData }: PropsWithAppData) {
  const [initialSlideIndexInModalCarousel, setInitialSlideIndexInModalCarousel] = useState<
    null | number
  >(null);
  const [currentSlideIndexInModalCarousel, setCurrentSlideIndexInModalCarousel] = useState<
    null | number
  >(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  if (!appsData['screenshots-list'] || appsData['screenshots-list'].length < 1) return null;

  const openCarouselInModal = (index: typeof initialSlideIndexInModalCarousel) => {
    setInitialSlideIndexInModalCarousel(index);
    setCurrentSlideIndexInModalCarousel(index);
  };

  const onCarouselItemClicked = (item: ReactImageGalleryItem) => {
    const index =
      appsData['screenshots-list']?.findIndex(([mediaUrl]) => mediaUrl === item.original) ?? null;
    openCarouselInModal(index);
  };

  const carouselItems = appsData['screenshots-list'].map(([screenShotSrc]) => ({
    original: screenShotSrc,
    thumbnail: isYoutubeEmbedUrl(screenShotSrc) ? youtubeIconSvgProps.src : screenShotSrc,
  }));

  const renderCarouselItem = (item: ReactImageGalleryItem) => {
    if (!isYoutubeEmbedUrl(item.original)) {
      return (
        <button type="button" onClick={() => onCarouselItemClicked(item)}>
          <img
            alt={item.originalAlt}
            className="image-gallery-image"
            src={item.original}
            loading="eager"
          />
        </button>
      );
    }

    const videoId = new URL(item.original).pathname.split('/').at(-1);
    const youtubeThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
      <div className="relative">
        <button type="button" onClick={() => onCarouselItemClicked(item)} className="relative">
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-4xl bg-gray-700 bg-opacity-10 text-primary">
            <img alt="Youtube" src={item.thumbnail!} className="w-20" />
          </div>
          <img
            alt={item.originalAlt}
            className="image-gallery-image"
            src={youtubeThumbnail}
            loading="eager"
          />
        </button>
      </div>
    );
  };

  const previousArrow = (
    <NavigationButton shouldHide={currentSlideIndexInModalCarousel === 0}>
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

  const nextArrow = (
    <NavigationButton
      shouldHide={currentSlideIndexInModalCarousel === appsData['screenshots-list'].length - 1}
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

  return (
    <AppCard title="Screenshots">
      <ImageGallery
        additionalClass={styles.container}
        items={carouselItems}
        showNav={false}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay
        infinite
        renderItem={renderCarouselItem}
      />
      {/* Main modal */}
      <div ref={modalContainerRef} />
      <Modal
        dismissible
        root={modalContainerRef.current || undefined}
        position="center"
        size="7xl"
        show={initialSlideIndexInModalCarousel != null}
        onClose={() => setInitialSlideIndexInModalCarousel(null)}
        className={classNames(
          '!h-full [&>div]:overflow-hidden [&>div]:w-full [&>div]:!max-w-none [&>div]:h-auto',
          styles.modalContainer,
        )}
      >
        <button
          type="button"
          onClick={() => openCarouselInModal(null)}
          className={classNames(styles.arrowBtn, styles.closeBtn)}
        >
          <IoMdClose />
        </button>
        {initialSlideIndexInModalCarousel !== null && (
          <div>
            {initialSlideIndexInModalCarousel !== null && (
              <Slider
                infinite={false}
                adaptiveHeight
                nextArrow={nextArrow}
                prevArrow={previousArrow}
                initialSlide={initialSlideIndexInModalCarousel}
                beforeChange={(_, nextIndex) => {
                  setCurrentSlideIndexInModalCarousel(nextIndex);
                }}
                className="[&_.slick-list]:z-40"
              >
                {appsData['screenshots-list'].map(([screenShotSrc], i) => (
                  <div className="!w-[calc(100vw_-_2rem)] max-w-[calc(100vw_-_2rem)] h-[90vh] max-h-[90vh] overflow-hidden !flex items-center justify-center shrink-0">
                    {isYoutubeEmbedUrl(screenShotSrc) ? (
                      i === currentSlideIndexInModalCarousel && (
                        <iframe
                          title="youtube"
                          src={screenShotSrc}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      )
                    ) : (
                      <img
                        src={screenShotSrc}
                        className="inline-block max-h-full max-w-full"
                        loading="eager"
                        alt={`Preview ${i}`}
                      />
                    )}
                  </div>
                ))}
              </Slider>
            )}
          </div>
        )}
        {/* Modal body */}
      </Modal>
    </AppCard>
  );
}
