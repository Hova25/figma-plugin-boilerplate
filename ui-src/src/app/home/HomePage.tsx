import type {EventsFromPluginToUi} from "@shared/eventsFromPluginToUi.types";
import {PluginLayout} from "@ui-src/src/app/_components/PluginLayout";
import {Typography} from "@ui-src/src/app/_components/ui/Typography";
import {usePluginOnMessage} from "@ui-src/src/providers/PluginOnMessageProvider";
import {postEventFromUiToPlugin} from "@ui-src/src/utils/utils";
import {useEffect} from "react";
import {Button} from "@ui-src/src/app/_components/ui/Button";

export const HomePage = () => {
    const {addPluginOnMessage} = usePluginOnMessage();

    useEffect(() => {
        addPluginOnMessage((event: EventsFromPluginToUi) => {
            const {data, key} = event.data.pluginMessage;
            switch (key) {
                case "pong":
                    console.log("pong :", data);
                    break;
            }
        });
    }, []);

    return (
        <PluginLayout
            pluginFooterProps={{
                principalButtonProps: {
                    text: "Hey click me!",
                    onClick: () => postEventFromUiToPlugin({key: "notify", message: "Helloo !"}),
                },
            }}
        >
            <div className="flex flex-col gap-2 px-4 pt-4">
                <Typography>Hello, you are in the figma boilerplate in React et Typescript</Typography>
                <Typography>Communicate with backend with `postEventFromUiToPlugin` function</Typography>
                <Typography>Listen backend event with `usePluginOnMessage()` addPluginOnMessage</Typography>
                <Button text={"Ping"} onClick={() => postEventFromUiToPlugin({key: "ping"})}/>
            </div>
        </PluginLayout>
    );
};
