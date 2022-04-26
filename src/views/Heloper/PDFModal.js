import React, { useState, useContext, useEffect } from "react";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
import PDFImg from "../../assets/images/icons/file-icons/pdf.svg";

import MyPDF from "./component/PDFGenerate";
import { Download, Eye, File } from "react-feather";
import { IntlContext } from "../../utility/context/Internationalization";
import { SC } from "./ServerCall";
import { show_ticket } from "./endPoints";
import { camelize } from "./StringCamelize";
const PDFModal = ({ id }) => {
  const [PDF, setPDF] = useState(false);
  const [loading, setLoading] = useState(false);

  const [ticketData, setTicketData] = useState({});
  const context = useContext(IntlContext);
  const handlePDF = () => {
    setPDF(!PDF);
  };

  //get single ticket data
  const getTicket = () => {
    setLoading(true);
    SC.getCallWithId(show_ticket, id).then((response) => {
      if (response.status === 200 && response.data) {
        let rowData = response.data?.data;
        rowData = {
          ...rowData,
          priority_id: camelize(rowData.priority_id),
          status_id:
            rowData.status_id === "Returned to requester"
              ? rowData.status_id
              : camelize(rowData.status_id),
        };
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
            <MyPDF rowData={ticketData} locale={context.locale} />
          </PDFViewer>
        </ModalBody>
      </Modal>
      <div className="cursorPointer">
        {loading ? (
          <Spinner className="me-25" size="md" />
        ) : (
          <Download
            onClick={() => {
              getTicket();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PDFModal;
