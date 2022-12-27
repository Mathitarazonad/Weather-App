import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const geoapifyKey = process.env.GEOAPIFY_API_KEY;
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Successful')
})

app.get('/city', (req, res) => {
  const city = req.query.city;
  axios.get(`https://api.geoapify.com/v1/geocode/search?text=${city}&lang=en&limit=10&type=city&apiKey=${geoapifyKey}`, {
    headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*' ,
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT' ,
          'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' 
    }
  })
  .then((resp) => res.json(resp.data));
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

app.get('/coords', (req, res) => {
  const [latitude, longitude] = [req.query.latitude, req.query.longitude];
  axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&type=city&apiKey=${geoapifyKey}`, {
    headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*' ,
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT' ,
          'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' 
    }
  }).then(resp => res.json(resp.data));
})

app.get('/hourly', (req, res) => {
  const [latitude, longitude, timezone, temperature] = [req.query.latitude, req.query.longitude, req.query.timezone, req.query.temperature];
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&timezone=${timezone}&current_weather=true&temperature_unit=${temperature}`).then(resp => res.json(resp.data));
})

app.get('/todaysDetails', (req, res) => {
  const [latitude, longitude, timezone, temperature] = [req.query.latitude, req.query.longitude, req.query.timezone, req.query.temperature];
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relativehumidity_2m,apparent_temperature,visibility,windspeed_10m,winddirection_10m&timezone=${timezone}&temperature_unit=${temperature}&current_weather=true&windspeed_unit=mph`).then(resp => res.json(resp.data));
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});
