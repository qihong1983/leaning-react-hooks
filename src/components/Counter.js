import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0);

    const [CounterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1)


    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 == 0;
    }, [counterOne]);


    return (
        <div>
            <div>
                <button onClick={incrementOne}> Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}> Count Two - {CounterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
