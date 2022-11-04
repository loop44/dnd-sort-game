import { useEffect, useState } from 'react';

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));

  const off = () => {
    audio.pause();
  };

  useEffect(() => {
    audio.play();
  }, []);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => audio.play());
    };
  }, []);

  return off;
};
