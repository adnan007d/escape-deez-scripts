import Tokenizer from "../src/regex-with-tokenizer";

describe("Parse Strings", () => {
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
});
