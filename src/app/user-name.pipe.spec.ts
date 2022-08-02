import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  const pipe = new UserNamePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  //written by me
  it('transforms "lohith.dhanakonda@acsicorp.com" to "lohith dhanakonda"', () => {
    expect(pipe.transform('lohith.dhanakonda@acsicorp.com')).toBe('lohith dhanakonda');
  });
});
