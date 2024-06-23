'use client';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
const stats = [
  { num: 3, text: 'Years of\n experience' },
  { num: 5, text: 'Projects\ncompleted' },
  { num: 10, text: 'Familiar\ntechnology' },
  { num: 100, text: 'what kind?' },
];

const Stats = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 컴포넌트의 10%가 보이면 트리거
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section>
      <div
        className="container mx-auto grid grid-cols-2 gap-6 sm:grid-cols-4"
        ref={ref}
      >
        {stats?.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-center gap-4">
              {isVisible ? (
                <CountUp
                  end={item.num}
                  duration={5}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
              ) : (
                <span className="text-4xl font-extrabold xl:text-6xl">0</span>
              )}
              <p className="whitespace-pre-line leading-snug text-white/80">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
