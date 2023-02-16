export const DelAk = () => {
  let obj = { textarea: "" };
  return (
    <div className="notmain">
      <div>Удаление аккаунта</div>
      <input type="text" value={obj.textarea} />
      <div>Оцените работу</div>
      <div>
        <div>
          <input type="radio" name="1" value="1" />1
        </div>
        <div>
          <input type="radio" name="1" value="2" />2
        </div>
        <div>
          <input type="radio" name="1" value="3" />3
        </div>
        <div>
          <input type="radio" name="1" value="4" />4
        </div>
        <div>
          <input type="radio" name="1" value="5" />5
        </div>
      </div>
      <input type="submit" value="Отпарвить" />
    </div>
  );
};
