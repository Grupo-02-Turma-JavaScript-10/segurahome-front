import { Routes, Route } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { HomePage } from './pages/Home/Home'
import { PlanosPage } from './pages/Planos/Planos'
import { ImoveisPage } from './pages/Imoveis/Imoveis'
import { SobrePage } from './pages/Sobre/Sobre'



function App() {
  return (
    <>
      <div
        aria-hidden="true"
        className={
          'fixed inset-0 -z-10 pointer-events-none ' +
          'bg-black ' +
          "bg-[radial-gradient(900px_520px_at_20%_-10%,rgba(0,160,80,0.22),transparent_60%),radial-gradient(720px_420px_at_85%_10%,rgba(224,232,232,0.10),transparent_55%),radial-gradient(760px_460px_at_70%_95%,rgba(0,160,80,0.12),transparent_55%),linear-gradient(180deg,rgba(0,0,0,1),rgba(0,0,0,1))]"
        }
      />

      <div className="min-h-screen font-['Inter'] text-[#F8F8F8]">
        <Navbar />

        <main className="pt-24 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planos" element={<PlanosPage />} />
            <Route path="/imoveis" element={<ImoveisPage />} />
            <Route path="/sobre" element={<SobrePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
