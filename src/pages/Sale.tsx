import { useEffect, useState } from 'react';
import IlanListeGrid from '../components/RealEstateGrid';
import { useLanguage } from '../contexts/LanguageContext';
import { HiHome, HiPhone,  HiMail, HiLocationMarker, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Ilan {
  _id: string;
  fiyat: string;
  adres: string;
  emlak_tipi: string;
  bfoto1: string;
  bfoto2: string;
  bfoto3: string;
  bfoto4: string;
  bfoto5: string;
  bfoto6: string;
  bfoto7: string;
  bfoto8: string;
  bfoto9: string;
  bfoto10: string;
  foto1: string;
  foto2: string;
  foto3: string;
  foto4: string;
  foto5: string;
  foto6: string;
  foto7: string;
  foto8: string;
  foto9: string;
  foto10: string;
  title: string;
  aciklama: string;
  emlakciadi: string;
  emlakcifoto: string;
  emlakcicep: string;
}

const translations = {
  tr: {
    title: 'Satılık İlanlar',
    found: 'adet satılık emlak ilanı bulundu',
    loading: 'Yükleniyor...',
    error: 'Hata:',
    tryAgain: 'Tekrar Dene',
    noListings: 'Henüz satılık ilan bulunmamaktadır.',
    errorMessage: 'Veri alınırken hata oluştu'
  },
  en: {
    title: 'For Sale Listings',
    found: 'properties for sale found',
    loading: 'Loading...',
    error: 'Error:',
    tryAgain: 'Try Again',
    noListings: 'No properties for sale available yet.',
    errorMessage: 'Error occurred while fetching data'
  }
};

const Sale = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [ilanlar, setIlanlar] = useState<Ilan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSatilik = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/ilanlar?tip=Satılık');
        if (!res.ok) {
          throw new Error(t.errorMessage);
        }
        const data = await res.json();
        setIlanlar(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
      } finally {
        setLoading(false);
      }
    };
    fetchSatilik();
  }, [t.errorMessage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white py-32 px-5 transition-colors duration-300">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="ml-4 text-lg">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white py-32 px-5 transition-colors duration-300">
        <div className="text-center">
          <p className="text-red-600 text-lg">{t.error} {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
          >
            {t.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white py-32 px-5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {ilanlar.length} {t.found}
          </p>
        </div>
        
        {ilanlar.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t.noListings}
            </p>
          </div>
        ) : (
          <IlanListeGrid ilanlar={ilanlar} />
        )}
      </div>
      <footer className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300 px-4 pt-16 pb-8">
              <div className="max-w-7xl mx-auto">
            
                {/* LOGO - Kartlardan sonra orta boşluk */}
                <div className="text-center mb-6">
                  <img src="/logov2.png" alt="Karadeniz İnşaat" className="h-20 mx-auto" />
                </div>
            
                {/* İLETİŞİM BİLGİLERİ - Logo ile alt blok arası yumuşak boşluk */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 mb-10 text-center">
                  <div className="flex items-center gap-2">
                    <HiMail className="text-red-500" />
                    <a href="mailto:info@karadenizinsaat.com.tr" className="hover:text-black dark:hover:text-white">
                      info@karadenizinsaat.com.tr
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiPhone className="text-red-500" />
                    <a href="tel:05312771633" className="hover:text-black dark:hover:text-white">
                      0531 277 16 33
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiLocationMarker className="text-red-500" />
                    <span>Ekşioğlu Mah Mevlana Cad. 70. Sokak No:23, Çekmeköy/İstanbul</span>
                  </div>
                </div>
            
                {/* ALT BAR - Sosyal Medya & Telif */}
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-t-xl py-8 px-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
                    
                    {/* Sosyal Medya */}
                    <div className="flex gap-5 text-xl">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        <FaFacebook />
                      </a>
                      <a href="https://www.instagram.com/rotanewlifegayrimenkul/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        <FaInstagram />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        <FaLinkedin />
                      </a>
                    </div>
            
                    {/* Telif Hakkı */}
                    <div>
                      <p className="font-semibold text-zinc-800 dark:text-white">
                        © {new Date().getFullYear()} Karadeniz İnşaat
                      </p>
                      <p>{language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</p>
                    </div>
                  </div>
                </div>
            
              </div>
            </footer>
    </div>
    
  );
};

export default Sale;