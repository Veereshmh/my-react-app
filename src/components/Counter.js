import React, {useState, useEffect, useRef} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(flase);
    const intervalRef = useRef(null)

    const toggleCounter = () => {
        setIsRunning((prev) => !prev);
    }

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);


    return(
        <div className="text-center mt-10">
            <h1 className='text-2xl mb-4'>Counter: {count} </h1>
            <button onClick={toggleCounter} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {isRunning ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default Counter