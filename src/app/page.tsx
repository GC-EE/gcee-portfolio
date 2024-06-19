import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/home/Social';
import Photo from '@/components/home/Photo';
import CircleAnimation from './resume/page';
import Stats from '@/components/home/Stats';
const HomePage = () => {
  return (
    <section className="h-full">
      {/* 프로필 이미지 / 설명 */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-20 xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">FrontEnd Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Jake</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant={'outline'}
                size={'lg'}
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
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
