import { useState } from 'react';
import PlaylistGenerator from './Components/PlaylistGenerator';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlaylistGenerator />
    </>
  )
}

export default App
