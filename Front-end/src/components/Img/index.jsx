import React from "react";

const Img = ({
  className,
  src = "",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
