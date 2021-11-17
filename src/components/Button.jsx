import * as Icons from "react-icons/io5";
import React from "react"

const Button = React.forwardRef((props, ref) => {
  const Tagname = Icons[props.icon] || Icons.IoHelpOutline;

  return (
    <>
      {props.icon ? (
        <button ref={ref} className="controls__btn" onClick={props.onClick}>
          <Tagname {...props} />
        </button>
      ) : (
        <button className="controls__btn text" onClick={props.onClick}>
          {props.content}
        </button>
      )}
    </>
  );
});

export default Button;
