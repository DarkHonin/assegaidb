var express = require('express');
var markdown = require('markdown').markdown
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AssegaiDB' });
});

router.get('/changelog', (req, res)=>{
  fs.readFile("public/changelog.md", 'utf8', (err, data) =>{
    res.send(markdown.toHTML(data))
  })
})

module.exports = router;
