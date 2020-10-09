import React from 'react';

const ActiveIngredient = ({props}, handleClick) => {
    return(
        <li class="active" onClick={this.handleClick}>{props.text}</li>
    )
}

export default ActiveIngredient
