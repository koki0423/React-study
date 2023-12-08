import React, { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);


    const handleIncrement = (value) => {
        setCount(count + value)
    };

    const handleDecrement = () => {
        if (count > 0)
            setCount(count - 1);
    };

    return (
        <div>
            <h1>カウント数:{count}</h1>
            <button onClick={() => handleIncrement(1)}>カウントアップ</button>
            <button onClick={handleDecrement}>カウントダウン</button>
        </div>
    );

}

export default CounterApp;