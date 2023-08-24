import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import ShowCreators from "./pages/ShowCreators/ShowCreators";
import AddCreator from "./pages/AddCreator/AddCreator";
import EditCreator from "./pages/EditCreator/EditCreator";
import ViewCreator from "./pages/ViewCreator/ViewCreator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route index element={<ShowCreators />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
