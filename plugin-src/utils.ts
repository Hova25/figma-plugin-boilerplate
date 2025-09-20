import {EventsFromPluginToUi} from "@shared/eventsFromPluginToUi.types";
import {EventsFromUiToPluginTypes} from "@shared/eventsFromUiToPlugin.types";

export const postEventFromPluginToUi = (message: EventsFromPluginToUi["data"]["pluginMessage"]) => figma.ui.postMessage(message);

type OnEventFromUiToPluginProps = (msg: EventsFromUiToPluginTypes) => void;

export const onEventFromUiToPlugin = (msg: OnEventFromUiToPluginProps) => {
    figma.ui.onmessage = msg;
};

export const hexToRgb = (_hex: string): RGB => {
    let hex = _hex.replace(/^#/, "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    const r = Number.parseInt(hex.substring(0, 2), 16) / 255;
    const g = Number.parseInt(hex.substring(2, 4), 16) / 255;
    const b = Number.parseInt(hex.substring(4, 6), 16) / 255;

    return {r, g, b};
};
