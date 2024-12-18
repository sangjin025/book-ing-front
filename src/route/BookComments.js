import React from "react";
import { Link, useNavigate } from "react-router-dom";

import back from "../image/backArrow.png";

import "../style/BookComments.css";

function WriteComments() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="GoBackBtn" onClick={goBack}>
        <img src={back} alt="backPage" />
      </button>
      <h2 className="WriteSubTitle">Best Lines & Comments</h2>
    </div>
  );
}
export default WriteComments;
