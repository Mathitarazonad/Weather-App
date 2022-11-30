import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const geoapifyKey = process.env.GEOAPIFY_API_KEY;

app.use(cors());

app.get('/coords', (req, res) => {
  const [city, country] = [req.query.city, req.query.country];
  axios.get(`https://api.geoapify.com/v1/geocode/search?text=${city}&lang=en&limit=10&type=city&filter=countrycode:${country}&apiKey=${geoapifyKey}`,
      {
        headers: {
          'X-Api-Key': process.env.API_NINJA_KEY,
        },
      }
    ).then((resp) => res.json(resp.data));
});

app.get('/today', (req, res) => {
  const [latitude, longitude, temperature, timezone] = [
    req.query.latitude,
    req.query.longitude,
    req.query.temperature,
    req.query.timezone
  ];
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&temperature_unit=${temperature}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timezone}`)
  .then((resp) => res.json(resp.data));
});

app.listen(8000, () => {
  console.log('Servidor escuchando en puerto 8000');
});
