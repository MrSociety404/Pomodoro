import * as Icons from "react-icons/io5";

const Button = (props) => {
  const Tagname = Icons[props.icon] || Icons.IoHelpOutline;

  return (
    <>
      {props.icon ? (
        <button className="controls__btn">
          <Tagname {...props} />
        </button>
      ) : (
        <button className="controls__btn text">
          {props.content}
        </button>
      )}
    </>
  );
};

export default Button;
