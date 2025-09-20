# Figma Plugin Boilerplate

> 🚀 A boilerplate to create Figma plugins quickly and easily, with **React**, **typed event communication**, and a clean
> structure.

---

## 📖 About

This boilerplate is designed to speed up the development of **Figma plugins**.  
It provides a ready-to-use setup with:

- **React** for the UI
- **Typed events** for safe communication between backend (plugin) and frontend (UI)
- A clear and scalable project structure

---

## 📂 Project Structure

plugin-src/ # Figma plugin backend
shared/ # Shared types and utilities for events
ui-src/ # React UI for the plugin

### 🔑 Shared types

In the `shared/` folder you’ll find the core type definitions for communication:

- **`eventsFromPluginToUi.types.ts`**
    - Defines `FigmaPostMessageKeys` → all backend event keys
    - Defines `EventsFromPluginToUi` → union type of all plugin → UI events

  Example:
  ```typescript
  export type PongEvent = BasePostEvent<"pong", any>;
  ```

Send an event from the backend:

```typescript
postEventFromPluginToUi({key: "pong", data: "Any data"});
```

- **`eventsFromUiToPlugin.types.ts`**
    - Defines FigmaOnMessageKeys → all UI event keys
    - Defines EventsFromUiToPlugin → union type of all UI → plugin events

Example:

```typescript
export type OnNotify = FigmaOnMessageEvent<
    "notify",
    { message: string }
>;
```

Send an event from the UI:

```typescript
postEventFromUiToPlugin({key: "notify", message: "Helloo !"});
```

## 🔄 Usage Examples

Listen to plugin → UI messages

```typescript jsx
const {addPluginOnMessage} = usePluginOnMessage();

useEffect(() => {
    addPluginOnMessage((event: EventsFromPluginToUi) => {
        const {data, key} = event.data.pluginMessage;
        switch (key) {
            case "pong":
                console.log("pong:", data);
                break;
        }
    });
}, []);
```

Listen to UI → plugin messages

```typescript jsx
onEventFromUiToPlugin(async (message) => {
    switch (message.key) {
        case "notify": {
            figma.notify(message.message);
            break;
        }
    }
});
```

## 🛠️ Getting Started

Install dependencies: ```pnpm install```

Run the project: ```pnpm dev```

## ✅ Features

- ⚡ Fast setup with React
- 🔒 Fully typed event system (backend ↔ frontend)
- 🧩 Modular project structure
- 🛠️ Ready-to-extend boilerplate

## 📜 License

MIT – feel free to use, modify, and share!