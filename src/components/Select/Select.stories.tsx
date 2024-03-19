import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Select} from './Select'

export default  {
    title: 'Select',
    component: Select,
}



export const EmptyRating = () => <Select onChange = {action('Value changed')}/>