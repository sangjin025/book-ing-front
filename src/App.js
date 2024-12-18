import MainPage from "./pages/MainPage/MainPage";
import HeaderFooter from "./components/HeaderFooter";
import Login from "./components/Login";
<<<<<<< HEAD
import Commentslist from "./route/Commentslist";
=======
>>>>>>> 9bccb1bf7d685edd7df00b99ca6cdc42faf39812
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<HeaderFooter />}>
          <Route path="/main" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/comment" element={<Commentslist />} />;
=======
>>>>>>> 9bccb1bf7d685edd7df00b99ca6cdc42faf39812
        </Route>
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         {/* 헤더 푸어 포함하는 컨포넌트들 */}
//         <Route element={<HeaderFooter />}>
//           <Route path="/main" element={<MainPage />} />
//           <Route path="/review" element={<PReview />} />
//           <Route path="/mypage" element={<MyPage />} />
//           <Route path="/boards" element={<Board />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }
export default App;
