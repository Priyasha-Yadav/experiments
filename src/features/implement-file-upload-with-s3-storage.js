// Minimal file upload with S3 storage implementation
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();
const s3 = new AWS.S3({ region: 'your-region' });
const upload = multer({ dest: './uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const params = {
    Bucket: 'your-bucket',
    Key: file.originalname,
    Body: file.buffer,
  };
  s3.upload(params, (err, data) => {
    if (err) res.status(500).send({ message: 'Upload failed' });
    else res.send({ message: 'File uploaded successfully' });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));