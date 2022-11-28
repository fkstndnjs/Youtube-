import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <>
      {/* 유튜브 로고, 검색창 */}
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
