// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ilanlarRoute from './routes/ilanlar.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ILAN API rotası
app.use('/api/ilanlar', ilanlarRoute);

// MongoDB bağlantısı ve sunucu başlatma
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB bağlantısı başarılı');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Sunucu http://localhost:${process.env.PORT} üzerinden çalışıyor`)
    );
  })
  .catch(err => console.error('❌ MongoDB bağlantı hatası:', err));
