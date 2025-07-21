import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { HiHome,HiPhone,  HiMail, HiLocationMarker, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Ilan {
  _id: string;
  link: string;
  fiyat: string;
  adres: string;
  ilan_tarihi: string;
  emlak_tipi: string;
  brut_m2: string;
  net_m2: string;
  oda_sayisi: string;
  bina_yasi: string;
  bulundugu_kat: string;
  kat_sayisi: string;
  isitma: string;
  banyo_sayisi: string;
  mutfak: string;
  balkon: string;
  asansor: string;
  otopark: string;
  esyali: string;
  kullanim_durumu: string;
  site_icerisinde: string;
  site_adi: string;
  aidat: string;
  depozito: string;
  tapu_durumu: string;
  kimden: string;
  title: string;
  aciklama: string;
  emlakciadi: string;
  emlakcifoto: string;
  emlakcicep: string;
  [foto: `foto${number}`]: string;
  [bfoto: `bfoto${number}`]: string;
}

const translations = {
  tr: {
    loading: 'Yükleniyor...',
    notFound: 'İlan bulunamadı.',
    link : 'İlan Linki:',
    listingDate: 'İlan Tarihi:',
    propertyType: 'Emlak Tipi:',
    grossArea: 'Brüt m²:',
    netArea: 'Net m²:',
    rooms: 'Oda Sayısı:',
    buildingAge: 'Bina Yaşı:',
    floor: 'Kat:',
    bathroom: 'Banyo:',
    heating: 'Isıtma:',
    kitchen: 'Mutfak:',
    balcony: 'Balkon:',
    elevator: 'Asansör:',
    parking: 'Otopark:',
    furnished: 'Eşyalı:',
    usage: 'Kullanım:',
    site: 'Site:',
    siteName: 'Site Adı:',
    dues: 'Aidat:',
    deposit: 'Depozito:',
    deed: 'Tapu:',
    realtorInfo: 'Emlakçı Bilgileri',
    realEstateConsultant: 'Emlak Danışmanı',
    description: 'Açıklama'
  },
  en: {
    loading: 'Loading...',
    link: 'Listing Link:',
    notFound: 'Listing not found.',
    listingDate: 'Listing Date:',
    propertyType: 'Property Type:',
    grossArea: 'Gross Area:',
    netArea: 'Net Area:',
    rooms: 'Rooms:',
    buildingAge: 'Building Age:',
    floor: 'Floor:',
    bathroom: 'Bathroom:',
    heating: 'Heating:',
    kitchen: 'Kitchen:',
    balcony: 'Balcony:',
    elevator: 'Elevator:',
    parking: 'Parking:',
    furnished: 'Furnished:',
    usage: 'Usage:',
    site: 'Site:',
    siteName: 'Site Name:',
    dues: 'Dues:',
    deposit: 'Deposit:',
    deed: 'Deed:',
    realtorInfo: 'Realtor Information',
    realEstateConsultant: 'Real Estate Consultant',
    description: 'Description'
  }
};

const IlanDetay = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const { id } = useParams();
  const [ilan, setIlan] = useState<Ilan | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [photoGroupIndex, setPhotoGroupIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchIlan = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/ilanlar/${id}`);
        const data = await response.json();
        setIlan(data);
      } catch (error) {
        console.error('Detay alınırken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIlan();
  }, [id]);

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      container.scrollTo({
        left: photoGroupIndex * container.clientWidth,
        behavior: "smooth",
      });
    }
  }, [photoGroupIndex]);

  useEffect(() => {
    const newGroupIndex = Math.floor(selectedPhoto / 16);
    if (newGroupIndex !== photoGroupIndex) {
      setPhotoGroupIndex(newGroupIndex);
    }
  }, [selectedPhoto]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="ml-4 text-lg">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (!ilan) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300">
        <p className="text-lg">{t.notFound}</p>
      </div>
    );
  }

  // Büyük fotoğrafları (bfoto) array'e çevir (dinamik)
  const bfotoArray = Object.entries(ilan)
    .filter(([key, val]) => key.startsWith("bfoto") && val && val.trim() !== "")
    .sort(([a], [b]) => Number(a.replace("bfoto", "")) - Number(b.replace("bfoto", "")))
    .map(([_, val]) => val);

  // Küçük fotoğrafları (foto) array'e çevir (dinamik)
  const fotoArray = Object.entries(ilan)
    .filter(([key, val]) => key.startsWith("foto") && val && val.trim() !== "")
    .sort(([a], [b]) => Number(a.replace("foto", "")) - Number(b.replace("foto", "")))
    .map(([_, val]) => val);

  const groupedFotoArray = [];
  for (let i = 0; i < fotoArray.length; i += 16) {
    groupedFotoArray.push(fotoArray.slice(i, i + 16));
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white pt-28 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Başlık ve Fiyat */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md px-6 py-6 mb-6 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-xl font-bold text-zinc-800 dark:text-white mb-3 leading-tight">
                  {ilan.title}
                </h2>
                <h1 className="text-xl sm:text-xl font-bold text-black dark:text-white mt-2 break-words">
                  {ilan.fiyat}
                </h1>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-blockabsolute top-2 right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {ilan.emlak_tipi}
                </span>
              </div>
            </div>
          </div>

          {/* Ana İçerik - 3 Kolonlu Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            
            {/* Sol Kolon - Fotoğraflar */}
            <div className="xl:col-span-6">
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 transition-colors duration-300">
                {/* Büyük Fotoğraf */}
                <div className="mb-4 relative">
                  <img 
                    src={bfotoArray[selectedPhoto] || '/no-image.jpg'} 
                    alt={`Büyük fotoğraf ${selectedPhoto + 1}`}
                    className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer"
                    onClick={() => {
                      const nextIndex = (selectedPhoto + 1) % Math.max(bfotoArray.length, fotoArray.length);
                      setSelectedPhoto(nextIndex);
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => {
                      const prevIndex = selectedPhoto === 0 
                        ? Math.max(bfotoArray.length, fotoArray.length) - 1 
                        : selectedPhoto - 1;
                      setSelectedPhoto(prevIndex);
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      const nextIndex = (selectedPhoto + 1) % Math.max(bfotoArray.length, fotoArray.length);
                      setSelectedPhoto(nextIndex);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {selectedPhoto + 1} / {Math.max(bfotoArray.length, fotoArray.length)}
                  </div>
                </div>

                {/* Küçük Fotoğraflar */}
                {fotoArray.length > 0 && (
                  <div className="mt-4">
                    <div className="relative overflow-hidden w-full">
                      <div
                        ref={sliderRef}
                        className="flex transition-all duration-500 ease-in-out"
                        style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
                      >
                        {groupedFotoArray.map((group, groupIndex) => (
                          <div
                            key={groupIndex}
                            className="grid grid-cols-8 gap-2 flex-shrink-0 w-full"
                          >
                            {group.map((foto, index) => {
                              const globalIndex = groupIndex * 16 + index;
                              return (
                                <div key={globalIndex} className="relative">
                                  <img
                                    src={foto || "/no-image.jpg"}
                                    alt={`foto ${globalIndex + 1}`}
                                    className={`w-full h-16 object-cover rounded-md cursor-pointer transition-all duration-200 ${
                                      selectedPhoto === globalIndex
                                        ? "ring-2 ring-blue-500 opacity-100"
                                        : "opacity-70 hover:opacity-100"
                                    }`}
                                    onClick={() => setSelectedPhoto(globalIndex)}
                                  />
                                  <div className="absolute bottom-0.5 left-0.5 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                                    {globalIndex + 1}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nokta Navigasyonu ve Oklar */}
                    <div className="flex justify-center items-center gap-3 mt-2">
                      <button
                        onClick={() => setPhotoGroupIndex((prev) => Math.max(prev - 1, 0))}
                        disabled={photoGroupIndex === 0}
                        className="text-xl text-gray-600 dark:text-gray-300 disabled:text-gray-300 dark:disabled:text-gray-600"
                      >
                        ◀
                      </button>

                      {groupedFotoArray.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setPhotoGroupIndex(index)}
                          className="text-xl text-gray-600 dark:text-gray-300"
                        >
                          {index === photoGroupIndex ? "●" : "○"}
                        </button>
                      ))}

                      <button
                        onClick={() =>
                          setPhotoGroupIndex((prev) =>
                            Math.min(prev + 1, groupedFotoArray.length - 1)
                          )
                        }
                        disabled={photoGroupIndex === groupedFotoArray.length - 1}
                        className="text-xl text-gray-600 dark:text-gray-300 disabled:text-gray-300 dark:disabled:text-gray-600"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Orta Kolon - Emlak Bilgileri */}
            <div className="xl:col-span-3">
              <div className="space-y-4">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 transition-colors duration-300">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.adres}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.listingDate}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.ilan_tarihi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.propertyType}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.emlak_tipi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.grossArea}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.brut_m2}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.netArea}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.net_m2}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.rooms}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.oda_sayisi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.buildingAge}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.bina_yasi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.floor}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.bulundugu_kat} / {ilan.kat_sayisi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.bathroom}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.banyo_sayisi}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.heating}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.isitma}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.kitchen}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.mutfak}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.balcony}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.balkon}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.elevator}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.asansor}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.parking}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.otopark}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.furnished}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.esyali}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.usage}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.kullanim_durumu}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.site}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.site_icerisinde}</span>
                    </div>
                    {ilan.site_adi && (
                      <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400 text-xs">{t.siteName}</span>
                        <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.site_adi}</span>
                      </div>
                    )}
                    {ilan.aidat && (
                      <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400 text-xs">{t.dues}</span>
                        <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.aidat}</span>
                      </div>
                    )}
                    {ilan.depozito && (
                      <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400 text-xs">{t.deposit}</span>
                        <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.depozito}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{t.deed}</span>
                      <span className="font-medium text-xs text-gray-900 dark:text-white">{ilan.tapu_durumu}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kolon - Emlakçı Bilgileri */}
            <div className="xl:col-span-3">
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 sticky top-32 transition-colors duration-300">
                <h3 className="text-md font-bold mb-4 text-gray-900 dark:text-white text-center">
                  {t.realtorInfo}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  {/* Sol taraf - İsim */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{ilan.emlakciadi}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t.realEstateConsultant}</p>
                  </div>
                  
                  {/* Sağ taraf - Fotoğraf */}
                  <div className="w-16 h-16 overflow-hidden border-2 border-gray-200 dark:border-gray-600 ml-4 rounded-full">
                    <img
                      src={ilan.emlakcifoto}
                      alt="Emlakçı"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Alt kısım - Telefon */}
                <div className="text-center bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                  <p className="text-zinc-800 dark:text-white font-bold text-lg">{ilan.emlakcicep}</p>
                </div>
                <div className="mt-4 flex justify-center">
                <a
                  href={ilan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: '#FFE800' }}
                >
                  <img src="/sahibinden.png" alt="Sahibinden" className="h-6 w-6" />
                  <span className="text-sm font-semibold text-black">Sahibinden'de Görüntüle</span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Açıklama Bölümü */}
      <div className="bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t.description}</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{ilan.aciklama}</p>
          </div>
        </div>
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
    </>
  );
};

export default IlanDetay;