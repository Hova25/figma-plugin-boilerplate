type FigmaPostMessageKeys = "pong";

type FigmaPostMessageEvent<
    PluginMessage extends {
        key: FigmaPostMessageKeys;
        // biome-ignore lint/suspicious/noExplicitAny: Intentional usage `any`
        data: any;
    },
> = MessageEvent<{ pluginId: string; pluginMessage: PluginMessage }>;

type BasePostEvent<Key extends FigmaPostMessageKeys, Data> = FigmaPostMessageEvent<{
    key: Key;
    data: Data;
}>;

export type PongEvent = BasePostEvent<"pong", string>;
export type EventsFromPluginToUi = PongEvent;
