import React from 'react'

function FunctionalClick() {
    function clickHandler(){
        console.log('test');
}
  return (
    <div>
        <button onClick={clickHandler()}>Button Clicked</button>
    </div>
  )
}

export default FunctionalClick;