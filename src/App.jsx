import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Birthday from "./pages/Birthday";
import Letter from "./pages/Letter";
import Surprise from "./pages/Surprise";
import Resources from "./pages/Resources";
import Secret from "./pages/Secret";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/birthday"
          element={<Birthday />}
        />

        <Route
          path="/letter"
          element={<Letter />}
        />

        <Route
          path="/surprise"
          element={<Surprise />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/secret"
          element={<Secret />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;