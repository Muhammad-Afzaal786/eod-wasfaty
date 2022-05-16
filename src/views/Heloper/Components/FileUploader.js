import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Fragment } from "react";
import Dropzone from "react-dropzone";
import { ArrowDown, ArrowUp, File, XCircle } from "react-feather";
import { FormattedMessage } from "react-intl";

import file from "../../../assets/images/icons/file.svg";
import document from "../../../assets/images/icons/Light.svg";

import { uploadFileS3 } from "../Minio";
import FileProgressBar from "./FileProgressBar";
import { Row } from "reactstrap";
import { fiveRandomNumbers } from "../RandomId";
import { FormattedMessage } from "react-intl";
// import { uploadFileS3 } from "../../../../src/Minio";

// import FilePreview from "./FilePreview";

function FileUploader(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [detail, setDetail] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState([
    { progress: 0, id: 0 },
  ]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.call !== "createTickets" && props.Data?.attachment?.length > 0) {
      setAttachment(props.Data?.attachment?.map((file) => file));
    }

    if (props.postComment) {
      setAttachment([]);
      props.setPostComment(false);
    }
  }, [props, props.postComment]);

  const callBackS3 = (data) => {
    if (attachment?.length <= 9) {
      setAttachment([...attachment, data.Location]);
      if (props.call === "violation") {
        props.handleChange(props.index, props.name, [
          ...attachment,
          data.Location,
        ]);
      } else {
        props.handleChange(props.name, [...attachment, data.Location]);
      }
    } else toast.success("You submit max-10 files!");
    setLoading(false);
  };

  //delete files
  const handleDelete = (id) => {
    const filteredFiles = attachment?.filter((file, index) => index !== id);
    const filterImage = images?.filter((file, index) => index !== id);
    setImages(filterImage);
    // const filteredName = detail?.filter((file, index) => index !== id);
    setAttachment(filteredFiles);
    if (props.call === "violation") {
      props.handleChange(props.index, props.name, filteredFiles);
    } else {
      props.handleChange(props.name, filteredFiles);
    }
  };
  const thumbs = images?.map((file, index) => {
    let progress = uploadProgress?.filter((item) => item?.id === file?.id);
    if (progress.length > 0) {
      progress = progress[0].progress;
    } else {
      progress = 0;
    }
    let uploadedImage = props.value?.filter((item) => item?.id === file?.id);
    if (uploadedImage?.length > 0) {
      uploadedImage = uploadedImage[0];
    } else {
      uploadedImage = {};
    }
    return (
      <div className="w-100 d-flex flex-row " key={index}>
        <div className="fileView">
          <a href={file} target="_blank">
            <div className="fileImageBg">
              <img src={document} />
            </div>
          </a>
          <div className="custom_slide">
            <FileProgressBar value={progress} filename={file.name} />
          </div>
          <div>
            <XCircle
              onClick={() => handleDelete(index)}
              className="curser-pointer"
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <Dropzone
        onDrop={(acceptedFiles) => {
          const randomID = fiveRandomNumbers();

          if (acceptedFiles.length > 0) {
            acceptedFiles[0].id = randomID;
            setImages([...images, acceptedFiles[0]]);
            uploadFileS3(acceptedFiles[0], callBackS3, (e) => {
              setUploadProgress([
                ...uploadProgress,
                { progress: e, id: randomID },
              ]);
            });
            // } else {
            //   toast.error("Sorry, You can upload  five images");
            // }
          }
          // convertToBase64(acceptedFiles);
          // uploadFileS3(acceptedFiles[0], callBackS3, (e) => {
          //   setProgress(e);
          // });
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className="Attachment">
              <input {...getInputProps()} />

              <div className="d-flex justify-content-center">
                <div className="roundImage">
                  <img src={file} size={20} />
                </div>
              </div>

              <p className="text-center">
                <FormattedMessage
                  id={
                    "Drop your file here to upload or click here to select from storage"
                  }
                  defaultMessage="Drop your file here to upload or click here to select from storage"
                />
              </p>
            </div>

            <aside>{thumbs}</aside>
          </section>
        )}
      </Dropzone>
    </Fragment>
  );
}

export default FileUploader;
