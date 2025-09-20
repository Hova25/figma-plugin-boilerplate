// on message from ui to plugin

type FigmaOnMessageKeys = "ping" | "notify" | "mouseEnterNode" | "mouseLeaveNode";

type FigmaOnMessageEvent<
    Key extends FigmaOnMessageKeys,
    // biome-ignore lint/suspicious/noExplicitAny: Intentional usage `any`
    Data extends Record<string, any | undefined>,
> = {
    key: Key;
} & Data;

export type OnPing = FigmaOnMessageEvent<"ping", {}>;

export type OnNotify = FigmaOnMessageEvent<
    "notify",
    {
        message: string;
    }
>;

export type OnMouseEnterNode = FigmaOnMessageEvent<
    "mouseEnterNode",
    {
        nodeId: string;
    }
>;

export type OnMouseLeaveNode = FigmaOnMessageEvent<
    "mouseLeaveNode",
    {
        nodeId: string;
    }
>;

export type EventsFromUiToPluginTypes = OnPing | OnNotify | OnMouseEnterNode | OnMouseLeaveNode;
