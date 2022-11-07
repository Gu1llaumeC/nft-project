import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="Market" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
