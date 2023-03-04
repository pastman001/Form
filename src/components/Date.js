import React from "react";
import { useState } from "react";

export const Date = (props) => {
  const [text, setText] = useState({
    name: props.name || "",
    email: props.email || "",
    password: props.password || "",
  });
  const changeHandler = (e) => {
    setText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="mainContainer">
        <div>
          <div>Имя</div>
          <input
            name="name"
            type="text"
            className="textArea"
            value={text.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <div>Имейл</div>
          <input
            name="email"
            type="text"
            className="textArea"
            value={text.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <div>Пароль</div>
          <input
            name="password"
            type="text"
            className="textArea"
            value={text.password}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
};
