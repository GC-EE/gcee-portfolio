'use client';

import { useEffect, useState } from 'react';

export const useTypingAnime = (
  text: string,
  frame: number,
  startFlag: boolean = true
) => {
  const [animeFinishFlag, setAnimeFinishFlag] = useState<boolean>(false);
  const [typingText, setTypingText] = useState<string[]>([]);

  useEffect(() => {
    if (!startFlag) return;

    let textIndex = 0;
    let lastTimeStamp: number | null = null;

    const animationCallback = (timeStamp: number) => {
      if (lastTimeStamp === null) {
        lastTimeStamp = timeStamp;
      }
      console.log('timeStamp', timeStamp);
      console.log('lastTimeStamp', lastTimeStamp);
      const elapsedTime = timeStamp - lastTimeStamp;

      if (elapsedTime > frame) {
        lastTimeStamp = timeStamp;
        setTypingText((prevText) => {
          const newChar = text[textIndex];
          console.log('newChar', newChar);

          const newText = [...prevText, newChar];

          return newText;
        });
        textIndex += 1;
      }

      if (textIndex < text.length) {
        requestAnimationFrame(animationCallback);
      } else {
        setAnimeFinishFlag(true);
      }
    };

    const animeId = requestAnimationFrame(animationCallback);

    return () => {
      cancelAnimationFrame(animeId);
    };
  }, [text, frame, startFlag]);

  return { animeFinishFlag, typingText };
};
