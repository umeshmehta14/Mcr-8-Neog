import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import SingleEvent from "./Pages/Single Event/SingleEvent";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<SingleEvent />} />
      </Routes>
    </div>
  );
}

export default App;
