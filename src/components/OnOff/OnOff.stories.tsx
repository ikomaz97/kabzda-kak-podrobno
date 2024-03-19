import React, { useState } from "react";
import { OnOff } from "./OnOff";
import { action } from '@storybook/addon-actions'; // Используйте `action` вместо `actions`

export default {
    title: "OnOff",
    component: OnOff
};

type OnChangeCallback = (on: boolean) => void;
const callback: OnChangeCallback = action('on or off clicked'); // Используйте `action` здесь

export const OnMode = () => <OnOff on={true} onChange={callback} />;
export const OffMode = () => <OnOff on={false} onChange={callback} />;
export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setvalue} />;
};