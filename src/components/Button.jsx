import * as Icons from "react-icons/io5";
import React from "react";

const Button = ({icon, onClick, content}) => {
  const Tagname = Icons[icon] || Icons.IoHelpOutline;

  return (
    <>
      {icon ? (
        <button className="controls__btn" onClick={onClick}>
          <Tagname icon={icon} />
        </button>
      ) : (
        <button className="controls__btn text" onClick={onClick}>
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
