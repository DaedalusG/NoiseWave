// const { Song, User } = require("./db/models");
// const { getS3Url } = require("./utils");

// const getS3Url = async (key) => {
//     return S3.getSignedUrl("getObject", {
//         Bucket: "noisewave",
//         Key: key,
//     });
// };

// async function getSong() {
//     const song = await User.findByPk(2);
//     const fromS3 = await getS3Url(song.profilePicUrl);
//     return fromS3;
// }

// getSong().then((res) => console.log(res));



//requires
const AWS = require("aws-sdk");
const { awsKeys } = require("./config");
const { Song, User } = require('./db/models')
const { getS3Url, createLocalPath } = require('./utils');

//setting AWS credentials and initializing aws-sdk object instance
// remember to import keys from config: const { awsKeys } = require('./config');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsKeys.IAM_ACCESS_ID;
AWS.config.secretAccessKey = awsKeys.IAM_SECRET;
AWS.config.update({ region: 'us-west-2' });
const S3 = new AWS.S3();


const params = {
    Bucket: 'noisewave',
    Prefix: 'songs',
};

function getKeys() {
    S3.listObjects(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            var bucketGoop = [];
            for (let song of data.Contents) {
                bucketGoop.push(song.Key);
            }
            console.log(bucketGoop)
            console.log(data.IsTruncated)
        }         // successful response
    })
}
getKeys()

// const params = {
    //     Bucket: 'noisewave', /* required */
    //     //ContinuationToken: 'STRING_VALUE',
    //     //Delimiter: 'STRING_VALUE',
    //     //EncodingType: url,
//     //FetchOwner: true || false,
//     //MaxKeys: 'NUMBER_VALUE',
//     Prefix: 'songs',
//     //RequestPayer: requester,
//     //StartAfter: 'STRING_VALUE'
// };
// let Goo = [];
// S3.listObjectsV2(params, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else {
//         for (key of data.Contents) {
//             Goo.push(key.Key)
//         }
//     }          // successful response
// });
// console.log(Goo)

// let allKeys = [];
// function listAllKeys(token, cb) {
//     const opts = { Bucket: 'noisewave', Prefix: 'songs' };
//     if (token) opts.ContinuationToken = token;

//     S3.listObjectsV2(opts, function (err, data) {
//         allKeys = allKeys.concat(data.Contents);

//         if (data.IsTruncated)
//             listAllKeys(data.NextContinuationToken, cb);
//         else
//             cb()
//     });
// }
// listAllKeys()
// console.log(allKeys);

// const cb = (allKeys) => {
//     return console.log(allKeys)
// }

// var allKeys = [];
// function listAllKeys(marker, cb) {
//     S3.listObjects({ Bucket: 'noisewave', Prefix: 'songs', Marker: marker }, function (err, data) {
//         allKeys.push(data.Contents);

//         if (data.IsTruncated)
//             listAllKeys(data.NextMarker, cb);
//         else
//             cb(allKeys);
//     });
// }
// listAllKeys('songs/', cb)



// async function allBucketKeys(s3, bucket) {
//     const params = {
//         Bucket: bucket,
//         Prefix: 'songs'
//     };

//     var keys = [];
//     for (; ;) {
//         var data = await s3.listObjects(params).promise();

//         data.Contents.forEach((elem) => {
//             keys = keys.concat(elem.Key);
//         });

//         if (!data.IsTruncated) {
//             break;
//         }
//         params.Marker = data.NextMarker;
//         //console.log(keys)
//     }

//     return keys;
// }
// var keys = allBucketKeys(S3, "my_bucket").then(console.log(keys))






// let bucketGoop = [];
// async function getKeys() {
//     const params = {
//         Bucket: 'noisewave',
//         Prefix: 'songs',
//     };
//     S3.listObjects(params, function (err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else {
//             let bucketGoop = [];
//             for (let song of data.Contents) {
//                 bucketGoop.push(song.Key);
//             }
//         }         // successful response
//     })
// }
// getKeys();
// console.log(bucketGoop);






// `{
//     title: "",
//     artist: "",
//     album: "",
//     genre: "",
//     songUrl: ,
//     userId: ,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     songLocalPath: "Carole-of-the-Bones",
// },`

// `    {
//     title: "Carole of the Bones",
//     artist: "Bone Thugs & Harmony",
//     album: "Bone Thugs Greatest Hits",
//     genre: "hip-hop",
//     songUrl: `songs / (2004) Bone Thugs - Greatest Hits / 01 - Bone Thugs - Carole of the Bones.mp3`,
//     userId: 29,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     songLocalPath: "Carole-of-the-Bones",
// },`















