const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const API_TOKEN = 'SEU_TOKEN_DA_API';

app.use(cors());

app.get('/climatempo/:cidade', async (req, res) => {
  try {
    const cidade = req.params.cidade;
    const response = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${cidade}/current?token=${API_TOKEN}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar o clima:', error);
    res.status(500).json({ error: 'Erro ao buscar o clima' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy iniciado na porta ${PORT}`);
});
