const wordOnPrint = ref('')

const write = (counter, word) => {
    if (counter < word.length + 1) {
        wordOnPrint = word.substring(0, counter);
        counter++;
        setTimeout(write, speed);
    }
}
const erease = () => {
    if (wordOnPrint.length > 0) {
        wordOnPrint = wordOnPrint.substring(
            0,
            wordOnPrint.length - 1
        );
        setTimeout(erease, speed);
    }
}
const awaitTimeout = (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
const typewriter = () => {
    this.wordIterator =
        (this.wordsToType.length + this.wordIterator) % this.wordsToType.length;
    this.word = this.wordsToType[this.wordIterator];
    this.wordIterator++;
    this.counter = 0;
    this.write(this.word);
    this.awaitTimeout(
        this.word.length * this.speed + 4 * this.speed + this.wordToStay
    ).then(() => this.erease());
    this.awaitTimeout(
        this.word.length * 2 * this.speed + 4 * this.speed + this.wordToStay
    ).then(() => this.typewriter());
}