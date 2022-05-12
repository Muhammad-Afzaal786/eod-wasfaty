import React from "react";
import AscendIcon from "../../assets/images/icons/AscendIcon.svg";
import AscendBlack from "../../assets/images/icons/AscendLogo.svg";

const PowerBy = ({ icons, textClass }) => {
  return (
    <a
      href="https://ascend.com.sa/"
      className={textClass ? textClass : "text-white"}
      target={"_blank"}
    >
      <div className="d-flex flex-row mx-auto">
        <img src={textClass ? AscendIcon : AscendBlack} alt="image" />
        <span className="ms-50 mt-50">POWERED BY ASCEND</span>
      </div>
    </a>
  );
};
export default PowerBy;
