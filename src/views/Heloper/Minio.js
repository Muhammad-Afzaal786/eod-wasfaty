var AWS = require("aws-sdk");
export const uploadFileS3 = (file, callBackS3, progressCB) => {
  let files = file?.name?.split(" ").join("");
  let ext = files?.split(".").pop();
  let name = files?.split(".")[0];
  let fileName = name + new Date() + "." + ext;
  if (file) {
    const {
      REACT_APP_AWS_ACCESS_KEY_ID,
      REACT_APP_AWS_BUCKET,
      REACT_APP_AWS_DEFAULT_REGION,
      REACT_APP_AWS_SECRET_ACCESS_KEY,
      REACT_APP_AWS_URL,
    } = process.env;
    var s3 = new AWS.S3({
      accessKeyId: REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: REACT_APP_AWS_SECRET_ACCESS_KEY,
      endpoint: REACT_APP_AWS_URL,
      s3ForcePathStyle: true,
      signatureVersion: "v4",
      ContentDisposition: "attachment;filename=" + fileName,
    });

    var params = {
      Bucket: REACT_APP_AWS_BUCKET,
      Key: fileName,
      Body: file,
      ACL: "public-read",
    };
    console.log(REACT_APP_AWS_BUCKET, params);
    return s3
      .upload(params, function (err, data) {
        if (data) callBackS3(data);
      })
      .on("httpUploadProgress", function (progress) {
        let progressPercentage = Math.round(
          (progress.loaded / progress.total) * 100
        );
        progressCB(progressPercentage);
      });
  }
};
