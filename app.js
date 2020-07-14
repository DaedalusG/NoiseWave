const { environment } = require('./config')
const indexRoutes = require('./routes/index');
const songRoutes = require('./routes/songs');
const userRoutes = require('./routes/users');

const express = require("express");
const morgan = require("morgan");
const multer = require('multer');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const { awsKeys } = require('./config');

const app = express();
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use('/', indexRoutes);
app.use('/songs', songRoutes);
app.use('/users', userRoutes)

//setting AWS credentials and initializing aws-sdk object instance
AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsKeys.IAM_ACCESS_ID;
AWS.config.secretAccessKey = awsKeys.IAM_SECRET;
const S3 = new AWS.S3();

//configuring the DiscStorage engine.
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

//The uploadFile function
function uploadFile(source, targetName, res) {
  console.log('preparing to upload...');
  fs.readFile(source, function (err, filedata) {
    if (!err) {
      const putParams = {
        Bucket: 'noisewave',
        Key: targetName,
        Body: filedata
      };
      S3.putObject(putParams, (err, data) => {
        console.log('we are live!!!');
        //fs.unlink(source);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
        console.log('Successfully uploaded the file');
        res.send({ success: "true" });
        // if (err) {
        //   console.log('Could nor upload the file. Error :', err);
        //   return res.send({ success: false });
        // }
        // else {
        //   fs.unlink(source);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
        //   console.log('Successfully uploaded the file');
        //   return res.send({ success: true });
        // }
      });
    }
    else {
      console.log({ 'err': err });
    }
  });
}

//test path for uploading a file from localStorage to S3 noisewave bucket
app.post('/post_file', upload.single('demo_file'), function (req, res) {
  //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
  //req.file is the demo_file
  console.log(req.file.path);
  uploadFile(req.file.path, req.file.filename, res);
})


// middleware to catch errors caused by unhandled requests
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// user-frienndly error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.render('error', {
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
