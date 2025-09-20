import {CONFIG} from "@plugin-src/config";
import {hexToRgb} from "@plugin-src/utils";

export const cleanAllHighlights = () => {
	if (figma.currentPage) {
		for (const n of figma.currentPage.findAll((node) => node.name === CONFIG.highlightNodeName)) {
			n.remove();
		}
	}
};

export const cleanHighlight = () => {
	if (highlightedNode) {
		highlightedNode.remove();
	}
};

let highlightedNode: RectangleNode | undefined = undefined;

export const highlightNode = (nodeId: string) => {
	cleanAllHighlights();
	const node = figma.currentPage.findOne((n) => n.id === nodeId);
	if (!node || !("absoluteBoundingBox" in node) || !node.absoluteBoundingBox) return;

	const { x, y, width, height } = node.absoluteBoundingBox;

	const highlight = figma.createRectangle();
	highlight.x = x;
	highlight.y = y;
	highlight.resize(width, height);

	highlight.fills = [];
	highlight.strokes = [{ type: "SOLID", color: hexToRgb("#8a38f5") }];
	highlight.strokeWeight = 2;

	highlight.name = CONFIG.highlightNodeName;
	figma.currentPage.appendChild(highlight);
	highlightedNode = highlight;
};
