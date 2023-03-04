import React from "react";
import { useState } from "react";

export const DelAk = () => {
  const [textArea, setTextArea] = useState("");
  const updateText = (event) => {
    let text = event.target.value;
    setTextArea(text);
  };
  return (
    <form className="mainContainer">
      <div>Удаление аккаунта</div>
      <input
        className="textArea"
        type="text"
        value={textArea}
        onChange={updateText}
      />
      <div>Оцените работу приложения</div>
      <div className="gridArea">
        <div>
          <input type="radio" name="1" value="1" />
          <div>1</div>
        </div>
        <div>
          <input type="radio" name="1" value="2" />
          <div>2</div>
        </div>
        <div>
          <input type="radio" name="1" value="3" />
          <div>3</div>
        </div>
        <div>
          <input type="radio" name="1" value="4" />
          <div>4</div>
        </div>
        <div>
          <input type="radio" name="1" value="5" />
          <div>5</div>
        </div>
      </div>
      <input type="submit" value="Отпарвить" />
    </form>
  );
};
