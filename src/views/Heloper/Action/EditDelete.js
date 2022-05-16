import React, { Fragment, useState, useContext } from "react";
import { Edit, Edit2, Trash2 } from "react-feather";
import { Navigate, useNavigate } from "react-router-dom";
// import { hanleDeleteOP } from "../../../redux/actions/layout";
import { connect, useDispatch } from "react-redux";
import { locale } from "moment";
import { handleConfirmCancel } from "./SweetAlert";
import { UncontrolledTooltip } from "reactstrap";
import { SC } from "../Apicall/ServerCall";
import { handleDeleteOP } from "../../../redux/layout";
import { IntlContext } from "../../../utility/context/Internationalization";
const Action = (props) => {
  let { _id, endPoint, deleteOp, editOp, path, name } = props;
  const [state, setstate] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(IntlContext);
  let navigate = useNavigate();

  const deleteField = () => {
    SC.deleteCall(`${endPoint}/${_id}`).then((res) => {
      if (res.status === 200) {
        dispatch(handleDeleteOP(_id));
        setstate(res.data?.message);
      }
    });
  };

  return (
    <Fragment>
      {editOp && (
        <>
          <UncontrolledTooltip placement="bottom" target="edit">
            Edit
          </UncontrolledTooltip>
          <Edit
            size={20}
            id="edit"
            onClick={() => navigate(`${path}${_id}`)}
            className="cursor-pointer font-weight-bolder Black "
          />
        </>
      )}

      {deleteOp && (
        <>
          <UncontrolledTooltip placement="bottom" target="delete">
            Delete
          </UncontrolledTooltip>
          <Trash2
            className="ms-50 cursor-pointer font-weight-bolder Black"
            id="delete"
            onClick={() =>
              handleConfirmCancel(
                props.showMsg,
                deleteField,
                locale,
                context,
                {
                  showMsgArabic: props.message_ar,
                },
                name
              )
            }
            size={20}
          />
        </>
      )}
    </Fragment>
  );
};

export default Action;
