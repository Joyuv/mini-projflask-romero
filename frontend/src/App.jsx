import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/mensagem')
      .then(res => res.json())
      .then(data => setMensagem(data.mensagem));
  }, []);

  return (
    <div>
      <h1>React + Backend</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App
