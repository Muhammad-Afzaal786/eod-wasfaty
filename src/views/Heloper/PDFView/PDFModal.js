import React, { useState, useContext, useEffect } from "react";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
import MyPDF from "./PDFGenerate";
import { Download, Eye, File } from "react-feather";
import { inspection_show } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
// import { camelize } from "./StringCamelize";
const PDFModal = ({ id }) => {
  const [PDF, setPDF] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState({});
  // const context = useContext(I);
  const handlePDF = () => {
    setPDF(!PDF);
  };
  //get single  data
  const getData = () => {
    setLoading(true);
    SC.getCall(inspection_show + "/" + id).then((response) => {
      if (response.status === 200 && response.data) {
        let rowData = response.data?.data[0];
        setTicketData(rowData);
        setPDF(true);
        setLoading(false);
      }
    });
  };
  return (
    <div>
      <Modal isOpen={PDF} toggle={() => handlePDF()} className={"modal-lg"}>
        <ModalBody className="p-0">
          <PDFViewer className="w-100" style={{ height: "90vh" }}>
            <MyPDF rowData={ticketData} />
          </PDFViewer>
        </ModalBody>
      </Modal>
      <div className="cursor-pointer">
        {loading ? (
          <Spinner className="me-25" size="md" />
        ) : (
          <Download
            onClick={() => {
              getData();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PDFModal;
