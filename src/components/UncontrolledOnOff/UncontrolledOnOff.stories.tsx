import { action } from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import React, {useState} from "react";
export default  {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked'); // Используйте `action` здесь

export const OnMode = () =>  <UncontrolledOnOff defaultOn = {true} onChange={callback}  />;
export const OffMode = () =>  <UncontrolledOnOff defaultOn = {false} onChange={callback}  />;




