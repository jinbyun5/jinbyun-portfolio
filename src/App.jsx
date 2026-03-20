import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Play from './pages/Play';

import HM from './pages/works/HM';
import DeepBlueRescue from './pages/works/DeepBlueRescue';
import GlowBites from './pages/works/GlowBites';
import ThePapery from './pages/works/ThePapery';

// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <ScrollToTop />
        <main className="container max-w-[1440px] min-w-[320px] min-h-screen pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/play" element={<Play/>}/>
            <Route path="/works/hm-app-redesign" element={<HM/>}/>
            <Route path="/works/deep-blue-rescue" element={<DeepBlueRescue/>}/>
            <Route path="/works/glow-bites" element={<GlowBites/>}/>
            <Route path="/works/the-papery" element={<ThePapery/>}/>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
