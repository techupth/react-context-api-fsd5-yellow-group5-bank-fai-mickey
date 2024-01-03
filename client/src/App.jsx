import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

import { DataContext } from "./context/DataContext.jsx";

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <>
      <div className="App">
        <DataContext.Provider
          value={{
            usernameState: userData.username,
            levelState: userData.level,
            avatarState: userData.avatar,
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/view/:id" element={<ViewProductPage />} />
            </Routes>
          </Router>
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;
