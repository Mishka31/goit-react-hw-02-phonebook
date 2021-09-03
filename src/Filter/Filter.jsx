import s from "./Filter.module.css";

function Find({ value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name:</p>
      <input type="text" value={value} onChange={onSearch} className={s.input}></input>
    </div>
  );
}

export default Find;
