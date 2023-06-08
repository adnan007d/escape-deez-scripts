import { execPath } from "process";
import Tokenizer from "../src/regex-with-tokenizer";

describe("Parsing Simple Strings", () => {
    test("Double Quoted String", () => {
        const str = `"Hello World"`;
        const token = new Tokenizer(str);

        const expectedString = `Hello World`;

        expect(token.parseString()).toBe(expectedString);
    });

    test("Double Quoted String with single quote string inside", () => {
        const str = `"Hello 'Wor'ld"`;
        const token = new Tokenizer(str);

        const expectedString = `Hello 'Wor'ld`;

        expect(token.parseString()).toBe(expectedString);
    });

    test("Single Quoted String", () => {
        const str = `'Hello World'`;
        const token = new Tokenizer(str);

        const expectedString = `Hello World`;

        expect(token.parseString()).toBe(expectedString);
    });

    test("Single Quoted String with Double quote string inside", () => {
        const str = `'Hello "Wor"ld'`;
        const token = new Tokenizer(str);

        const expectedString = `Hello "Wor"ld`;

        expect(token.parseString()).toBe(expectedString);
    });

    test("Empty String", () => {
        const str = `""`;
        const token = new Tokenizer(str);

        const expectedString = ``;

        expect(token.parseString()).toBe(expectedString);
    });

    test("Empty String with empty string", () => {
        const str = `"''"`;
        const token = new Tokenizer(str);

        const expectedString = `''`;
        expect(token.parseString()).toBe(expectedString);

        const newToken = new Tokenizer(`'""'`);
        expect(newToken.parseString()).toBe(`""`);
    });
});

describe("Parsed Complex Strings", () => {
    test("Single BackSlash", () => {
        const str = `"hello\\""`;
        const token = new Tokenizer(str);

        const expectedString = `hello"`;
        expect(token.parseString()).toBe(expectedString);
    });

    test("Double BackSlash", () => {
        const str = `"hello\\\""`;
        const token = new Tokenizer(str);

        const expectedString = `hello\"`;
        expect(token.parseString()).toBe(expectedString);
    });

    test("Double BackSlash", () => {
        const str = `"h\"ello\\\""`;
        const token = new Tokenizer(str);

        const expectedString = `h"ello\"`;
        expect(token.parseString()).toBe(expectedString);
    });
});
