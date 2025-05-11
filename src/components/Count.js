import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    return(
        <div className="text-center mt-10">
            <h1 text-2xl mb-4>Count : { count }</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={Increment}>Increment</button>
        </div>
    );
}

export default Count;
