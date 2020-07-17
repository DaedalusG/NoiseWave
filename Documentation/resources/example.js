const express = require('express');
const app = express();
const PORT = 3200;
const AWS = require('aws-sdk');
// Our default route
app.get('/', (req, res) => {
    AWS.config.update({
        accessKeyId: "Your Key Goes Here",
        secretAccessKey: "Your Secret Key Goes Here"
    });
    let s3 = new AWS.S3();
    async function getImage() {
        const data = s3.getObject(
            {
                Bucket: 'companyimages',
                Key: 'your stored image'
            }

        ).promise();
        return data;
    }
    getImage()
        .then((img) => {
            let image = "<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
            let startHTML = "<html><body></body>";
            let endHTML = "</body></html>";
            let html = startHTML + image + endHTML;
            res.send(html)
        }).catch((e) => {
            res.send(e)
        })
    function encode(data) {
        let buf = Buffer.from(data);
        let base64 = buf.toString('base64');
        return base64
    }
})
app.listen(PORT, () => {
    console.log(`Web Server running on port ${PORT}`);
});
