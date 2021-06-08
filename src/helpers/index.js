export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLettersSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLettersSet.has(letter)).length;
}
