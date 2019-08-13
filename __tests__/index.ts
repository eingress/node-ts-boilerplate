/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { echo } from '../src';

test('echo(message) should echo message', () => {
  expect(echo('hello!')).toEqual('hello!');
});
