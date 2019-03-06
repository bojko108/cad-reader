let path = require('path');
let express = require('express');
let fielUpload = require('express-fileupload');
let app = express();
let port = '7777';

let CadReader = require('../dist/index.umd.js');

app.use(fielUpload());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/upload', (req, res) => {
  //if (!req.files)
  //  return res.status(400).send('No files were uploaded.');

  let cadReader = new CadReader();
  cadReader
    .readFile(path.join(__dirname, '..', 'data/58517.cad'))
    .then(result => {
      console.log(result.substring(0, 100));
    })
    .catch(ex => {
      console.log(ex);
    });

  res.send('File send');
});

app.listen(port, () => console.log(`CadReader up and running on port ${port}`));
