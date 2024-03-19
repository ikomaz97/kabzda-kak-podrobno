import React, { useState } from "react";

type RatingPropsType = {
    value: number; // добавляем свойство value
    onChange: (value: number) => void;
};

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState<number>(props.value);

    function handleRatingChange(newValue: number) {
        if (newValue !== value) {
            setValue(newValue);
            props.onChange(newValue);
        }
    }

    return (
        <div>
            <Star selected={value > 0} setValue={() => handleRatingChange(1)} />
            <Star selected={value > 1} setValue={() => handleRatingChange(2)} />
            <Star selected={value > 2} setValue={() => handleRatingChange(3)} />
            <Star selected={value > 3} setValue={() => handleRatingChange(4)} />
            <Star selected={value > 4} setValue={() => handleRatingChange(5)} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    setValue: () => void;
};

function Star(props: StarPropsType) {
    return (
        <span onClick={props.setValue}>{props.selected ? <b>star- </b> : "star "}</span>
    );
}