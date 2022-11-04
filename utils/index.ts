import range from 'lodash.range';
import shuffle from 'lodash.shuffle';

// One random integer
export const randomInteger = (min: number, max: number): number => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Array of uniq integers
export const randomIntegersArray = (min: number, max: number, elementsCount: number): number[] =>
  shuffle(range(min, max)).slice(0, elementsCount);
