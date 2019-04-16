import React from "react";
// loading indicator
const Spinner = () => {
  return (
    <div style={{ height: "40px", width: "100%" }}>
      <div style={{ position: "absolute", width: "100%" }}>
        <div className="k-loading-image" />
      </div>
    </div>
  );
};

export default Spinner;
