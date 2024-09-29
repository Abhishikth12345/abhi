import React, { useState } from 'react'

const Demo = () => {
    // console.log(useState());
    const[count, setCount] = useState(0);

    const handleButton=()=>{

        setCount("Mani kumar")
    }
  return (
    <div>
        {count}
        <button onClick={handleButton}>change</button>
    
    </div>
  )
}

export default Demo