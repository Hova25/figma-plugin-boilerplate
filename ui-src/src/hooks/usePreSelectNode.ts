import { postEventFromUiToPlugin } from "@ui-src/src/utils/utils";

export const usePreSelectNode = (nodeId: string) => {
	const onMouseEnter = () => postEventFromUiToPlugin({ key: "mouseEnterNode", nodeId });
	const onMouseLeave = () => {
		postEventFromUiToPlugin({ key: "mouseLeaveNode", nodeId });
	};

	return { onMouseEnter, onMouseLeave };
};
