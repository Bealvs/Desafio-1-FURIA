import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landing_page/Landing_Page'
import { Chat } from './pages/chat/chat'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
