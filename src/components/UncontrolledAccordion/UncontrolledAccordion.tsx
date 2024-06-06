import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

export type AccordionPropsType = {
    titleValue: string;
    onClick: () => void;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    //const [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion}/>*/}
            <AccordionTitle title={props.titleValue} toggleAccordion={() => dispatch({ type: TOGGLE_COLLAPSED })} />
            {!state.collapsed && <AccordionBody/>}
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