import React, { Component, Fragment } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../../@core/scss/base/plugins/tables/rtable.scss";

import {
  Button,
  CardHeader,
  InputGroup,
  UncontrolledButtonDropdown,
  InputGroupText,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  Card,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Spinner,
} from "reactstrap";

import {
  Link2,
  MoreHorizontal,
  Search,
  BookOpen,
  Check,
  X,
  CheckCircle,
  MoreVertical,
} from "react-feather";
import ListLoading from "../ListLoading";
import ExportExcel from "./ExportExcel";
import { connect, useSelector } from "react-redux";
import { errorHandle } from "../Action/ErrorHandle";

// import "../../../@core/scss/base/plugins/tables/rtable.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: "",
      filtered: "",
      pageSize: this.props.pageSize || 20,
      checked: new Array(this.props.pageSize || 10).fill(false),
      selectAll: false,
      total: 0,
      page: 0,
      data: [],
      pages: 0,
      showAll: false,
      modal: false,
      status_id: null,
      priority_id: null,
      child_team: null,
      parent_teams: null,
      filterStates: {},
      checkData: [],
      filterActive: false,
      Notfound: false,
      loading: true,
    };
  }

  dataCall = (
    page = this.state.page,

    pageSize = this.state.pageSize
  ) => {
    this.setState({
      loading: true,
    });
    var data = {
      pageSize: this.state.showAll ? this.state.total : pageSize,

      page: this.state.showAll ? 0 : page,
    };

    this.props.getDataCall(data).then(
      (response) => {
        this.setState({
          data: response.data?.data.data,
          pages: response.data?.data.last_page,
          page: response.data?.data.current_page,
          total: response.data?.data.total,
          loading: false,
        });
        this.setState({ loading: false });
      },
      (error) => {
        errorHandle(error, this.props.navigate);
      }
    );
  };

  paginationStateData = () => {
    return { ...this.state };
  };
  filterSearchHandle = (e) => {
    this.setState({
      filtered: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {}

  handleChange = () => {
    this.setState(
      {
        checked: new Array(this.state.data?.length).fill(!this.state.selectAll),
        selectAll: !this.state.selectAll,
      },
      () => {
        if (this.state.checked[0]) {
          this.setState({ filterActive: true });

          this.state.data.map((d) => {
            this.state.checkData?.push(d._id);
          });
        } else {
          this.setState({ checkData: [] });
          this.setState({ filterActive: false });
        }
      }
    );
  };
  handleSingleCheckboxChange = (index) => {
    var checkedCopy = this.state.checked;
    checkedCopy[index] = !this.state.checked[index];
    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }
    this.setState(
      {
        checked: checkedCopy,
      },
      () => {
        const arr = this.state.checkData.filter((item) => {
          return item === this.state.data[index]._id;
        });

        const indexOfOldData = this.state.checkData.indexOf(
          this.state.data[index]._id
        );
        if (indexOfOldData > -1) {
          this.state.checkData?.splice(indexOfOldData, 1);
        } else {
          this.state.checkData?.push(this.state.data[index]._id);
        }
        if (this.state.checkData?.length > 0) {
          this.setState({ filterActive: true });
        } else {
          this.setState({ filterActive: false });
        }
      }
    );
  };
  handlClick = (status, id) => {
    const data = {
      ticket_ids: id,
      status_id: status,
    };
    FilterAction(data);
  };

  render() {
    const { showAll, data, pages, filtered, pageSize, page, checkData } =
      this.state;
    const {
      showAllToggle,
      columns,
      loadingOrder,
      filterView,
      upperContent,
      lowerContent,
      filterPlaceHolder,
      downloadData,
      minRows,
      downloadFileName,
      style,
      showTotal,
      filter,
      endPoint,
      title,
      selectMulti,
      navigate,
      headers,
    } = this.props;

    const multicolumns = [
      {
        Header: (state) => (
          <div className="listing-custom-checkboxes">
            <input
              type="checkbox"
              id="checkbox-1-1"
              className="regular-checkbox"
              onChange={() => this.handleChange(state.sortedData)}
              checked={this.state.selectAll}
            />
            <label htmlFor="checkbox-1-1"></label>
          </div>
        ),
        Cell: (row) => (
          <div className="listing-custom-checkboxes1">
            <input
              type="checkbox"
              id={`checkbox-sub-1-${row.index}`}
              className="regular-checkbox1"
              name={`checkbox-sub-1-${row.index}`}
              checked={this.state.checked[row.index]}
              onChange={() => this.handleSingleCheckboxChange(row.index)}
            />

            <label htmlFor={`checkbox-sub-1-${row.index}`}></label>
          </div>
        ),
        sortable: false,
        filterable: false,
        width: 70,
      },
    ];
    console.log(this.props.deleteOpt);
    return (
      <React.Fragment>
        <div className="mb-1 d-flex justify-content-between">
          <h3 className="stepFromTitle">{title}</h3>
          <div>
            {downloadData && (
              <React.Fragment>
                <ExportExcel
                  className="downloadbtn"
                  fileName={downloadFileName}
                  headers={headers}
                  currentRecordsRef={this.reactTable}
                  columnsData={columns}
                  // filterStates={this.state.filterStates}
                  endPoint={endPoint}
                  Total={this.state.total}
                />
              </React.Fragment>
            )}
          </div>
        </div>
        <Card>
          {/* <CardHeader className="pagination-wnd">
            <CardTitle className="d-flex justify-content-end w-100">
              
            </CardTitle>
          </CardHeader> */}

          <CardBody>
            <ListLoading loading={this.state.loading} />
            <ReactTable
              minRows={minRows ? minRows : 5}
              showPagination={showAll ? false : true}
              ref={(r) => (this.reactTable = r)}
              trProps={this.props.getRowProps}
              noDataText={
                this.props.noDataText || this.state.Notfound ? (
                  " Data Not Found!"
                ) : (
                  <Spinner color="primary" />
                )
              }
              data={data}
              pages={pages}
              rowsText={"Rows"}
              pageText={"Page"}
              columns={selectMulti ? [...multicolumns, ...columns] : columns}
              filtered={filtered}
              pageSizeOptions={this.props.pageSizeOptions}
              defaultPageSize={pageSize}
              ofText={"of"}
              previousText={"Previous"}
              nextText={"Next"}
              pageSize={pageSize}
              loading={loadingOrder}
              defaultSorted={this.props.defaultSorted || []}
              onPageSizeChange={(pageSize) => {
                this.setState({
                  pageSize: pageSize,
                });
              }}
              style={style}
              className={`listing text-align-start ${
                this.state.loading ? "d-none" : "d-block"
              }`}
              loadingText={"Loading..."}
              pageData={this.dataCall}
              manual
              onFetchData={(state, instance) => {
                var sort =
                  state.sorted.length === 0
                    ? ""
                    : state.sorted[0].id + ",desc:" + state.sorted[0].desc;
                state.pageData(
                  state.page + 1,
                  state.filtered,
                  sort,
                  state.pageSize
                );
              }}
              getTrProps={(state, rowInfo, columns, instance) => {
                let data = {};
                if (instance.props.trProps) {
                  if (rowInfo !== undefined) {
                    const rowData = rowInfo.original;

                    data = instance.props.trProps(rowData);
                  }
                }
                return {
                  style: data,
                };
              }}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
const mapState = (state) => {
  return {
    deleteOpt: state.layout.deleteOp,
  };
};
export default connect(mapState, null)(Pagination);

// export default Pagination;
