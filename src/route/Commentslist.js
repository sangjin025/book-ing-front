import React, { useEffect } from "react";
import axios from "axios";
import BookDetails from "../route/BookDetails";
// import BookDetails from "../components/BookDetails";

import "../style/CommentsList.css";

function Commentslist() {
  useEffect(() => {
    const callBookAPI = async () => {
      await axios({
        method: "GET",
        url: `https://dapi.kakao.com/v3/search/book?query='Harry'`,
        headers: { Authorization: `KakaoAK 6a6a4c4e045812d9cd57047946f8c58d` },
      })
        .then((res) => {
          console.log(res.data.documents);
        })
        .catch((err) => {
          console.log("error");
        });
    };

    callBookAPI();
  }, []);

  return (
    <div>
      <div className="Container">
        <h2 className="SubTitle">&nbsp;&nbsp;&nbsp;My comments</h2>
      </div>
      <div className="MyCommentsBox">
        <div>
          <BookDetails />
        </div>
      </div>
    </div>
  );
}
export default Commentslist;
