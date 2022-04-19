import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Fragment } from "react";
import Dropzone from "react-dropzone";
import { ArrowDown, ArrowUp, File } from "react-feather";

import file from "../../../assets/images/icons/file.svg";
import { uploadFileS3 } from "../Minio";
// import { uploadFileS3 } from "../../../../src/Minio";

// import FilePreview from "./FilePreview";

function FileUploader(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [detail, setDetail] = useState([]);

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
      console.log(data);
      setAttachment([...attachment, data.Location]);
      //   props.handleChange("attachment", [...attachment, data.Location]);
    } else toast.success("You submit max-10 files!");
    setLoading(false);
  };

  //delete files
  const handleDelete = (id) => {
    const filteredFiles = attachment?.filter((file, index) => index !== id);
    const filteredName = detail?.filter((file, index) => index !== id);
    setDetail(filteredName);
    setAttachment(filteredFiles);
    props.handleChange("attachment", filteredFiles);
  };

  return (
    <Fragment>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setLoading(true);
          // convertToBase64(acceptedFiles);
          uploadFileS3(acceptedFiles[0], callBackS3);
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
                Drop your file here to upload or click here to select from
                storage
              </p>
            </div>

            {/* <aside className="d-flex ex1 flex-row ">{thumbs}</aside> */}
          </section>
        )}
      </Dropzone>
    </Fragment>
  );
}

export default FileUploader;
