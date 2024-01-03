import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function AppHeader() {
  const contextData = useContext(DataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {contextData.username}</h2>
    </div>
  );
}

export default AppHeader;
