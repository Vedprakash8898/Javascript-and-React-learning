import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
    let value = props.primary ? 'primary' : 'secondary'
  return (
    <div>
    <h1 className={`${value} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet