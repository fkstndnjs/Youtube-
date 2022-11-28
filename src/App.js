import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* 유튜브 로고, 검색창 */}
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
