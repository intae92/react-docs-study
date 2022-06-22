import { BrowserRouter, Route, Routes } from "react-router-dom";
import Key from "./Key";
import Nav from "./Nav";
import Ref from "./Ref";
import State from "./State";
import VirtualDOM from "./VirtualDOM";
import HandlingEvents from "./HandlingEvents";
import Props from "./Props";

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
        <Route path="/props" element={<Props />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
