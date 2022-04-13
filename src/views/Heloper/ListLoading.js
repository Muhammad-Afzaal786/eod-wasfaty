import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const ListLoading = ({ loading }) => {
  return (
    <div className={`${loading ? "d-block" : "d-none"}`}>
      <Skeleton height={60} count={1} className="mb-1" />
      <Skeleton height={80} count={10} />
    </div>
  );
};

export default ListLoading;
