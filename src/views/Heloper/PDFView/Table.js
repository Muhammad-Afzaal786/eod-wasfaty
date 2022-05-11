import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from "react";

const Table = ({ rowData }) => {
  let isCount1 = 22;
  let isCount2 = 23;
  let isCount3 = 24;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "12%",
            alignItems: "center",
          }}
        >
          <Text>Sr.No.</Text>
        </View>

        <View style={{ width: "58%", alignItems: "center" }}>
          <Text>Questions</Text>
        </View>
        <View
          style={{
            width: "30%",
            alignItems: "center",
          }}
        >
          <Text>Answers</Text>
        </View>
      </View>
      <View style={styles.data}>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>1</Text>
          </View>

          <View style={styles.center}>
            <Text>Tourism License number</Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData?.site?.licenseNumber}</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>2</Text>
          </View>

          <View style={styles.center}>
            <Text>
              Is the inspector have a relationship the owner of the facility ?
            </Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.inspector_relationship ? "Yes" : "No"}</Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>3</Text>
          </View>

          <View style={styles.center}>
            <Text>Is the facility working ?</Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.facility_working ? "Yes" : "No"}</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>4</Text>
          </View>

          <View style={styles.center}>
            <Text>
              A picture of the building showing the sign, the commercial name
              and the main entrance.
            </Text>
          </View>
          <View style={styles.right}>
            {rowData?.buildingImage?.length > 0 ? (
              <Image source={rowData.buildingImage[0]} />
            ) : (
              <Text>-----</Text>
            )}
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>5</Text>
          </View>

          <View style={styles.center}>
            <Text>Commercial Registration Image</Text>
          </View>
          <View style={styles.right}>
            {rowData.commercial_registration_Image?.length > 0 ? (
              <Image source={rowData.commercial_registration_Image[0]} />
            ) : (
              <Text>....</Text>
            )}
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>6</Text>
          </View>

          <View style={styles.center}>
            <Text>Location Coordinates</Text>
          </View>
          <View style={styles.right}>
            <View>
              <Text>Longitude:{rowData?.site?.longitude}</Text>
              <Text>Latitude:{rowData?.site?.latitude}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>7</Text>
          </View>

          <View style={styles.center}>
            <Text>
              Have you been notified of registration in the calendar tourism
              licensing platform within the specified period of 4 days?
            </Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.calender_registration ? "Yes" : "No"}</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>8</Text>
          </View>

          <View style={styles.center}>
            <Text>
              Was the facility provided with the registration link and update
              method?
            </Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.registration_link ? "Yes" : "No"}</Text>
          </View>
        </View>

        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>9</Text>
          </View>

          <View style={styles.center}>
            <Text>Is the tourist license valid?</Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.tourist_license ? "Yes" : "No"}</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>10</Text>
          </View>

          <View style={styles.center}>
            <Text>Reasons for not renewing the license</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.not_renewing_license
                ? rowData.not_renewing_license
                : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>11</Text>
          </View>

          <View style={styles.center}>
            <Text>Operator name</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.operator_name ? rowData.operator_name : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>12</Text>
          </View>

          <View style={styles.center}>
            <Text>Operator ID</Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.operator_id ? rowData.operator_id : "-----"}</Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>13</Text>
          </View>

          <View style={styles.center}>
            <Text>The trade name according to license</Text>
          </View>
          <View style={styles.right}>
            <Text>{rowData.trade_name ? rowData.trade_nam : "-----"}</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>14</Text>
          </View>

          <View style={styles.center}>
            <Text>Commercial Registration No.</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.comercial_registration
                ? rowData.comercial_registration
                : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>15</Text>
          </View>

          <View style={styles.center}>
            <Text>Mobile number</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.mobile_number ? rowData.mobile_number : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>16</Text>
          </View>

          <View style={styles.center}>
            <Text>Facility number</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.facility_number ? rowData.facility_number : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>17</Text>
          </View>

          <View style={styles.center}>
            <Text>Facility email</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.facility_email ? rowData.facility_email : "-----"}
            </Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>18</Text>
          </View>

          <View style={styles.center}>
            <Text>Facility Room Number</Text>
          </View>
          <View style={styles.right}>
            <Text>
              {rowData.facility_room_number
                ? rowData.facility_room_number
                : "-----"}
            </Text>
          </View>
        </View>

        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>19</Text>
          </View>

          <View style={styles.center}>
            <Text>License picture</Text>
          </View>
          <View style={styles.right}>
            {rowData.licenseImage?.length > 0 ? (
              <Image source={rowData.licenseImage[0]} />
            ) : (
              <Text>-----</Text>
            )}
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.left}>
            <Text>20</Text>
          </View>

          <View style={styles.center}>
            <Text>Municipal license picture</Text>
          </View>
          <View style={styles.right}>
            {rowData.municipalImage?.length > 0 ? (
              <Image source={rowData.municipalImage[0]} />
            ) : (
              <Text>-----</Text>
            )}
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.left}>
            <Text>21</Text>
          </View>

          <View style={styles.center}>
            <Text>The civil defense license picture</Text>
          </View>
          <View style={styles.right}>
            {rowData.civilImage?.length > 0 ? (
              <Image source={rowData.civilImage[0]} />
            ) : (
              <Text>-----</Text>
            )}
          </View>
        </View>
        {rowData.violation_data?.length > 0 &&
          rowData.violation_data?.map((item, index) => (
            <View key={index}>
              <View style={styles.Row2}>
                <View style={styles.left}>
                  <Text>
                    {index === 0
                      ? isCount1 + parseInt(index)
                      : 26 + parseInt(index)}
                  </Text>
                </View>

                <View style={styles.center}>
                  <Text>Is there a violation</Text>
                </View>
                <View style={styles.right}>
                  <Text>{item.violation_items?.value ? "Yes" : "No"}</Text>
                </View>
              </View>
              <View style={styles.Row1}>
                <View style={styles.left}>
                  <Text>
                    {index === 0
                      ? isCount2 + parseInt(index)
                      : 27 + parseInt(index)}
                  </Text>
                </View>

                <View style={styles.center}>
                  <Text>Violation items</Text>
                </View>
                <View style={styles.right}>
                  <Text>
                    {item.violation_items?.violation_item
                      ? item.violation_items.violation_item
                      : "-----"}
                  </Text>
                </View>
              </View>
              <View style={styles.Row2}>
                <View style={styles.left}>
                  <Text>
                    {index === 0
                      ? isCount3 + parseInt(index)
                      : 28 + parseInt(index)}
                  </Text>
                </View>

                <View style={styles.center}>
                  <Text>Violation picture</Text>
                </View>
                <View style={styles.right}>
                  {item?.violation_items?.violation_Picture?.length > 0 ? (
                    <Image
                      source={item?.violation_items?.violation_Picture[0]}
                    />
                  ) : (
                    <Text>-----</Text>
                  )}
                </View>
              </View>
              {index === 0 && (
                <>
                  <View style={styles.Row1}>
                    <View style={styles.left}>
                      <Text>25</Text>
                    </View>

                    <View style={styles.center}>
                      <Text>Violation Report</Text>
                    </View>
                    <View style={styles.right}>
                      {item?.violation_items?.violation_record_picture?.length >
                      0 ? (
                        <Image
                          source={
                            item?.violation_items?.violation_record_picture[0]
                          }
                        />
                      ) : (
                        <Text>-----</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.Row2}>
                    <View style={styles.left}>
                      <Text>26</Text>
                    </View>

                    <View style={styles.center}>
                      <Text>Violation Number</Text>
                    </View>
                    <View style={styles.right}>
                      <Text>
                        {item.violation_items?.violation_number
                          ? item.violation_items?.violation_number
                          : "-----"}
                      </Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          ))}
      </View>
      <View style={styles.Row1}>
        <View style={styles.left}>
          <Text>{rowData.violation_data?.length > 0 ? "" : "22"}</Text>
        </View>

        <View style={styles.center}>
          <Text>Remarks</Text>
        </View>
        <View style={styles.right}>
          <Text>{rowData.remarks}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#009394",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#009394",
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    width: "100%",
    fontSize: 14,
    padding: 10,
  },
  Row1: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    color: "#000",
    fontSize: 14,
  },
  Row2: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    color: "#000",
    fontSize: 14,
    backgroundColor: "#EBF5F0",
  },
  left: {
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#009394",
    height: "100%",
  },
  center: {
    width: "58%",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#009394",
    // marginLeft: 15,
    backgroundColor: "red",
    paddingRight: 5,
    paddingLeft: 5,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
  },
});
export default Table;
