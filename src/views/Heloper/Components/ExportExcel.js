import React, { useContext,Component } from "react";
import moment from "moment";
import { Download } from "react-feather";
import { Button, Spinner } from "reactstrap";
// import Export from "../../../assets/images/pages/Download.png";
import { FormattedMessage } from "react-intl";


import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";
import { connect } from "react-redux";
import { SC } from "../Apicall/ServerCall";
import { DateFormat } from "../DateFormat";

class ExportExcel extends Component {
  constructor(props) {
    super(props);
    this.clickRef = React.createRef();
  }

  state = {
    loading: false,
    rangePicker: this.props.rangePicker,
    per_page: this.props.per_page,
    apiData: [],
    totalPage: 10000,
  };

  getData = () => {
    this.setState({ loading: true });
    SC.getCall(`${this.props.endPoint}?per_page=${this.props.Total}`).then(
      (res) => {
        if (res.status === 200 && res.data) {
          let rowData = res.data.data.data?.map((item) => {
            if (this.props.endPoint === "user-index") {
              return {
                ...item,
                name: item.name,
                father_name: item.fatherName,
                family_name: item.familyName,
                email: item.email,
                type: item.type,
                created_at: DateFormat(item.created_at),
              };
            } else if (this.props.endPoint === "region-index") {
              return {
                ...item,
                name: item.name,
                name_ar: item.name_ar,
                created_at: DateFormat(item.created_at),
              };
            } else if (this.props.endPoint === "inspection-index") {
              return {
                ...item,
                name: item.user?.name,
                address: item.site
                  ? item.site?.region?.name +
                    "-" +
                    item.site?.city?.name +
                    "-" +
                    item.site?.streetNameAr
                  : "",
                license: item.site?.licenseNumber,
                created_at: DateFormat(item.created_at),
              };
            }
          });
          this.setState({
            apiData: rowData,
          });
          this.setState({ loading: false }, () => {
            this.clickRef.click();
          });
        }
      }
    );
  };

  render() {
    const { apiData, loading } = this.state;
    const { apiCall, fileName, headers, data } = this.props;
    return (
      <>
        {!loading ? (
          <Button color="primary" onClick={this.getData}>
            {/* <img src={Export} width="15px" /> */}
            <span className="ml-50"><FormattedMessage id={"Export"} defaultMessage="Export" /> </span>
          </Button>
        ) : (
          <Button.Ripple color="primary" className="DownloadBtn" outline>
            {/* <Spinner color="secondary" size="sm" /> */}
            <span className="ml-50">Exporting...</span>
          </Button.Ripple>
        )}

        <ExportSheet
          header={headers}
          fileName={fileName}
          dataSource={apiData}
          xlsx={XLSX}
          isRequiredNameDate={false}
        >
          <button hidden ref={(r) => (this.clickRef = r)}>
            click me
          </button>
        </ExportSheet>
      </>
    );
  }
}

export default ExportExcel;
