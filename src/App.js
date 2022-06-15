import { BrowserRouter, Route, Routes } from "react-router-dom";
import Key from "./Key";
import Nav from "./Nav";
import State from "./State";
import VirtualDOM from "./VirtualDOM";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/virtualDOM" element={<VirtualDOM />} />
        <Route path="/key" element={<Key />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
