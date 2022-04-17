import React, { Fragment, useRef } from "react";
import { Card, CardBody } from "reactstrap";
import { inspection_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { fieldSurveyCol, regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";

const FieldSurveyList = () => {
  const pagination = useRef();

  const paginationCall = (data) => {
    return SC.getCall(
      inspection_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  return (
    <Fragment>
      <Card>
        <CardBody className="rounded">
          <Pagination
            refs={pagination}
            columns={fieldSurveyCol}
            getDataCall={paginationCall}
            filterView={false}
            showAllToggle={true}
            downloadData={true}
            downloadFileName={"userRequest"}
            minRows={5}
            history={history}
            // headers={userRequestHeader}
            // endPoint={get_requester}
            // selectMulti
            // activateUser
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default FieldSurveyList;
