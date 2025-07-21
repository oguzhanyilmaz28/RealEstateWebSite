import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  console.log("Form ref:", formRef.current);


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) {
    console.error("Form elementi bulunamadı.");
    return;
  }

  emailjs.sendForm(
    "service_o20e7ep",
    "template_ubd860m",
    formRef.current,
    "eUqXfS1aGwJ5MlwWx"
  ).then(() => {}
  );
};

  const content = {
    title: language === "tr" ? "İletişim" : "Contact",
    subtitle: language === "tr"
      ? "Aradığınız gayrimenkulü bulmanız için buradayız!"
      : "We are here to help you find your dream property!",
    description: language === "tr"
      ? "Size en uygun lüks mülk seçenekleri için bizimle hemen iletişime geçin."
      : "Contact us now for the best luxury property options.",
    location: {
      phone1: "+90 531 277 16 33",
      phone2: "+90 212 283 00 33",
      email: "info@karadenizinsaat.com",
      address: "Ekşioğlu Mah. Mevlana Cad. 70. Sokak No:23 Bodrum Kar, Çekmeköy / İstanbul"
    },
    form: {
      name: language === "tr" ? "Adınız Soyadınız" : "Full Name",
      email: language === "tr" ? "Mail Adresiniz" : "Email",
      phone: language === "tr" ? "Telefon Numaranız" : "Phone",
      subject: language === "tr" ? "Konu" : "Subject",
      message: language === "tr" ? "Bize ne söylemek istiyorsunuz?" : "What would you like to tell us?",
      button: language === "tr" ? "Mesajımı Gönder" : "Send Message",
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{content.title}</h1>
          <h2 className="text-xl lg:text-2xl font-semibold">{content.subtitle}</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">{content.description}</p>
        </div>

        {/* İçerik Bölgesi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Adres Kartı */}
          <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-xl shadow space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{language === "tr" ? "Adres Bilgilerimiz" : "Our Address"}</h3>
            <div className="flex items-center gap-3 text-lg">
              <HiPhone className="text-red-500 text-2xl" />
              <span>{content.location.phone1}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <HiPhone className="text-red-500 text-2xl" />
              <span>{content.location.phone2}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <HiMail className="text-red-500 text-2xl" />
              <span>{content.location.email}</span>
            </div>
            <div className="flex items-start gap-3 text-lg">
              <HiLocationMarker className="text-red-500 text-2xl mt-1" />
              <span>{content.location.address}</span>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-xl shadow space-y-5"
          >
            <h3 className="text-xl font-bold mb-4">{language === "tr" ? "Bize Ulaşın" : "Reach Us"}</h3>
            <input
              type="text"
              name="name"
              placeholder={content.form.name}
              className="w-full p-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder={content.form.email}
                className="p-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={content.form.phone}
                className="p-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={content.form.subject}
              className="w-full p-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder={content.form.message}
              className="w-full p-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              {content.form.button}
            </button>
          </form>
        </div>

        {/* Harita */}
        <div className="mt-16 w-full">
          <iframe
            title="Ofis Haritası"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6019.546515096434!2d29.226655611633653!3d41.030216355556384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfc930aa36d5%3A0xc13ca85df493e6a6!2sROTA%20NEW%20L%C4%B0FE%20GAYR%C4%B0MENKUL!5e0!3m2!1str!2str!4v1751973942482!5m2!1str!2str"
            width="100%"
            height="400"
            className="rounded-xl border-0 shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Footer */}
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
    </div>
  );
};

export default Contact;
