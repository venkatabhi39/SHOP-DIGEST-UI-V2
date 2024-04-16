import { intervalToDuration } from 'date-fns/fp';

const firstDay = new Date('2023-07-25T00:00:00.0Z');

// eslint-disable-next-line import/prefer-default-export
export const getDayRoundsPassed = (): number =>
  Math.floor(
    (intervalToDuration({
      start: firstDay,
      end: new Date(),
    }).days || 0) / 3,
  ) + 1;

export const getPaginationLimit = () => 50 * getDayRoundsPassed();
