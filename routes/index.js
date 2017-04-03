router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  ServiceProvider.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    review:req.body.review,
    rate:req.body.rate
  };

  var data = new reviewsandratings(item);
  data.save();

  res.redirect('/');
});
