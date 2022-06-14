import { BrowserRouter, Route, Routes } from "react-router-dom";
import Key from "./Key";
import Nav from "./Nav";
import VirtualDOM from "./VirtualDOM";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/virtualDOM" element={<VirtualDOM />} />
        <Route path="/key" element={<Key />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
