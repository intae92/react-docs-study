import { BrowserRouter, Route, Routes } from "react-router-dom";
import Key from "./Key";
import Nav from "./Nav";
import Ref from "./Ref";
import State from "./State";
import VirtualDOM from "./VirtualDOM";
import HandlingEvents from "./HandlingEvents";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/virtualDOM" element={<VirtualDOM />} />
        <Route path="/key" element={<Key />} />
        <Route path="/state" element={<State />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/handlingEvents" element={<HandlingEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
