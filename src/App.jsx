import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Play from './pages/Play';
import NotFound from './pages/NotFound';

import HM from './pages/works/HM';
import CatchTreasure from './pages/works/CatchTreasure';
import JobApplicationTracker from './pages/works/JobApplicationTracker';
import ThePapery from './pages/works/ThePapery';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <ScrollToTop />
        <main className="container max-w-[1440px] min-w-[320px] pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/play" element={<Play/>}/>
            <Route path="/works/hm-app-redesign" element={<HM/>}/>
            <Route path="/works/catch-treasure" element={<CatchTreasure/>}/>
            <Route path="/works/job-application-tracker" element={<JobApplicationTracker/>}/>
            <Route path="/works/the-papery" element={<ThePapery/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
