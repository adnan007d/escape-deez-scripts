type Colon = `"` | `'`;

class Tokenizer {
    private input = "";
    private readPosition = 0;
    private ch: string = "\0";
    private currentPosition = 0;
    private newEscapedString = "";

    constructor(input: string) {
        this.input = input;
        this.readChar();
    }

    private readChar() {
        if (this.readPosition >= this.input.length) {
            this.ch = "\0";
        } else {
            this.ch = this.input[this.readPosition];
        }
        this.currentPosition = this.readPosition;
        this.readPosition++;
    }

    parseString(): string {
        let currentQuote: Colon | null = null;

        let start = 0;
        let end = 0;

        while (this.ch !== "\0") {
            if (this.ch === `"` || this.ch === `'`) {
                if (currentQuote === this.ch) {
                    break;
                } else if (currentQuote === null) {
                    currentQuote = this.ch as Colon;
                    start = this.currentPosition;
                } else {
                    end = this.currentPosition;
                }
            } else if (currentQuote !== null) {
                end = this.currentPosition;
            }

            this.readChar();
        }

        return this.input.substring(start + 1, end + 1);
    }
}

export default Tokenizer;
