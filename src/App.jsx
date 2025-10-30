import { useState } from 'react';
import playlistGenerator from './Components/PlaylistGenerator';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <playlistGenerator />
    </>
  )
}

export default App
