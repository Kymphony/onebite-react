const Button = ({ children, text, color = "black" }) => {
  const onClickBtn = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickBtn}
      //onMouseEnter={onClickBtn}
      style={{
        color: color,
      }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
