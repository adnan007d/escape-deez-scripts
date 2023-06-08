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
        let res = "";
        for (let i = 0; i < this.input.length; ++i) {
            if (this.input[i] === `"` || this.input[i] === `'`) {
                if (currentQuote === this.input[i]) {
                    break;
                } else if (currentQuote === null) {
                    currentQuote = this.input[i] as Colon;
                } else {
                    res += this.input[i];
                }
            } else if (currentQuote !== null) {
                res += this.input[i];
            }
        }

        return res;
    }
}

const obj = new Tokenizer("Hello World");
//let currentChar = obj.readChar();
//while (currentChar != null) {
//    console.log(currentChar);
//    currentChar = obj.readChar();
//}
export default Tokenizer;
