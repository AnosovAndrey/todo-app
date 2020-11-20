import React from "react";
import classNames from "classnames"

import "./Button.scss";

const Button = ({name, text, onClick}) => {

    return(
        <button 
            className={classNames("button-item", name)}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;