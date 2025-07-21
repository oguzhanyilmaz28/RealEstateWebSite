import express from 'express';
import Ilan from '../models/Ilan.js';
import mongoose from 'mongoose';

const router = express.Router();

mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB bağlantısı kuruldu:', mongoose.connection.name);
});

// TÜM ilanları ya da filtreli listeyi döndürür
router.get('/', async (req, res) => {
  try {
    const filtre = req.query.tip ? { emlak_tipi: new RegExp(req.query.tip, "i") } : {};

    const sonuc = await Ilan.find(filtre); // BURAYI DEĞİŞTİR: `ilanlar` yerine `sonuc`
    res.json(sonuc);
  } catch (error) {
    console.error('İlan listeleme hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// TEK ilan detayını döndürür
router.get('/:id', async (req, res) => {
  try {
    const ilan = await Ilan.findById(req.params.id);
    if (!ilan) return res.status(404).json({ message: 'İlan bulunamadı' });
    res.json(ilan);
  } catch (error) {
    console.error('İlan detay hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

export default router;
