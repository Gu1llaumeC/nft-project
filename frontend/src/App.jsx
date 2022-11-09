import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collection from "./pages/Collection";
import Market from "./pages/Market";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// TODO: Add check if user is logged in

export default App;
