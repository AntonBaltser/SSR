

// const AWS = require("aws-sdk");

// module.exports  = new AWS.S3({
//     accessKeyId: process.env.S3_KEY,
//     secretAccessKey: process.env.S3_SECRET

    // accessKeyId: 'antony' ,
    // secretAccessKey: 'bp024Wbp024W' ,
    // endpoint: 'http://192.168.1.72:9000' ,
    // s3ForcePathStyle: true, // needed with minio?
    // signatureVersion: 'v4'
// });
const Minio = require('minio')

module.exports = () => new Minio.Client({
    endPoint:  's3.amazonaws.com',
    accessKey: 'AKIAQVKU5JSQ2GD6WACX',
    secretKey: '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'
})

