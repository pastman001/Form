import React, { useState } from 'react';

export const SingUp = () => {
  const mainData = [];
  const stateData: {
    lastName: string;
    birthday: string;
    phoneNumber: string;
    id: number;
  } = {
    lastName: '',
    birthday: '',
    phoneNumber: '',
    id: 0,
  };

  const [text, setText] = useState(stateData);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const dataHandler = () => {
    mainData.push({ ...text });
    text.id++;
  };
  return (
    <div className="mainContainer">
      <div>
        <div>Фамилия</div>
        <input
          name="lastName"
          type="text"
          className="textArea"
          value={text.lastName}
          onChange={changeHandler}
        />
      </div>
      <div>
        <div>Дата рождения</div>
        <input
          name="birthday"
          type="text"
          className="textArea"
          value={text.birthday}
          onChange={changeHandler}
        />
      </div>
      <div>
        <div>Номер телефона</div>
        <input
          name="phoneNumber"
          type="text"
          className="textArea"
          value={text.phoneNumber}
          onChange={changeHandler}
        />
      </div>
      <button onClick={dataHandler}>Зарегистрироваться</button>
    </div>
  );
};
