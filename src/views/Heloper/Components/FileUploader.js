import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../@core/scss/base/plugins/extensions/ext-component-toastr.scss";
import { Fragment } from "react";
import Dropzone from "react-dropzone";
import { SC } from "../ServerCall";
import Spinner from "reactstrap/lib/Spinner";
import { ArrowDown, ArrowUp, File } from "react-feather";
import { TiDelete } from "react-icons/ti";
import Badge from "reactstrap/lib/Badge";

import { Tooltip, UncontrolledTooltip } from "reactstrap";
import { split } from "lodash";
import { FormattedMessage } from "react-intl";
// import dragndrop from "../../../assets/images/icons/dragndrop.svg";
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
      props.handleChange("attachment", [...attachment, data.Location]);
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
  const thumbs = attachment?.map((src, index) => {
    let ext = src?.split(".").pop();
    let filename = src?.substring(src.lastIndexOf("/") + 1);

    if (
      ext === "csv" ||
      ext === "pdf" ||
      ext === "sheet" ||
      ext === "xlsx" ||
      ext === "xls" ||
      ext === "xlt" ||
      ext === "xla" ||
      ext === "xltx" ||
      ext === "xlsm" ||
      ext === "xltm" ||
      ext === "xlam" ||
      ext === "xlsb" ||
      ext === "ms-excel" ||
      ext === "document" ||
      ext === "docx" ||
      ext === "doc" ||
      ext === "dot" ||
      ext === "dotx" ||
      ext === "docm" ||
      ext === "dotm" ||
      ext === "ppt" ||
      ext === "pptx" ||
      ext === "pot" ||
      ext === "pps" ||
      ext === "ppa" ||
      ext === "potx" ||
      ext === "ppsx" ||
      ext === "ppam" ||
      ext === "pptm" ||
      ext === "potm" ||
      ext === "ppsm" ||
      ext === "mdb" ||
      ext === "presentation"
    ) {
      return (
        <div
          className="flex-column d-flex mt-1 ml-1 mr-1  text-nowrap"
          style={{ height: 80, width: 70 }}
          key={index}
        >
          <div className="d-flex justify-content-center">
            <TiDelete
              size={20}
              className="text-danger cursorPointer"
              onClick={() => handleDelete(index)}
            />
          </div>
          <a
            href={src}
            target={ext === "pdf" ? "_blanks" : "_self"}
            key={index}
          >
            <img
              src={
                ext === "pdf"
                  ? PDF
                  : ext === "document" ||
                    ext === "docx" ||
                    ext === "doc" ||
                    ext === "dot" ||
                    ext === "dotx" ||
                    ext === "docm" ||
                    ext === "csv" ||
                    ext === "dotm"
                  ? CSV
                  : ext === "ppt" ||
                    ext === "pptx" ||
                    ext === "presentation" ||
                    ext === "ppt" ||
                    ext === "pptx" ||
                    ext === "pot" ||
                    ext === "pps" ||
                    ext === "ppa" ||
                    ext === "potx" ||
                    ext === "ppsx" ||
                    ext === "ppam" ||
                    ext === "pptm" ||
                    ext === "potm" ||
                    ext === "ppsm" ||
                    ext === "mdb"
                  ? ppt
                  : Excel
              }
              style={{ height: 42, width: 46 }}
            />
          </a>

          <small className="text-truncate">{filename}</small>
        </div>
      );
    } else if (
      ext === "png" ||
      ext === "jpg" ||
      ext === "jpeg" ||
      ext === "svg" ||
      ext === "WebP"
    ) {
      return (
        <div
          key={index}
          className="flex-column d-flex mt-1 ml-1 mr-1  text-nowrap"
          style={{ height: 80, width: 70 }}
        >
          <div className="d-flex justify-content-center">
            <TiDelete
              size={20}
              className="text-danger cursorPointer"
              onClick={() => handleDelete(index)}
            />
          </div>
          <a href={src} target="_blank">
            <img src={Image} style={{ height: 42, width: 46 }} />
          </a>

          <small className="text-truncate">{filename}</small>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className="flex-column d-flex mt-1 ml-1 mr-1  text-nowrap"
          style={{ height: 80, width: 70 }}
        >
          <div className="d-flex justify-content-center">
            <TiDelete
              size={20}
              className="text-danger cursorPointer"
              onClick={() => handleDelete(index)}
            />
          </div>
          <a href={src} target="_blank">
            <img src={file} style={{ height: 42, width: 46 }} />
          </a>
          <small className="text-truncate">{src}</small>
        </div>
      );
    }
  });

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

              <p className="text-center text-secondary">
                <img src={dragndrop} size={20} />
              </p>

              <p className="text-center">
                <FormattedMessage
                  id={"Drop files here or browse"}
                  defaultMessage="Drop files here or browse"
                />
              </p>
            </div>

            {/* <aside className="d-flex ex1 flex-row ">{thumbs}</aside> */}
          </section>
        )}
      </Dropzone>
      {loading && (
        <div className="mt-1">
          <Spinner color="primary" size="sm" />
          <span className="ml-50">Uploading...</span>
        </div>
      )}
    </Fragment>
  );
}

export default FileUploader;
