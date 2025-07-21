import { HiUsers, HiTrendingUp, HiShieldCheck, HiHeart, HiBadgeCheck, HiLightBulb, HiStar, HiOfficeBuilding, HiPhone } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { HiHome,  HiMail, HiLocationMarker, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const About = () => {
  const { language } = useLanguage();

  const getContent = () => {
    if (language === "tr") {
      return {
        hero: {
          title: "Hakkımızda",
          subtitle: "15 Yıllık Tecrübe ile Güvenilir İnşaat",
          description: "Karadeniz İnşaat olarak 2009 yılından beri kaliteli inşaat hizmetleri sunuyor, müşterilerimizin hayallerini gerçekleştiriyoruz."
        },
        story: {
          title: "Hikayemiz",
          content: [
            "2009 yılında kurulan Karadeniz İnşaat, İstanbul'da küçük bir ekiple başladığı yolculuğunda bugün sektörün öncü firmalarından biri haline gelmiştir.",
            "15 yıllık tecrübemizle, kentsel dönüşüm projelerinden villa yapımına, kat karşılığı inşaatlardan konut binalarına kadar geniş bir yelpazede hizmet vermekteyiz.",
            "Her projede kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutarak, binlerce ailenin ev sahibi olma hayalini gerçekleştirdik."
          ]
        },
        values: {
          title: "Değerlerimiz",
          items: [
            {
              icon: HiShieldCheck,
              title: "Güvenilirlik",
              description: "Her projede sözümüzü tutar, kaliteli ve zamanında teslimat yaparız."
            },
            {
              icon: HiHeart,
              title: "Müşteri Odaklılık",
              description: "Müşteri memnuniyeti bizim için en önemli önceliktir."
            },
            {
              icon: HiLightBulb,
              title: "Yenilikçilik",
              description: "Modern teknolojileri ve yenilikçi yaklaşımları projelerimizde kullanırız."
            },
            {
              icon: HiBadgeCheck,
              title: "Kalite",
              description: "En yüksek kalite standartlarında inşaat hizmetleri sunarız."
            }
          ]
        },
        team: {
          title: "Ekibimiz",
          description: "Uzman mimar, mühendis ve inşaat ustalarından oluşan deneyimli ekibimizle her projeye titizlikle yaklaşıyoruz.",
          members: [
            {
              name: "Ali Yılmaz",
              role: "Genel Müdür",
              experience: "20 yıl tecrübe",
              image: "/team/aliyilmaz.jpg"
            },
            {
              name: "Mustafa Gültepe",
              role: "Gayrimenkul Danışmanı",
              experience: "15 yıl tecrübe",
              image: "/team/mustafa.jpg"
            },
            {
              name: "Mehmet Alperen Yılmaz",
              role: "Gayrimenkul Danışmanı",
              experience: "12 yıl tecrübe",
              image: "/team/alperen.jpg"
            },
            {
              name: "Bayram Aydın",
              role: "Gayrimenkul Danışmanı",
              experience: "8 yıl tecrübe",
              image: "/team/bayram.jpg"
            },
            {
              name: "İbrahim Urun",
              role: "Gayrimenkul Danışmanı",
              experience: "14 yıl tecrübe",
              image: "/team/ibrahim.jpg"
            },
            {
              name: "Nihan Akgül",
              role: "Gayrimenkul Danışmanı",
              experience: "9 yıl tecrübe",
              image: "/team/nihan.jpg"
            }
          ]
        },
        achievements: {
          title: "Başarılarımız",
          items: [
            { number: "15+", label: "Yıllık Tecrübe" },
            { number: "50+", label: "Tamamlanan Proje" },
            { number: "1000+", label: "Mutlu Müşteri" },
            { number: "500+", label: "Teslim Edilen Daire" }
          ]
        },
        mission: {
          title: "Misyonumuz",
          content: "Kaliteli, güvenilir ve çevre dostu inşaat çözümleri sunarak, müşterilerimizin yaşam kalitesini artırmak ve onların hayallerini gerçekleştirmek.",
          vision: {
            title: "Vizyonumuz",
            content: "Türkiye'nin en güvenilir inşaat firmalarından biri olarak, sektörde öncü konumumuzu koruyarak, sürdürülebilir ve yenilikçi projelerle geleceği inşa etmek."
          }
        }
      };
    } else {
      return {
        hero: {
          title: "About Us",
          subtitle: "15 Years of Experience in Reliable Construction",
          description: "As Karadeniz Construction, we have been providing quality construction services since 2009, making our customers' dreams come true."
        },
        story: {
          title: "Our Story",
          content: [
            "Founded in 2009, Karadeniz Construction has become one of the leading companies in the sector in its journey that started with a small team in Istanbul.",
            "With our 15 years of experience, we serve in a wide range from urban transformation projects to villa construction, from construction projects in exchange for flats to residential buildings.",
            "By prioritizing quality, reliability and customer satisfaction in every project, we have made the dream of homeownership come true for thousands of families."
          ]
        },
        values: {
          title: "Our Values",
          items: [
            {
              icon: HiShieldCheck,
              title: "Reliability",
              description: "We keep our word in every project and deliver quality on time."
            },
            {
              icon: HiHeart,
              title: "Customer Focus",
              description: "Customer satisfaction is our most important priority."
            },
            {
              icon: HiLightBulb,
              title: "Innovation",
              description: "We use modern technologies and innovative approaches in our projects."
            },
            {
              icon: HiBadgeCheck,
              title: "Quality",
              description: "We provide construction services at the highest quality standards."
            }
          ]
        },
        team: {
          title: "Our Team",
          description: "We approach each project meticulously with our team of 50+ people consisting of expert architects, engineers and construction masters.",
          members: [
            {
              name: "Ali Yılmaz",
              role: "General Manager",
              experience: "20 years experience",
              image: "/team/aliyilmaz.jpg"
            },
            {
              name: "Mustafa Gültepe",
              role: "Real Estate Consultant",
              experience: "15 years experience",
              image: "/team/mustafa.jpg"
            },
            {
              name: "Mehmet Alperen Yılmaz",
              role: "Real Estate Consultant",
              experience: "18 years experience",
              image: "/team/alperen.jpg"
            },
            {
              name: "Bayram Aydın",
              role: "Real Estate Consultant",
              experience: "12 years experience",
              image: "/team/bayram.jpg"
            },
            {
              name: "İbrahim Urun",
              role: "Real Estate Consultant",
              experience: "14 years experience",
              image: "/team/ibrahim.jpg"
            },
            {
              name: "Nihan Akgül",
              role: "Real Estate Consultant",
              experience: "9 years experience",
              image: "/team/nihan.jpg"
            },
          ]
        },
        achievements: {
          title: "Our Achievements",
          items: [
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Completed Projects" },
            { number: "1000+", label: "Happy Customers" },
            { number: "500+", label: "Delivered Apartments" }
          ]
        },
        mission: {
          title: "Our Mission",
          content: "To improve the quality of life of our customers and realize their dreams by providing quality, reliable and environmentally friendly construction solutions.",
          vision: {
            title: "Our Vision",
            content: "As one of Turkey's most reliable construction companies, to build the future with sustainable and innovative projects while maintaining our leading position in the sector."
          }
        }
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-r from-red-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            {content.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-white/90 drop-shadow-xl">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {content.hero.description}
          </p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-zinc-800 dark:text-white">
                {content.story.title}
              </h2>
              <div className="space-y-6">
                {content.story.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about/company-story.jpg" 
                alt="Company Story"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&auto=format";
                }}
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-zinc-800 dark:text-white">
            {content.values.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.items.map((value, index) => (
              <div key={index} className="group bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
            {content.achievements.title}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {content.achievements.items.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl lg:text-7xl font-bold mb-4 animate-pulse">
                  {achievement.number}
                </div>
                <div className="text-lg lg:text-xl font-medium opacity-90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - FIXED CARD SIZES */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white">
              {content.team.title}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              {content.team.description}
            </p>
          </div>
          
          {/* Updated grid with responsive sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {content.team.members.map((member, index) => (
              <div key={index} className="group bg-zinc-50 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm mx-auto w-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${1507003211169 + index}?w=400&h=400&fit=crop&auto=format`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-zinc-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-red-600 dark:text-red-400 font-medium mb-2 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <HiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
                {content.mission.title}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {content.mission.content}
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <HiStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
                {content.mission.vision.title}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {content.mission.vision.content}
              </p>
            </div>
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

export default About;