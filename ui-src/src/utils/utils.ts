import type {EventsFromUiToPluginTypes} from "@shared/eventsFromUiToPlugin.types";

export const postEventFromUiToPlugin = (message: EventsFromUiToPluginTypes) => parent.postMessage({ pluginMessage: message }, "*");
