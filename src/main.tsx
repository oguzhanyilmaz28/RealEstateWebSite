import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForRent from "./pages/ForRent";
import Sale from "./pages/Sale";
import IlanDetay from './pages/RealEstataDetail'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from "./components/ScrollToTop";


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* Türkçe rotalar */}
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kiralik" element={<ForRent />} />
            <Route path="/satilik" element={<Sale />} />
            <Route path="/ilan/:id" element={<IlanDetay />} />
            {/* İngilizce rotalar */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-rent" element={<ForRent />} />
            <Route path="/for-sale" element={<Sale />} />
            <Route path="/listing/:id" element={<IlanDetay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
)