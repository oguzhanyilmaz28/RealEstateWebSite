import { Link } from 'react-router-dom';

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

const IlanListeGrid = ({ ilanlar }: { ilanlar: Ilan[] }) => {
  const getKapakFoto = (ilan: Ilan): string => {
    const bfotoArray = [
      ilan.bfoto1, ilan.bfoto2, ilan.bfoto3, ilan.bfoto4, ilan.bfoto5,
      ilan.bfoto6, ilan.bfoto7, ilan.bfoto8, ilan.bfoto9, ilan.bfoto10
    ].filter(foto => foto && foto.trim() !== '');

    const fotoArray = [
      ilan.foto1, ilan.foto2, ilan.foto3, ilan.foto4, ilan.foto5,
      ilan.foto6, ilan.foto7, ilan.foto8, ilan.foto9, ilan.foto10
    ].filter(foto => foto && foto.trim() !== '');

    return bfotoArray[0] || fotoArray[0] || '/no-image.jpg';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/no-image.jpg';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      {ilanlar.map((ilan) => (
        <Link
          key={ilan._id}
          to={`/ilan/${ilan._id}`}
          className="block h-full"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer transform h-full flex flex-col">
            <div className="relative">
              <img
                src={getKapakFoto(ilan)}
                alt="İlan fotoğrafı"
                className="w-full h-48 object-cover hover:brightness-110 transition-all duration-300"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                {ilan.emlak_tipi}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {ilan.fiyat}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {ilan.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 flex-grow">
                {ilan.adres}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default IlanListeGrid;