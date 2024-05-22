import '@radix-ui/themes/styles.css';
import './App.css';
import { Minesweeper } from './Minesweeper.jsx';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <>
      <Theme className="flex flex-col justify-center items-center">
        <Minesweeper />
      </Theme>
    </>
  );
}

export default App;
