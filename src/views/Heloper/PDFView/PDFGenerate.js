import React, { Fragment } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// import logo from "../../../assets/images/logo/appLogoNHCC.png";
// import MOH from "../../../assets/images/logo/MOH.png";
import moment from "moment";
import Geeza_Pro_Regulars from "../../../assets/font/Geeza-Pro-Regular.ttf";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Table from "./Table";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Geeza Pro Regular",
  },
  header: {
    width: "100%",
    height: "auto",
    backgroundColor: "#1A355E",
  },
});
// Create Document Component
const MyPDF = ({ rowData, locale }) => {
  console.log(rowData);
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Header rowData={rowData} />
        <PersonalInfo rowData={rowData} />
        <Table rowData={rowData} />
      </Page>
    </Document>
  );
};
Font.register({
  family: "Geeza Pro Regular",
  src: Geeza_Pro_Regulars,
});
export default MyPDF;
