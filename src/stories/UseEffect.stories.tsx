import React, { useState, useEffect } from "react";

export default {
    title: 'useEffect demo'
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('SetTimeoutExample');

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    return (
        <>
            Hello, counter: {counter}
        </>
    );
}