import {createContext, type FC, type PropsWithChildren, useContext, useEffect, useState} from "react";
import type {EventsFromPluginToUi} from "../../../shared/eventsFromPluginToUi.types";

export type PluginOnMessage = {
	onMessages: ((event: EventsFromPluginToUi) => void)[];
	addPluginOnMessage: (message: (event: EventsFromPluginToUi) => void) => void;
};

const pluginOnMessagePrototype: PluginOnMessage = {
	onMessages: [],
	addPluginOnMessage: () => {},
};

export const PluginOnMessageContext = createContext<PluginOnMessage>(pluginOnMessagePrototype);

export const PluginOnMessageProvider: FC<PropsWithChildren> = ({ children }) => {
	const [onMessages, setOnMessages] = useState<PluginOnMessage["onMessages"]>(pluginOnMessagePrototype.onMessages);

	const addPluginOnMessage = (onMessage: (event: EventsFromPluginToUi) => void) => {
		setOnMessages((oldMessages) => [...oldMessages, onMessage]);
	};

	useEffect(() => {
		window.onmessage = (event: EventsFromPluginToUi) => {
			// biome-ignore lint/complexity/noForEach: <explanation>
			onMessages.forEach((onMessage) => {
				onMessage(event);
			});
		};
	}, [onMessages.length]);

	useEffect(() => {
		return () => {
			window.onmessage = null;
		};
	}, []);

	return (
		<PluginOnMessageContext.Provider
			value={{
				onMessages,
				addPluginOnMessage,
			}}
		>
			{children}
		</PluginOnMessageContext.Provider>
	);
};

export const usePluginOnMessage = () => {
	const context = useContext(PluginOnMessageContext);
	if (context === null) {
		throw new Error("usePluginOnMessage must be used within a PluginOnMessageProvider");
	}

	return context;
};
