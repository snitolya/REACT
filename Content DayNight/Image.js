import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./themeContext";

function Image(props) {

  return (
    <ThemeContextConsumer>
      {theme => (
        <div className={`${theme}-image image`}>
          <div className={`${theme}-ball ball`} />
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}


export default Image;