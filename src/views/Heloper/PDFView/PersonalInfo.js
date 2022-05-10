import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const PersonalInfo = ({ rowData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.personalInfoTitle}>
          <Text>Personal Information</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <Text>Inspector Name:</Text>

        <View style={{ width: "90%", marginLeft: 20 }}>
          <Text style={styles.border}>
            {rowData?.user?.name ? rowData?.user?.name : " "}
          </Text>
        </View>
      </View>
      <View style={styles.row3}>
        <Text>Inspector Address: </Text>
        <View style={{ width: "90%", marginLeft: 20 }}>
          <Text style={styles.border}>
            {rowData?.site
              ? rowData?.site?.region?.name +
                "-" +
                rowData?.site?.city?.name +
                "-" +
                rowData?.site?.streetNameAr
              : " "}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "15%",
    backgroundColor: "#EBF5F0",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  row1: {
    width: "98%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  personalInfoTitle: {
    backgroundColor: "#009394",
    color: "#fff",
    borderRadius: 5,
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    margin: 20,
    color: "#009394",
    fontSize: 16,
    fontWeight: "bold",
  },
  row3: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,

    color: "#009394",
    fontSize: 16,
    fontWeight: "bold",
  },
  border: {
    color: "#000",
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomStyle: "dashed",
    borderBottomColor: "#009394",
  },
});
export default PersonalInfo;
