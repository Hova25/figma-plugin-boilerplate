export function getNodesByType<T extends BaseNode>(node: BaseNode, type: T["type"]): T[] {
	let filteredNodes: T[] = [];
	if (node.type === type) {
		filteredNodes.push(node as T);
	}
	if ("children" in node) {
		for (const child of node.children) {
			filteredNodes = filteredNodes.concat(getNodesByType<T>(child, type));
		}
	}
	return filteredNodes;
}

export function getNodesByWithoutTypes(node: BaseNode, types: BaseNode["type"][]): BaseNode[] {
	let filteredNodes: BaseNode[] = [];
	if (types.includes(node.type)) {
		return filteredNodes;
	}

	if (node.type !== "PAGE") {
		filteredNodes.push(node);
	}
	if ("children" in node) {
		for (const child of node.children) {
			filteredNodes = filteredNodes.concat(getNodesByWithoutTypes(child, types));
		}
	}
	return filteredNodes;
}

export const isValidNode = (node: BaseNode): boolean => ["COMPONENT", "COMPONENT_SET"].includes(node.type) && "description" in node;

export const getNodeById = (nodeId: string) => figma.currentPage.findOne((node) => node.id === nodeId);
export const getNodesById = (nodeIds: string[]) => figma.currentPage.findAll((node) => nodeIds.includes(node.id));
