import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => {
            return prevCount + 1
        });
    }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000);
    // }, [count])



    // useEffect(() => {
    //     function doSomething() {
    //         console.log(someProp);
    //     }
    //     doSomething();
    //     const interval = setInterval(tick, 1000);
    // }, [someProp])


    useEffect(() => {
        const interval = setInterval(tick, 1000);
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
