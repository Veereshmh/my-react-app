import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h2>Count : { count }</h2>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default Count;