class Tokenizer {
    private input = "";
    private readPosition = 0;
    private newEscapedString = "";
    constructor(input: string) {
        this.input = input;
    }

    readChar(): null | string {
        if (this.readPosition >= this.input.length) {
            return null;
        }

        const currentChar = this.input[this.readPosition];

        ++this.readPosition;
        return currentChar;
    }

    parseString(): string {
        type Colon = `"` | `'`;
        let currentQuote: Colon | null = null;
        let start = -1;
        let end = -1;
        for (let i = 0; i < this.input.length; ++i) {
            if (this.input[i] === `"` || this.input[i] === `'`) {
                if (currentQuote === this.input[i]) {
                    break;
                } else if (currentQuote === null) {
                    currentQuote = this.input[i] as Colon;
                    start = i + 1; // plus one to skip the the quote
                } else {
                    end = i;
                }
            } else if (currentQuote !== null) {
                end = i;
            }
        }

        return this.input.substring(start, end + 1);
    }
}

const obj = new Tokenizer("Hello World");
//let currentChar = obj.readChar();
//while (currentChar != null) {
//    console.log(currentChar);
//    currentChar = obj.readChar();
//}
export default Tokenizer;
