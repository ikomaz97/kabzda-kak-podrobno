import React, { useState, useEffect } from "react";

export default {
    title: 'useEffect demo'
}

export const SetTimeoutExample = () => {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            setTimeString(`${hours}:${minutes}:${seconds}`); // Объединяем часы, минуты и секунды в строку
        }, 1000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, []);

    return (
        <>
            Hello, time: {timeString}
        </>
    );
}