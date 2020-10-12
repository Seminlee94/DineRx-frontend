import React from "react";
import Button from "react-bootstrap/Button";

const MoreButton = (props) => {
  return (
    <Button
      variant="outline-info"
      onClick={props.moreItems}
      style={{
        border: 0,
        alignSelf: "center",
      }}
    >
      {props.children}
    </Button>
  );
};

export default MoreButton;
