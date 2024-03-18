import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@radix-ui/themes/styles.css';
import './App.css'
import { Minesweeper } from './Minesweeper.jsx';
import { Theme, ThemePanel } from '@radix-ui/themes';


function App() {
  return (
    <>
      <Theme>
        <div>
          <h1 className="text-3xl font-bold underline">Minesweeper</h1>
        </div>
        <Minesweeper/>
      </Theme>
    </>
  )
}

export default App
