import {ddescribe, describe, it, iit, xit, expect, beforeEach, afterEach} from 'angular2/test_lib';

import {UpperCasePipe} from 'angular2/pipes';

export function main() {
  describe("UpperCasePipe", () => {
    var upper;
    var lower;
    var pipe;

    beforeEach(() => {
      lower = 'something';
      upper = 'SOMETHING';
      pipe = new UpperCasePipe();
    });

    describe("transform", () => {

      it("should return uppercase", () => {
        var val = pipe.transform(lower);
        expect(val).toEqual(upper);
      });

      it("should uppercase when there is a new value", () => {
        var val = pipe.transform(lower);
        expect(val).toEqual(upper);
        var val2 = pipe.transform('wat');
        expect(val2).toEqual('WAT');
      });

      it("should not support other objects",
         () => { expect(() => pipe.transform(new Object())).toThrowError(); });
    });

  });
}
