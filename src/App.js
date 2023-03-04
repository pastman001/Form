import React from "react";
import "./style.css";
import { Date } from "./components/Date";
import { DelAk } from "./components/DelAc";
import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";
import { Routes, Route } from "react-router-dom";
import { withData } from "./hoc/withData";

export const App = () => {
  const CompWithData = withData(Date);
  return (
    <>
      <div className="mainContainer">
        <CompWithData />
        <Routes>
          <Route path="/" element={<SingUp />}></Route>
          <Route path="/1" element={<SingIn />}></Route>
          <Route path="/2" element={<DelAk />}></Route>
        </Routes>
      </div>
    </>
  );
};
