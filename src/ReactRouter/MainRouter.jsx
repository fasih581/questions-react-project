import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "../components/layout/Registration/Registration";
import QusPage from "../components/layout/QusPage/Questions";


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/questions" element={<QusPage />} />
    </Routes>
  );
};

export default MainRouter;
