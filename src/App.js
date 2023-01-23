import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigations.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="*" element={<Navigation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
