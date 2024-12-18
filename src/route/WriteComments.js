import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../style/WriteComments.css";

function WriteComments() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="GoBackBtn" onClick={goBack}></button>
      <h2 className="WriteSubTitle">Best Lines & Comments</h2>
    </div>
  );
}
export default WriteComments;
