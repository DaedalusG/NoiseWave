//setting AWS credentials and initializing aws-sdk object instance
// remember to import keys from config: const { awsKeys } = require('./config');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsKeys.IAM_ACCESS_ID;
AWS.config.secretAccessKey = awsKeys.IAM_SECRET;
const S3 = new AWS.S3();

//setting up direct stream to s3 bucket using multer and multer-s3
const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: 'noisewave',
        // metadata: function (req, file, cb) {
        //   cb(null, { fieldName: file.fieldname });
        // },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

//example route handler to post file
app.post('/post_file', upload.single('to_s3'), function (req, res, next) {
    
    res.send({ success: true })
})
