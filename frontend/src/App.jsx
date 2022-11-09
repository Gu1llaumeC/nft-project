import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
