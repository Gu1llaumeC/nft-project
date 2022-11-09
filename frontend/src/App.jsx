import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Collection from "./pages/Collection";
import Market from "./pages/Market";
import Login from "./pages/Login";

function App() {

  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login address={address} setAddress={setAddress} />} />
          <Route path="/collection" element={<Collection address={address} setAddress={setAddress} />} />
          <Route path="/market" element={<Market />} address={address} setAddress={setAddress} />
          <Route path="/login" element={<Login address={address} setAddress={setAddress} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// TODO: Add check if user is logged in

export default App;
