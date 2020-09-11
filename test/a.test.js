import { expect } from '@esm-bundle/chai';
import foo from '../src/foo.js';

describe('a', () => {
  it('exports CSS as text', () => {
    expect(foo).to.include(`html {\n  color: blue;\n}\n`)
  });
});