import assert from "assert";
import { Crypto } from "../src";

context("Crypto", () => {

  const crypto = new Crypto();

  context("getRandomValues", () => {

    it("Uint8Array", () => {
      const array = new Uint8Array(5);
      const array2 = crypto.getRandomValues(array);

      assert.notEqual(Buffer.from(array).toString("hex"), "0000000000");
      assert.equal(Buffer.from(array2).equals(array), true);
    });

    it("Uint16Array", () => {
      const array = new Uint16Array(5);
      const array2 = crypto.getRandomValues(array);

      assert.notEqual(Buffer.from(array).toString("hex"), "00000000000000000000");
      assert.equal(Buffer.from(array2).equals(Buffer.from(array)), true);
    });

  });

});
