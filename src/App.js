import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { c_routes } from "./Constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {c_routes.map((page, i) => {
          return (
            <Route
              exact
              path={`/${page.Route}`}
              element={page.Element}
              key={i}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
