import { NumberToLettersPipe } from './number-to-letters.pipe';

describe('NumberToLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
