const postController = require('../controllers/postController');
module.exports = (app) => {
   app.post('/post', postController.post);
   app.put('/post/:id', postController.put);
   app.delete('/post/:id', postController.delete);
   app.get('/posts', postController.get);
   app.get('/post/:id', postController.getById);
}