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
    </div>
  );
}

export default FileProgressBar;
