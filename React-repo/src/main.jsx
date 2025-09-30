import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Intro() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Intro />
  </StrictMode>,

)
