import React from "react";
import { Progress } from "reactstrap";

function FileProgressBar({ value, filename }) {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <span>{filename}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} color="info" />

      {/* <div className="text-center">Multiple bars</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress> */}
    </div>
  );
}

export default FileProgressBar;
