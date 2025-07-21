// components/IlanListeGrid.tsx
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
}

const IlanListeGrid = ({ ilanlar }: { ilanlar: Ilan[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
    {ilanlar.map((ilan) => (
      <div key={ilan._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative">
          <img
            src={ilan.bfoto1 || '/no-image.jpg'}
            alt="İlan fotoğrafı"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {ilan.emlak_tipi}
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-xl font-bold text-gray-900 mb-2">{ilan.fiyat}</div>
          <div className="text-sm text-gray-600 mb-3 line-clamp-2">{ilan.adres}</div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{ilan.emlak_tipi}</span>
            <Link 
              to={`/ilan/${ilan._id}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Detay →
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default IlanListeGrid;