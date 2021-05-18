const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const { PORT, mongoUri } = require('../config')
const todoRoutes = require('./routes/todoRoutes');

// MÅNDAG: Försök att fixa mha av vue annars gå



//initialized Fastify App
const fastify = require('fastify')({
	logger: true
})

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
	origin: '*',
	credentials: true
})



try {
    mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))
} catch (e) {
  console.error(e);
}

todoRoutes(fastify);


//set application listening on port 5000 of localhost
fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});