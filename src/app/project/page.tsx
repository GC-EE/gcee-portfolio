'use client';

import EmblaCarouselSide from '@/components/project/EmblaCarouselSide/EmblaCarouselSide';
import EmblaCarouselVertical from '@/components/project/EmblaCarouselVertical/EmblaCarouselVertical';

const Project = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h3 className="h3 mb-6 w-full text-center sm:text-start">
          Company Project
        </h3>
        {/* 위쪽 슬라이드 아이콘 */}
        {/* <div className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
            >
              <g
                transform="translate(0,512) scale(0.1,-0.1)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path d="M448 4366 c-15 -8 -113 -74 -219 -147 -192 -132 -229 -168 -229 -219 0 -38 35 -88 75 -107 45 -21 77 -11 177 58 39 27 73 47 75 46 2 -2 -2 -62 -8 -133 -45 -510 107 -1366 353 -1989 42 -108 66 -140 114 -154 62 -18 144 41 144 105 0 12 -29 100 -64 196 -158 429 -262 881 -306 1333 -13 131 -15 506 -2 570 l7 40 58 -82 c69 -98 88 -113 143 -113 78 0 134 79 107 149 -12 33 -256 387 -293 424 -33 35 -92 45 -132 23z" />
                <path d="M1373 4336 c-245 -60 -419 -293 -399 -536 7 -83 24 -147 54 -206 11 -22 216 -338 456 -704 l435 -665 -20 -30 c-95 -141 -120 -314 -68 -472 23 -71 138 -254 249 -398 561 -725 1307 -775 2245 -149 351 233 599 511 706 788 66 171 82 255 83 436 0 124 -4 186 -17 250 -30 137 -83 289 -145 411 -76 152 -402 650 -467 714 -94 93 -223 145 -361 145 -144 0 -264 -50 -366 -152 l-59 -59 -67 27 c-81 33 -219 44 -303 24 -93 -21 -179 -69 -254 -142 l-69 -68 -64 26 c-171 68 -387 28 -528 -99 l-50 -45 -234 361 c-160 246 -253 380 -292 419 -117 116 -298 164 -465 124z m238 -247 c26 -12 56 -30 67 -42 12 -12 191 -283 399 -602 391 -598 398 -608 439 -575 20 18 18 40 -12 105 -87 190 49 402 256 398 123 -2 181 -42 287 -200 73 -107 79 -114 108 -111 40 4 44 33 15 101 -73 169 77 377 271 377 59 0 136 -30 183 -72 24 -21 71 -80 104 -131 70 -107 82 -120 114 -115 32 4 35 39 8 101 -50 116 11 260 142 333 46 25 63 29 128 29 87 0 146 -23 199 -76 38 -37 314 -452 393 -589 129 -225 189 -475 167 -695 -40 -398 -302 -730 -824 -1045 -686 -412 -1221 -408 -1639 14 -131 133 -318 390 -359 494 -21 53 -22 144 -1 205 15 44 86 137 104 137 5 0 52 -65 104 -145 53 -80 103 -148 111 -151 22 -9 47 16 42 40 -2 12 -268 425 -591 919 -323 494 -595 915 -603 935 -21 49 -20 156 1 206 65 156 231 222 387 155z" />
              </g>
            </svg>
          </div> */}

        <EmblaCarouselSide />

        <h3 className="h3 mb-6 mt-16 w-full text-center sm:text-start">
          Side Project
        </h3>
        <div className="hidden xl:block">
          <EmblaCarouselVertical />
        </div>

        <div className="xl:hidden">
          <EmblaCarouselSide />
        </div>
      </div>
    </section>
  );
};

export default Project;
