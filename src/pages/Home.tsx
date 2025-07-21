import { Link } from "react-router";
import { HiHome, HiOfficeBuilding, HiPhone, HiMail, HiLocationMarker, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Örnek proje fotoğrafları - Bu fotoğrafları kendi projelerinizle değiştirin
  const projectImages = [
    {
      id: 1,
      src: "/projects/project1.jpg",
      title: language === "tr" ? "Ekşioğlu Kentsel Dönüşüm Projesi" : "Ekşioğlu Urban Transformation Project",
      description: language === "tr" ? "İstanbul - 2024" : "İstanbul - 2024"
    },
    {
      id: 2,
      src: "/projects/project2.jpg", 
      title: language === "tr" ? "Lüks Apartman Kompleksi" : "Luxury Apartment Complex",
      description: language === "tr" ? "İstanbul - 2023" : "İstanbul - 2023"
    },
    {
      id: 3,
      src: "/projects/project3.jpg",
    title: language === "tr" ? "Karadeniz İş Merkezi" : "Karadeniz Business Center", 
      description: language === "tr" ? "İstanbul - 2014" : "İstanbul - 2015"
    },
    {
      id: 4,
      src: "/projects/project4.jpg",
      title: language === "tr" ? "Güngören Kentsel Dönüşüm Projesi" : "Güngören Urban Transformation Project",
      description: language === "tr" ? "İstanbul - 2014" : "İstanbul - 2015"
    },
    {
      id: 5,
      src: "/projects/project5.jpg",
      title: language === "tr" ? "Rezidans Projesi" : "Residence Project",
      description: language === "tr" ? "İstanbul - 2021" : "İstanbul - 2021"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getContent = () => {
    if (language === "tr") {
      return {
        hero: {
          title: "Karadeniz İnşaat",
          subtitle: "Hayalinizdeki Evi Gerçekleştiriyoruz",
          description: "15 yıllık tecrübemizle, kaliteli inşaat ve güvenilir emlak hizmetleri sunuyoruz. Ev sahibi olmak artık çok kolay!",
          cta: "Hemen İletişime Geçin"
        },
        services: {
          title: "Hizmetlerimiz",
          subtitle: "Her proje için benzersiz ve özelleştirilmiş fikirler yaratma tutkumuz vardır. Konut, Ofis, perakende ve endüstriyel inşaatlarında uzmanız. Küçük bir binadan kentsel ölçekli bir tasarıma kadar, işe aynı türden bir 'incelikle' yaklaşıyoruz.",
          items: [
            {
              icon: HiOfficeBuilding,
              title: "Kentsel Dönüşüm Uygulamaları",
              description: "Kendi evinizi, binanızı, sitenizi başka bölgeye kaydırılma korkusu yaşamadan kendi talebiniz ile kentsel dönüşüm kanunu kapsamında; yaşanabilir, depreme dayanıklı, kaliteli yaşam alanlarına dönüştürüyoruz.",
              image: "/services/kentsel-donusum.jpg"
            },
            {
              icon: HiHome,
              title: "Kat Karşılığı İnşaat Projeleri",
              description: "Arsasına inşaat yaptırmak isteyen kişi inşaatı müteahhitle anlaşarak ona yaptırır. Arsası veya eski evi yapılacak olan kişi değeri artmış yeni bir daireye kavuşacak, müteahhit projeden ev alarak karlı bir geri dönüş sağlayacaktır.",
              image: "/services/kat-karsiligi.jpg"
            },
            {
              icon: HiOfficeBuilding,
              title: "Konut Binaları Üretimi",
              description: "Konut binalarının anahtar teslim dizaynları ve inşaatlarını içermektedir. Sosyal tesisler, altyapı işleri, su depoları, çevre yolları, ısıtma sistemleri, açık ve kapalı otoparkları, her türlü elektrik, mekanik ve inşaat işleri ve iç dekorasyonlar.",
              image: "/services/konut-binalari.jpg"
            },
            {
              icon: HiHome,
              title: "Villa ve Müstakil Ev Yapımı",
              description: "Ürettiğimiz villalar tamamen kişiye özel tasarlanmaktadır. Arsa halinde aldığımız adresi anahtar teslimi, eksiksiz ve üst kalite de nitelikli villa olarak teslim ediyoruz. Tüm aşamalar uzman ekibimiz tarafından gerçekleşiyor.",
              image: "/services/villa-yapimi.jpg"
            }
          ]
        },
        stats: {
          title: "Güvenilir Rakamlar",
          items: [
            { number: "15+", label: "Yıllık Tecrübe" },
            { number: "50+", label: "Tamamlanan Proje" },
            { number: "1000+", label: "Mutlu Müşteri" },
            { number: "50+", label: "Uzman Ekip" }
          ]
        },
        contact: {
          title: "İletişim",
          phone: "+90 (555) 123 45 67",
          email: "info@karadenizinsaat.com",
          address: "İstanbul, Türkiye"
        }
      };
    } else {
      return {
        hero: {
          title: "Karadeniz Construction",
          subtitle: "Building Your Dream Home",
          description: "With 15 years of experience, we provide quality construction and reliable real estate services. Owning a home is now very easy!",
          cta: "Contact Us Now"
        },
        services: {
          title: "Our Services",
          subtitle: "We have a passion for creating unique and customized ideas for each project. We specialize in residential, office, retail and industrial construction. From a small building to an urban scale design, we approach the work with the same kind of 'finesse'.",
          items: [
            {
              icon: HiOfficeBuilding,
              title: "Urban Transformation Applications",
              description: "We transform your home, building, site into livable, earthquake-resistant, quality living spaces within the scope of urban transformation law with your own request without fear of being moved to another region.",
              image: "/services/kentsel-donusum.jpg"
            },
            {
              icon: HiHome,
              title: "Construction Projects in Exchange for Flats",
              description: "The person who wants to have construction on their land has it done by agreeing with the contractor. In this case, the person whose land or old house will be built will get a new apartment with increased value, and the contractor will get a profitable return by buying a house from the project.",
              image: "/services/kat-karsiligi.jpg"
            },
            {
              icon: HiOfficeBuilding,
              title: "Residential Building Production",
              description: "These projects include turnkey designs and construction of residential buildings. In addition, social facilities, infrastructure works, water tanks, ring roads, heating systems, open and closed parking lots, all kinds of electrical, mechanical and construction works and interior decorations.",
              image: "/services/konut-binalari.jpg"
            },
            {
              icon: HiHome,
              title: "Villa and Detached House Construction",
              description: "The villas we produce are completely custom designed. We deliver the address we bought as land as a turnkey, complete and high-quality villa. All stages are carried out by our expert team under the supervision of our engineers and architects.",
              image: "/services/villa-yapimi.jpg"
            }
          ]
        },
        stats: {
          title: "Trusted Numbers",
          items: [
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Completed Projects" },
            { number: "1000+", label: "Happy Customers" },
            { number: "50+", label: "Expert Team" }
          ]
        },
        contact: {
          title: "Contact",
          phone: "+90 (555) 123 45 67",
          email: "info@karadenizinsaat.com",
          address: "İstanbul, Turkey"
        }
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300">
      {/* Project Gallery Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        
        {/* Slider Container */}
        <div className="relative h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {projectImages.map((image) => (
            <div key={image.id} className="min-w-full h-full relative">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Eğer resim yüklenemezse placeholder göster
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560448204-e58b9b98c9f3?w=1920&h=1080&fit=crop&auto=format";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              {language === "tr" ? "Karadeniz İnşaat" : "Karadeniz Construction"}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 drop-shadow-xl max-w-2xl mx-auto">
              {language === "tr" 
                ? "15 yıllık tecrübemizle hayalinizdeki evi inşa ediyoruz" 
                : "Building your dream home with 15 years of experience"}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {projectImages[currentSlide].title}
              </h3>
              <p className="text-lg text-white/80">
                {projectImages[currentSlide].description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={language === "tr" ? "/satilik" : "/for-sale"} 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <HiHome className="w-5 h-5" />
                {language === "tr" ? "Projelerimizi İnceleyin" : "View Our Projects"}
              </Link>
              
              <Link 
                to={language === "tr" ? "/iletisim" : "/contact"} 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <HiPhone className="w-5 h-5" />
                {language === "tr" ? "İletişime Geçin" : "Get In Touch"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
            {content.services.title}
          </h2>
          
          <p className="text-lg text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            {content.services.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Eğer resim yüklenemezse placeholder göster
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-"+"$"+"{1560448204index}?w=600&h=400&fit=crop&auto=format`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Service Icon */}
                  <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
            {content.stats.title}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {content.stats.items.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl lg:text-6xl font-bold mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-lg lg:text-xl font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

export default Home;