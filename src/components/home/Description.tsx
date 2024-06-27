import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const ResponsiveBreak = () => (
  <>
    <span className="hidden sm:inline"> </span>
    <br className="sm:hidden" />
  </>
);

const Description = () => {
  return (
    <>
      <span className="text-xl">FrontEnd Developer</span>
      <h1 className="h1 mb-6">
        {`Hello I'm`} <br /> <span className="text-accent">Jake</span>
      </h1>
      <p className="mb-9 max-w-[500px] whitespace-pre-line text-white/80">
        프론트엔드 생태계의 최신 트렌드를
        <ResponsiveBreak />
        열정적으로 탐구합니다.
        <br />
        사용자 경험을 개선하는 UI/UX에
        <ResponsiveBreak />
        관심을 가지고 있습니다.
        <br />
        가독성, 유지보수성, 재사용성을 고려한
        <ResponsiveBreak />
        높은 퀄리티의 코드를 작성하기 위해 노력합니다.
      </p>
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
