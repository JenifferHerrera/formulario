const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/meanformularios');
  console.log('BD Conectado');
}