import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const Result = React.lazy(() => import("./pages/Result"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Result" element={<Result />}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
