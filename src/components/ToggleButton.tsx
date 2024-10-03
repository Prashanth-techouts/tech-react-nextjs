import React, { useState } from 'react'

function ToggleButton() {

    const[isOn,setisOn]=useState(false)
    
      
  return (
    <div>
        <input type='checkbox' checked={isOn} value={'ON'}  onChange={e => setisOn(e.target.checked)}></input>
    </div>
  )
}

export default ToggleButton