import { action } from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import React, {useState} from "react";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

export const ModeChanging = () => {
    const callback = action('accordion mode change event fired');

    const [isOpen, setIsOpen] = useState(false);

    const handleAccordionClick = () => {
        setIsOpen(prevState => !prevState);
        callback(); // Вызовите `action` при изменении состояния аккордеона
    };

    return <UncontrolledAccordion titleValue={"Users"} onClick={handleAccordionClick} />;
};
