import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButtonVertical';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtonsVertical';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};
const SLIDE_COUNT = 5;

const EmblaCarouselVertical = (props: PropType) => {
  const {
    slides = Array.from(Array(SLIDE_COUNT).keys()),
    options = { axis: 'y' },
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-mt-4 flex h-80 flex-col">
          {slides.map((index) => (
            <div className="min-h-0 flex-[0_0_100%] pt-4" key={index}>
              <div className="flex h-full items-center justify-center rounded-3xl text-4xl font-semibold shadow-inner shadow-gray-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4 xl:justify-between">
        <div className="-mr-1 flex flex-wrap items-center justify-start">
          {[...Array(scrollSnaps.length)].map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                index === selectedIndex
                  ? 'after:h-5 after:w-5 after:rounded-full after:border-2 after:border-gray-200 after:content-[""]'
                  : 'after:h-5 after:w-5 after:rounded-full after:border-2 after:border-gray-500 after:content-[""]'
              }`}
            />
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselVertical;
