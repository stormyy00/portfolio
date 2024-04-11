import React from "react";

const Title = ({ text, children }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="m-0 text-web-white font-anticDidone text-3xl md:text-5xl w-fit z-50 drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)]">
        {text}
      </p>
      {children}
    </div>
  );
};

export default Title;
