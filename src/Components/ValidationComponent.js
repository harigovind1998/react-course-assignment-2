import React from "react";

const getLengthValidationString = (len) =>{
    if (len > 5){
        return(
            <div>Text long enough!</div>
        )
    }

    return(
        <div>Text too short</div>
    )
}

const validationComponent = (props) => {
  return getLengthValidationString(props.length);
};

export default validationComponent;
