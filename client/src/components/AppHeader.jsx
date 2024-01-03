import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function AppHeader() {
  const contextData = useContext(DataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {contextData.usernameState}</h2>
    </div>
  );
}

export default AppHeader;
