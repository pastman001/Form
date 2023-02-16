import React from "react";
import "./style.css";
import { DelAk } from "./components/DelAk";
import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="notmain">
        <div className="notmain">
          <div className="notmain">Имя</div>
          <div className="notmain">Имейл</div>
          <div className="notmain">Пароль</div>
        </div>
        <Routes>
          <Route path="/" element={<SingUp />}></Route>
          <Route path="/1" element={<SingIn />}></Route>
          <Route path="/2" element={<DelAk />}></Route>
        </Routes>
      </div>
    </>
  );
};
