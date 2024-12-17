import React, { useState, useEffect, useQuery } from "react";
import Calendar from "react-calendar";
// import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "../MainPage/MyCalendarCss.css";
import BooksOfTheDay from "./components/BooksOfTheDay";
import bookcover1 from "../../assets/images/booksCover1.png";
import demianCover from "../../assets/images/demianCover.png";

export default function MainPage() {
  const [value, setValue] = useState(new Date());
  // const [mark, setMark] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1); // 하루 빼기
    return adjustedDate.toISOString().split("T")[0];
  };

  const booksByDate = {
    "2024-12-16": {
      title: "소년이 온다",
      bestLine: '"당신을 잃은 뒤 우리들의 시간은 저녁이 되었습니다."',
      bookCoverImg: bookcover1,
    },
    "2024-12-17": {
      title: "데미안",
      bestLine: '"새는 알에서 나오려고 투쟁한다. 알은 세계이다."',
      bookCoverImg: demianCover,
    },
  };

  useEffect(() => {
    console.log({ value });
  }, [value]); // 날짜 클릭 시 해당 날짜가 콘솔에 찍힌당

  return (
    <Container>
      <Calendar
        onChange={setValue}
        value={value}
        showNeighboringMonth={false}
        // 이웃한 달의 날짜를 보여주지 말지 결정하는 속성
        next2Label={null} // 다음 년도 이동 버튼 지우기
        prev2Label={null} // 이전 년도 이동 버튼 지우기
        locale="en-US"
        onClickDay={handleDateClick}
      />
      <BooksOfTheDay
        selectedDate={selectedDate}
        formatDate={formatDate}
        booksByDate={booksByDate}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
