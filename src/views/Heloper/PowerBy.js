import React from "react";
import AscendIcon from "../../assets/images/icons/AscendIcon.svg";
const PowerBy = ({ icons, textClass }) => {
  return (
    <a
      href="https://ascend.com.sa/"
      className={textClass ? textClass : "text-white"}
      target={"_blank"}
    >
      <div className=" d-flex flex-row mx-auto mt-1">
        <img src={AscendIcon} alt="image" />
        <span className="ml-1">POWERED BY ASCEND</span>
      </div>
    </a>
  );
};
export default PowerBy;