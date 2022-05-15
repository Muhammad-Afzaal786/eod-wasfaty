import React, { useContext,Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { site_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { SiteCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { IntlContext } from "../../utility/context/Internationalization";


const SiteList = () => {
  const pagination = useRef();
  const deleteOpt = useSelector((state) => state.layout.deleteAction);
  let context = useContext(IntlContext);

  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      site_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  return (
    <Fragment>
      <Pagination
        refs={pagination}
        columns={SiteCol}
        getDataCall={paginationCall}
        filterView={false}
        navigate={navigate}
        showAllToggle={true}
        downloadData={false}
        deleteActive={deleteOpt}
        downloadFileName={"siteList"}
        minRows={5}
        history={history}
        // headers={userRequestHeader}
        endPoint={site_index}
        // selectMulti
        // activateUser
        title={context.locale === "sa" ? "قائمة المواقع" : "Site List" }
      />
    </Fragment>
  );
};

export default SiteList;
