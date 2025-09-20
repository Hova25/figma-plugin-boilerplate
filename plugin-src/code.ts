import {cleanHighlight, highlightNode} from "@plugin-src/eventFromUiToPlugin/highlightNode";
import {onEventFromUiToPlugin, postEventFromPluginToUi} from "@plugin-src/utils";
import {WINDOW_HEIGHT, WINDOW_WIDTH} from "@shared/window.const";

figma.showUI(__html__, {themeColors: true, height: WINDOW_HEIGHT, width: WINDOW_WIDTH});

export type PluginData = {
    canAddGlobalData?: string;
};

const pluginData: PluginData = {};

onEventFromUiToPlugin(async (message) => {
    switch (message.key) {
        case "notify": {
            figma.notify(message.message);
            break;
        }
        case "ping": {
            postEventFromPluginToUi({key: "pong", data: "Any data"});
            break;
        }
        case "mouseEnterNode": {
            highlightNode(message.nodeId);
            break;
        }
        case "mouseLeaveNode": {
            cleanHighlight();
            break;
        }
    }
});

figma.loadAllPagesAsync().then((pages) => {
    figma.on("documentchange", (e) => {
        console.log("DocumentChangeEvent", e);
    });
});

const init = () => {
    console.log("Hello", pluginData);
};

// clearPluginData();
init();
