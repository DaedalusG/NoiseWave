// //configuring the DiscStorage engine.
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

// //The uploadFile function
// function uploadFile(source, targetName, res) {
//   console.log('preparing to upload...');
//   fs.readFile(source, function (err, filedata) {
//     if (!err) {
//       const putParams = {
//         Bucket: 'noisewave',
//         Key: targetName,
//         Body: filedata
//       };
//       S3.putObject(putParams, (err, data) => {
//         console.log('we are live!!!');
//         //fs.unlink(source);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
//         console.log('Successfully uploaded the file');
//         res.send({ success: "true" });
//         // if (err) {
//         //   console.log('Could nor upload the file. Error :', err);
//         //   return res.send({ success: false });
//         // }
//         // else {
//         //   fs.unlink(source);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
//         //   console.log('Successfully uploaded the file');
//         //   return res.send({ success: true });
//         // }
//       });
//     }
//     else {
//       console.log({ 'err': err });
//     }
//   });
// }

// //test path for uploading a file from localStorage to S3 noisewave bucket
// app.post('/post_file', upload.single('demo_file'), function (req, res) {
//   //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
//   //req.file is the demo_file
//   console.log(req.file.path);
//   uploadFile(req.file.path, req.file.filename, res);
// })