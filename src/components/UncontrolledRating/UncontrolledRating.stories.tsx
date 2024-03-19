import React from "react";
import { UncontrolledRating } from "./UncontrolledRating";
import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: "UncontrolledRating stories",
    component: UncontrolledRating,
};

const callback = action("изменение рейтинга внутри компонента");

export const EmptyRating = () => <UncontrolledRating value={0} onChange={callback} />;
export const Rating1 = () => <UncontrolledRating value={1} onChange={callback} />;
export const Rating2 = () => <UncontrolledRating value={2} onChange={callback} />;
export const Rating3 = () => <UncontrolledRating value={3} onChange={callback} />;
export const Rating4 = () => <UncontrolledRating value={4} onChange={callback} />;
export const Rating5 = () => <UncontrolledRating value={5} onChange={callback} />;
