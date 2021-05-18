const notesController = require('../controllers/todoController');
const Note = require('../models/schema');

module.exports = (app) => {
  //# create a note
  app.post('/api/notes', notesController.create);

  //#get the list of notes
  app.get('/api/notes/', notesController.fetch);

  //#get a single note
  app.get('/api/notes/:id', notesController.get);

  //#update a note
  app.put('/api/notes/:id', notesController.update);

  //#delete a note
  app.delete('/api/notes/:id', notesController.delete);
  
  app.delete('/remove', notesController.remove);


  
  //app.put('/update/:id', notesController.updateTest);

  
      

}