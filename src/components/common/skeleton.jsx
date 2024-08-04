import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray bg-opacity-50 ${className}`}></div>
);

export default Skeleton;
