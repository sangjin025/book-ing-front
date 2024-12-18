import MainPage from "./pages/MainPage/MainPage";
import HeaderFooter from "./components/HeaderFooter";
import Login from "./components/Login";
import Commentslist from "./route/Commentslist";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<HeaderFooter />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/comment" element={<Commentslist />} />;
        </Route>
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
