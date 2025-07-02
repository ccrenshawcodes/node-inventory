const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/new', (req, res) => {
  res.render('should handle new tee or new category');
})

//  will need a post method

indexRouter.get('/', (req, res) => {
  res.render('this should be the home page');
})

module.exports = indexRouter;