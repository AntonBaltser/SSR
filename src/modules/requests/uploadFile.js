const s3Client = require("../../minio/connection")();

module.exports = (req) => {

    let avatar = new Buffer.from(req.body.blob, 'base64'); // decode

s3Client.putObject('vue-project-ssr','users/' +  req.body.name, avatar, function(err, etag) {
    return console.log(err, etag) // err should be null
})

}