import React from 'react';
import Photo from '@/components/home/Photo';
import Stats from '@/components/home/Stats';
import Description from '@/components/home/Description';

const HomePage = () => {
  return (
    <section className="h-full">
      {/* 프로필 이미지 / 설명 */}
      <div className="container mx-auto h-full pb-16 xl:pb-24 xl:pt-8">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-20">
          {/* 설명 */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <Description />
          </div>
          {/* 프로필 이미지 */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* 통계 */}
      <Stats />
    </section>
  );
};

export default HomePage;
