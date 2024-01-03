import { UserDataContext } from "../contexts/userDataContext";
import { useContext } from "react";

function AppHeader() {
  const contextData = useContext(UserDataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {contextData.username}</h2>
    </div>
  );
}

export default AppHeader;
