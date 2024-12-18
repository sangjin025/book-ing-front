import React from "react";
import styled from "styled-components";
import BooksCoverImg1 from "../../../assets/images/booksCover1.png";
import { Link } from "react-router-dom";

export default function BooksOfTheDay({
  selectedDate,
  formatDate,
  booksByDate,
}) {
  const formattedDate = selectedDate ? formatDate(selectedDate) : null;
  const bookInfo = formattedDate && booksByDate[formattedDate]; // 선택한 날짜의 책 정보 가져오기

  return (
    <div>
      {selectedDate ? (
        bookInfo ? (
          <>
            <StyledFont>
              Books of the Day : {selectedDate.toLocaleDateString()}
            </StyledFont>
            <BooksDiv>
              <BooksCover src={bookInfo.bookCoverImg} alt="소년이 온다" />
              <BooksDivRight>
                <BooksName> {bookInfo.title} </BooksName>
                <BooksBestLine>{bookInfo.bestLine}</BooksBestLine>
                <BtnWrapper>
                  {/* <BestLinesBtn>BestLines</BestLinesBtn> */}
                  <MyCommentsBtn>
<<<<<<< HEAD
                    <StyledLink to="/comment">
                      BestLines & MyComments
                    </StyledLink>
=======
                    <StyledLink to="/login">BestLines & MyComments</StyledLink>
>>>>>>> 9bccb1bf7d685edd7df00b99ca6cdc42faf39812
                  </MyCommentsBtn>
                </BtnWrapper>
              </BooksDivRight>
            </BooksDiv>
          </>
        ) : (
          <>
            <StyledFont>
              Books of the Day : {selectedDate.toLocaleDateString()}
            </StyledFont>
            <NoHistoryDiv> 저장된 기록이 없습니다. 😅</NoHistoryDiv>
          </>
        )
      ) : (
        <p> 무엇을 누르신거죠..? </p>
      )}
    </div>
  );
}

const BooksDiv = styled.div`
  display: flex;
  width: 335px;
  height: 150px;
  border: 1px solid #0c7c16;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const BooksCover = styled.img`
  width: 78px;
  height: 120px;
  margin: 10px 5px;
  box-sizing: border-box;
`;

const BooksDivRight = styled.div`
  font-size: 15px;
  padding: 10px;
`;

const BooksName = styled.div`
  font-size: 20px;
`;

const BooksBestLine = styled.div`
  height: 75px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BestLinesBtn = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid #81c784;
  cursor: pointer;

  &:hover {
    background-color: #81c784;
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;
const MyCommentsBtn = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid #81c784;
  cursor: pointer;

  &:hover {
    background-color: #81c784;
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 부모 요소의 색상 상속 */
`;

const NoHistoryDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFont = styled.div`
  font-size: 15px;
  color: #795548;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
`;
