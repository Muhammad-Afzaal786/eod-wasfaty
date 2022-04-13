import React, { Component } from "react";
import moment from "moment";
import { Download } from "react-feather";
import { Button, Spinner } from "reactstrap";
// import Export from "../../../assets/images/pages/Download.png";

import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";

import { connect } from "react-redux";

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

  getData = () => {};

  render() {
    const { apiData, loading } = this.state;
    const { apiCall, fileName, headers, data } = this.props;
    return (
      <>
        {!loading ? (
          <Button color="primary" onClick={this.getData}>
            {/* <img src={Export} width="15px" /> */}
            <span className="ml-50">Export</span>
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
const mapState = (state) => {
  return { id: state.layout.orgId };
};
export default connect(mapState, null)(ExportExcel);
