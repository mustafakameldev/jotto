import { useEffect } from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './guessedWord';
import Input from './input';
import { getSecretWord } from './acions';
import { useSelector } from 'react-redux';
function App() {
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);
  // TODO: get props from shared state

  const secretWord = 'party';
  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
