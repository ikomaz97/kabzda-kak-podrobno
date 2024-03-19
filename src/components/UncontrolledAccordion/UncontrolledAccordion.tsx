import React, { useState } from "react";

export type AccordionPropsType = {
    titleValue: string;

};

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    const [collapsed, setCollapsed] = useState(false);

    const toggleAccordion = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion} />
            {!collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
    toggleAccordion: () => void;
};

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <div>
            <h3>
                <button onClick={props.toggleAccordion}>--{props.title}--</button>
            </h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UncontrolledAccordion;