/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { echo } from '../src/index';

describe('echo', () => {
  test('should echo message', () => {
    expect(echo('hello!')).toEqual('hello!');
  });
});
