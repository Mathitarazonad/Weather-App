import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express()

app.get('/coords', (req, res) => {
  axios.get('https://api.api-ninjas.com/v1/geocoding?city=new york', {
    headers : {
      'X-Api-Key' : process.env.API_NINJA_KEY
    }
  }).then(resp => res.json(resp.data))
})

app.get('/country', (req, res) => {
  const [latitute, longitude] = [req.query.lat, req.query.lon];
  axios.get(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitute}&lon=${longitude}`, 
  {
    headers : {
      'X-Api-Key' : process.env.API_NINJA_KEY
    }
  }
  ).then(resp => res.json(resp.data))
})

app.listen(8000, () => {
  console.log('Servidor escuchando en puerto 8000');
})