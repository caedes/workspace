import pipotron from '../src';
import settings from '../src/settings';

const sum = (previousValue, currentValue) => previousValue + currentValue;

const lengths = settings.map(statement => {
  if (typeof statement === 'string')
    return {
      min: statement.length,
      max: statement.length,
    };

  const min = Math.min(...statement.map(({ length }) => length));
  const max = Math.max(...statement.map(({ length }) => length));

  return { min, max };
});

const maxLengths = lengths.map(length => length.max);
const maxLength = maxLengths.reduce(sum, 0);
const minLengths = lengths.map(length => length.min);
const minLength = minLengths.reduce(sum, 0);

describe('pipotron', () => {
  new Array(1000).fill(null).map(() => {
    it('returns a minimal sentence', () => {
      expect(pipotron().length).toBeGreaterThanOrEqual(minLength);
    });

    it('returns a maximal sentence', () => {
      expect(pipotron().length).toBeLessThanOrEqual(maxLength);
    });
  });
});
