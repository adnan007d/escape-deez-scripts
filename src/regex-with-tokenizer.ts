class Tokenizer {
    private input = "";
    private readPosition = 0;
    private newEscapedString = "";
    constructor(input: string) {
        this.input = input;
    }

    readChar() {
        if (this.readPosition >= this.input.length) {
            return null;
        }

        const currentChar = this.input[this.readPosition];

        ++this.readPosition;
        return currentChar;
    }
}

const obj = new Tokenizer("Hello World");
let currentChar = obj.readChar();

while (currentChar != null) {
    console.log(currentChar);
    currentChar = obj.readChar();
}
