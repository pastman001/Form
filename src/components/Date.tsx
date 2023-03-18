import React, { useState } from 'react';

export const Date = (props: { name: string; email: string; password: string }) => {
  const [text, setText] = useState({
    name: props.name || '',
    email: props.email || '',
    password: props.password || '',
  });
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
