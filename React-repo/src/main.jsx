import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Footer.jsx';
import Heading from './Heading.jsx';
 import MainContent from './MainContent.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <Heading />
    <MainContent />
    <Footer />
  </StrictMode>
)


//how to reconnect with thelive server
if (import.meta.hot) {
  import.meta.hot.accept()
}

//how to disconnect with the live server
// if (import.meta.hot) {
//   import.meta.hot.dispose(() => {
//     // Perform any necessary cleanup here
//   })
// }