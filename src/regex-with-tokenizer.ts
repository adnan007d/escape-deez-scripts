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
        let currentQuote: `"` | `'` | null = null;

        let res = "";
        while (this.ch !== "\0") {
            let stop = false;
            switch (this.ch) {
                case `'`: // Intentinal fall through
                case `"`:
                    if (currentQuote == this.ch) {
                        stop = true;
                    } else if (currentQuote === null) {
                        currentQuote = this.ch;
                    } else {
                        res += this.ch;
                    }
                    break;
                case `\\`:
                    let i = 0;
                    while (
                        this.ch === `\\` &&
                        this.readPosition < this.input.length
                    ) {
                        if ((i & 1) !== 0) {
                            res += `\\`;
                        }
                        this.readChar();
                        ++i;
                    }
                    // @ts-expect-error false positive
                    if (this.ch !== currentQuote && (i & 1) === 0) {
                        break;
                    }
                default:
                    res += this.ch;
            }
            // break when end of string reached
            // if (stop) {
            //    break;
            // }
            this.readChar();
        }
        return res;
    }
}

export default Tokenizer;
