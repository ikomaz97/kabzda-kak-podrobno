import React from "react";

export type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string;
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
};

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

export type AccordionTitleProps = {
    title: string
    onChange: () => void
};

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <div>
            <h3 onClick={(event) => props.onChange()}>---{props.title}---</h3>
        </div>
    );
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;


//
//
// import React, { useState } from "react";
// type AccordionPropsType = {
//     titleValue: string;
//     title: string
// };
//
// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendering");
//
//     const [Collapsed, setCollapsed] = useState(false);
//
//     const toggleAccordion = () => {
//         setCollapsed(!Collapsed);
//     };
//
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion} />
//             {!Collapsed && <AccordionBody />}
//         </div>
//     );
// }
//
// type AccordionTitleProps = {
//     title: string;
//     toggleAccordion: () => void;
// };
//
// function AccordionTitle(props: AccordionTitleProps) {
//     return (
//         <div>
//             <button onClick={props.toggleAccordion}>{props.title}</button>
//         </div>
//     );
// }
//
// function AccordionBody() {
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>
//     );
// }
//
// export default Accordion;