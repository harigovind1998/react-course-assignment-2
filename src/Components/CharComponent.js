import React from 'react';

const charComponent = props =>{
    return(
        <div style={charCompStyle} onClick={props.click}>
            {props.value}
        </div>
    )

}

const charCompStyle = {
    display: 'inline-block',
    padding: '16px',
    textAligh: 'center',
    margin: '16px',
    border: '1px solid black'
}

export default charComponent;