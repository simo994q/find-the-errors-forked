import style from "./InputField.module.scss";

export const InputField = ({ name, type, placeholder, label }) => {
  return (
    <>
      {label && (
        <label className={style.labelStyle} htmlFor={name}>
          {name}
        </label>
      )}
      <input
        autoComplete="true"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={style.inputStyle}
      ></input>
    </>
  );
};
