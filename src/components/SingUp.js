import { useState } from "react";

export const SingUp = () => {
  const [text, setText] = useState({
    lastName: "",
    birthday: "",
    phoneNumber: "",
  });
  const changeHandler = (e) => {
    setText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="notmain">
      <div>
        <div>Фамилия</div>
        <input
          name="lastName"
          type="text"
          className="textArea"
          value={text.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <div>Дата рождения</div>
        <input
          name="birthday"
          type="text"
          className="textArea"
          value={text.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <div>Номер телефона</div>
        <input
          name="phoneNumber"
          type="text"
          className="textArea"
          value={text.password}
          onChange={changeHandler}
        />
      </div>
      <button>Зарегистрироваться</button>
    </div>
  );
};
