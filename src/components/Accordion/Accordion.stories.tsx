import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('same item was clicked')
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Menu'}
                      collapsed={true}
                      onChange={callback} items={[]}
                      onClick={onClickCallback}
    />
};

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Users'}
                      collapsed={false}
                      onChange={callback}
                      items={[{title: 'Dimych', value: 1}, {title: "Valera", value: 2}, {
                          title: 'Artem',
                          value: 3
                      }, {title: 'Victor', value: 4},]}
                      onClick={onClickCallback}
    />
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[{title: 'Dimych', value: 1}, {title: "Valera", value: 2}, {
                          title: 'Artem',
                          value: 3
                      }, {title: 'Victor', value: 4},]}
                      onClick={onClickCallback}
    />
};