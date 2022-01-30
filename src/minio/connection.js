const AWS = require("aws-sdk");

module.exports  = new AWS.S3({
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET
    // accessKeyId: 'antony' ,
    // secretAccessKey: 'bp024Wbp024W' ,
    // endpoint: 'http://192.168.1.72:9000' ,
    // s3ForcePathStyle: true, // needed with minio?
    // signatureVersion: 'v4'
});