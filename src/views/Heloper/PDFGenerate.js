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

import logo from "../../../assets/images/logo/appLogoNHCC.png";
import MOH from "../../../assets/images/logo/MOH.png";
import moment from "moment";
import { DateFromat } from "./DateFormat";
import Geeza_Pro_Regulars from "../../../assets/font/Geeza-Pro-Regular.ttf";
import { HtmlStringConvert } from "../HtmlConvertTo";
import Solved from "../../../assets/images/pages/allsloved.png";
import Closed from "../../../assets/images/pages/allclosed.png";
import Reopened from "../../../assets/images/pages/allre.png";
import Opened from "../../../assets/images/pages/allopened.png";
import ReturnTo from "../../../assets/images/pages/Return To requesto.png";
import High from "../../../assets/images/pages/allhigh.png";
import Low from "../../../assets/images/pages/alllow.png";
import Critical from "../../../assets/images/pages/allcritical.png";
import Medium from "../../../assets/images/pages/allmedium.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Geeza Pro Regular",
    paddingBottom: 5,
  },
  header: {
    width: "100%",
    height: "auto",
    backgroundColor: "#1A355E",
  },
  headerRow1: {
    width: "100%",
    display: "flex",
    top: 20,
    color: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  Row1Text: {
    marginLeft: 20,
  },
  headerRow2: {
    width: "100%",
    // height: "20vh",
    display: "flex",
    top: 20,
    backgroundColor: "#314870",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  innerRow2: {
    width: "100%",
    borderLeft: 1,
    borderColor: "gray",
    color: "#fff",
    padding: 20,
    fontSize: 12,
    fontWeight: 600,
  },
  Row2Text: {
    color: "#adb5bd",
    paddingTop: 7,
    fontSize: 11,
  },
  headerRow3: {
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#27AE60",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    top: 20,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  Row3Text: {
    fontWeight: "600",
    // fontStyle:"normal",
    fontSize: 12,
    width: 70,
    textTransform: "uppercase",
  },
  Row3RTR: {
    fontWeight: "600",
    // fontStyle:"normal",
    fontSize: 12,
    // width: 70,
    // textTransform: "uppercase",
  },
  headerRow4: {
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "rgba(149, 157, 178, 0.1)",
    fontSize: 12,
    top: 20,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  Row4Text: {
    textTransform: "capitalize",
  },
  Section1: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
  },
  InnerSection1: {
    marginTop: 20,
  },
  subject: {
    padding: 20,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
  },
  Comments: {
    width: "100%",
    height: "auto",
    // backgroundColor: "rgba(149, 157, 178, 0.1)",
    fontSize: 12,

    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerComments: {
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 12,
    top: 20,
    padding: 20,
  },
  priorityImage: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    // backgroundColor: "red",
    width: 70,
  },
  Img: {
    height: 30,
    marginRight: 20,
    marginBottom: 15,
  },
  ticketId: {
    flexDirection: "column",
  },
  Footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 10,
    padding: 10,
    paddingBottom: 0,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  Heigh: {
    color: "#C11C15",
    textTransform: "capitalize",
  },
  Critical: {
    color: "#f58c77",
    textTransform: "capitalize",
  },
  Medium: {
    color: "#47b0e3",
    textTransform: "capitalize",
  },
  Low: {
    color: "#51b679",
    textTransform: "capitalize",
  },
  Opened: {
    color: "#f29f5a",
    textTransform: "capitalize",
  },
  ReOpened: {
    color: "#788bf1",
    textTransform: "capitalize",
  },
  Solved: {
    color: "#53b771",
    textTransform: "capitalize",
  },
  ReturnTo: {
    color: "#f3974c",
    textTransform: "capitalize",
  },
  Closed: {
    color: "#ec6363",
    textTransform: "capitalize",
  },
  Content: {
    backgroundColor: "#F2994A",
    width: 30,
    height: 30,
    borderRadius: 70 / 2,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
  Avatar: {
    border: 1,
    borderColor: "#d0d3e8",
    width: 30,
    height: 30,
    borderRadius: 70 / 2,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
  priority_idImg: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
});
// Create Document Component
const MyPDF = ({ rowData, locale }) => {
  const region = rowData.dynamicFieldsValue?.find(
    (item) => item._id === "5f2ff7557a17f166076f2aa2"
  );
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <View style={styles.headerRow1}>
            <Text style={styles.Row1Text}>
              {locale === "en" && "Ticket # "} {rowData.ticketId}
              {locale === "sa" && "تذكرة#"}
            </Text>
            <Image style={styles.Img} source={logo} />
          </View>
          <View style={styles.headerRow2}>
            <View style={styles.innerRow2}>
              <Text>{locale === "en" ? "Requester" : "مقدم الطلب"}</Text>
              <Text style={styles.Row2Text}>{rowData.user?.name}</Text>
            </View>
            <View style={styles.innerRow2}>
              <Text>{locale === "en" ? "Team" : "فريق"}</Text>
              <Text style={styles.Row2Text}>
                {rowData?.teams_relation?.length === 1
                  ? rowData?.teams_relation[0].name
                  : rowData?.teams_relation?.length === 2
                  ? rowData?.teams_relation[1].name
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.innerRow2}>
              <Text>{locale === "en" ? "Region" : "منطقة"}</Text>
              <Text style={styles.Row2Text}>
                {region ? region.value : "N/A"}
              </Text>
            </View>
            <View style={styles.innerRow2}>
              <Text>{locale === "en" ? "Due Date" : "تاريخ الاستحقاق"}</Text>
              <Text style={styles.Row2Text}>
                {moment(rowData.duedate).format("MMMM Do YYYY")}
              </Text>
              <Text style={{ color: "#adb5bd" }}>
                {moment(rowData.duedate).format("h:mm: a")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.headerRow3}>
          {locale === "en" && <Text>STATUS</Text>}
          <Text
            style={
              rowData.status_id === "Returned to requester"
                ? styles.Row3RTR
                : styles.Row3Text
            }
          >
            {rowData.status_id}
          </Text>
          {locale === "sa" && <Text>الحالة</Text>}
        </View>
        <View style={styles.headerRow4}>
          {locale === "en" && <Text>PRIORITY</Text>}

          <View style={styles.priorityImage}>
            {rowData.priority_id && (
              <Image
                src={
                  rowData.priority_id === "low"
                    ? Low
                    : rowData.priority_id === "high"
                    ? High
                    : rowData.priority_id === "critical"
                    ? Critical
                    : rowData.priority_id === "medium" && Medium
                }
                style={styles.priority_idImg}
              />
            )}
            <Text
              style={
                rowData.priority_id === "low"
                  ? styles.Low
                  : rowData.priority_id === "high"
                  ? styles.Heigh
                  : rowData.priority_id === "critical"
                  ? styles.Critical
                  : rowData.priority_id === "medium" && styles.Medium
              }
            >
              {rowData.priority_id}
            </Text>
          </View>
          {locale === "sa" && <Text>أفضلية</Text>}
        </View>
        <View style={styles.subject}>
          <View style={styles.InnerSection1}>
            <Text>{locale === "en" ? "SUBJECT" : "موضوع"}</Text>
          </View>
          <View style={styles.InnerSection1}>
            <Text style={{ fontSize: 12, color: "#1A355E" }}>
              {rowData.subject}
            </Text>
          </View>
        </View>
        <View style={styles.Section1}>
          <View style={styles.InnerSection1}>
            <Text>{locale === "en" ? "DESCRIPTION" : "وصف"}</Text>
          </View>
          <View style={styles.InnerSection1}>
            <Text style={{ fontSize: 12, color: "#1A355E" }}>
              {rowData.content && HtmlStringConvert(rowData.content)}
            </Text>
          </View>
        </View>

        <View style={styles.Comments}>
          <Text>{locale === "en" ? "COMMENTS" : "تعليقات"}</Text>
        </View>
        {rowData.comments?.map((item, index) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d0d3e8",
              paddingBottom: 5,
            }}
            key={index}
          >
            <View style={styles.innerComments}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/* <Image source={"logo"} /> */}
                <View
                  style={
                    item.user?.image?.length > 0
                      ? styles.Avatar
                      : styles.Content
                  }
                >
                  {item.user?.image && item.user?.image?.length > 0 ? (
                    <Image
                      source={item.user.image[0]}
                      style={{ height: 30, width: 30, borderRadius: 30 / 2 }}
                    />
                  ) : (
                    <Text>
                      {item?.user?.name?.substring(0, 1) +
                        item?.user?.name?.split(" ").pop().charAt(0)}
                    </Text>
                  )}
                </View>
                <Text style={{ marginLeft: 5 }}>{item.user?.name}</Text>
                <Text style={{ fontSize: 7, marginLeft: 5, top: 3 }}>
                  ({DateFromat(item.created_at)})
                </Text>
              </View>

              {item.type && (
                <View style={styles.priorityImage}>
                  <Image
                    source={
                      item.type === "opened"
                        ? Opened
                        : item.type === "reopened"
                        ? Reopened
                        : item.type === "closed"
                        ? Closed
                        : item.type === "solved"
                        ? Solved
                        : item.type === "Returned to requester" && ReturnTo
                    }
                    style={{ height: 15, width: 15 }}
                  />
                  <Text
                    style={
                      item.type === "opened"
                        ? styles.Opened
                        : item.type === "reopened"
                        ? styles.ReOpened
                        : item.type === "closed"
                        ? styles.Closed
                        : item.type === "solved"
                        ? styles.Solved
                        : item.type === "Returned to requester" &&
                          styles.ReturnTo
                    }
                  >
                    {item.type}
                  </Text>
                </View>
              )}
            </View>
            <View
              style={{
                marginLeft: 55,
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 12, color: "#1A355E", width: 500 }}>
                {item.content && HtmlStringConvert(item.content)}
              </Text>
            </View>
          </View>
        ))}

        <View style={{ flex: 1 }}>
          <View style={styles.Footer}>
            <Text>
              {locale === "en"
                ? "This is an official document by Ministry of Health"
                : "هذه وثيقة رسمية من قبل وزارة الصحة"}
            </Text>
            <Image style={{ height: 20, bottom: 5 }} source={MOH} />

            <Text>
              {locale === "en"
                ? "generated at " + DateFromat(rowData.created_at)
                : DateFromat(rowData.created_at) + " ولدت في"}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
Font.register({
  family: "Geeza Pro Regular",
  src: Geeza_Pro_Regulars,
});
export default MyPDF;
