import React, { Fragment, useRef } from "react";
import { Card, CardBody } from "reactstrap";
import { regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";

const RegionList = () => {
  const pagination = useRef();

  const paginationCall = (data) => {
    return {};
  };
  return (
    <Fragment>
      <Card>
        <CardBody className="rounded">
          <Pagination
            refs={pagination}
            columns={regionCol}
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

export default RegionList;
