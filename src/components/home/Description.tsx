'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

// const ResponsiveBreak = () => (
//   <>
//     <span className="hidden sm:inline"> </span>
//     <br className="sm:hidden" />
//   </>
// );

const Description = () => {
  return (
    <>
      <span className="text-xl">FrontEnd Developer</span>
      <h1 className="h1 mb-6">
        {`Hello I'm`} <br /> <span className="text-accent">Jake</span>
      </h1>

      <div className="mb-9 min-h-[195px] sm:min-h-[130px]">
        <span className="hidden max-w-[500px] whitespace-pre-line text-white/80 sm:inline-block">
          <TypeAnimation
            sequence={[
              1400,
              `프론트엔드 생태계의 최신 트렌드를 열정적으로 탐구합니다.\n사용자 경험을 개선하는 UI/UX에 관심을 가지고 있습니다.\n가독성, 유지보수성, 재사용성을 고려한 높은 퀄리티의 코드를 작성하기 위해 노력합니다.`,
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line' }}
            cursor={false}
          />
        </span>

        <span className="max-w-[500px] whitespace-pre-line text-white/80 sm:hidden">
          <TypeAnimation
            sequence={[
              1400,
              `프론트엔드 생태계의 최신 트렌드를 \n열정적으로 탐구합니다.\n사용자 경험을 개선하는 UI/UX에 \n관심을 가지고 있습니다.\n가독성, 유지보수성, 재사용성을 고려한 \n높은 퀄리티의 코드를 작성하기 위해 노력합니다.`,
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line' }}
            cursor={false}
          />
        </span>
      </div>

      {/* 프론트엔드 생태계의 최신 트렌드를
        <ResponsiveBreak />
        열정적으로 탐구합니다.
        <br />
        사용자 경험을 개선하는 UI/UX에
        <ResponsiveBreak />
        관심을 가지고 있습니다.
        <br />
        가독성, 유지보수성, 재사용성을 고려한
        <ResponsiveBreak />
        높은 퀄리티의 코드를 작성하기 위해 노력합니다. */}

      <div className="flex justify-center xl:justify-normal">
        <Button
          variant={'outline'}
          size={'lg'}
          className="flex items-center gap-2 uppercase"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </div>
    </>
  );
};

export default Description;
