import { Button, type ButtonProps } from "@ui-src/src/app/_components/ui/Button";
import { IconButton } from "@ui-src/src/app/_components/ui/IconButton";
import { Separator } from "@ui-src/src/app/_components/ui/Separator";
import { useRouter } from "@ui-src/src/providers/RouterProvider";
import type { FC } from "react";

export type PluginFooterProps = {
	showBackButton?: boolean;
	principalButtonProps: ButtonProps;
};

export const PluginFooter: FC<PluginFooterProps> = ({ showBackButton, principalButtonProps }) => {
	const { setPathname } = useRouter();
	return (
		<div>
			<Separator />
			<div className="flex flex-row gap-x-2 px-4 py-3">
				{showBackButton && <IconButton onClick={() => setPathname("home")} variant="secondary" icon="chevronLeft" />}

				<Button className="flex-1" {...principalButtonProps} />
			</div>
		</div>
	);
};
