import React, { useEffect, useState } from "react";
import axios from "axios";

import "../style/BookDetails.css";

function BookDetails() {
  const [bookData, setBookData] = useState([]); // 책 데이터를 상태로 관리

  useEffect(() => {
    const callBookAPI = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://dapi.kakao.com/v3/search/book?query='Harry'`,
          headers: {
            Authorization: `KakaoAK 6a6a4c4e045812d9cd57047946f8c58d`,
          },
        });
        setBookData(response.data.documents); // 책 데이터를 상태로 설정
      } catch (err) {
        console.log("Error fetching book data", err);
      }
    };

    callBookAPI();
  }, []); // 컴포넌트가 마운트될 때 한번만 호출 되도록 비워놨어요

  return (
    <div>
      {bookData.length > 0 ? (
        bookData.map((book, index) => (
          <div key={index}>
            <div className="BookThumbnail">
              <img src={book.thumbnail} alt={book.title} />{" "}
              {/* 썸네일 이미지 */}
            </div>
            <div className="BookData">
              <h3>{book.title}</h3> {/* 책 제목 */}
              <p>{book.datetime}</p> {/* 책 출판 날짜 */}
              <br />
              <p>{book.contents}</p> {/* 책 내용 */}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails;
