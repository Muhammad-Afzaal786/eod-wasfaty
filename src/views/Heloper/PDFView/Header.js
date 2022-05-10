import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import headerBg from "../../../assets/images/pages/Header.png";
import { DateFormat } from "../DateFormat";
import moment from "moment";
const Header = ({ rowData }) => {
  return (
    <View style={styles.container}>
      <Image source={headerBg} style={styles.imageBg} />
      <View style={styles.innerDiv}>
        <Text style={styles.dateTitle}>Submission Date</Text>
        <Text style={{ fontSize: 12, top: 8 }}>
          {moment(rowData.created_at).format("MMMM Do YYYY")}
        </Text>
        <Text style={{ fontSize: 12, top: 8, paddingBottom: 10 }}>
          {moment(rowData.created_at).format("h:mm a")}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "15%",
  },
  imageBg: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  innerDiv: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  dateTitle: {
    color: "#009394",
    fontWeight: "600",
    fontSize: 16,
  },
});
export default Header;
