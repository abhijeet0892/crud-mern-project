import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBook from "./component/CreateBook";
import AllBook from "./component/AllBook";
import UpdateBook from "./component/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CreateBook />}></Route>
        <Route exact path="/books" element={<AllBook />}></Route>
        <Route exact path="/updatebook/:bid" element={<UpdateBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
