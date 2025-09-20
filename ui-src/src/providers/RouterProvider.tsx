import {HomePage} from "@ui-src/src/app/home/HomePage";
import {
    createContext,
    type Dispatch,
    type FC,
    type PropsWithChildren,
    type ReactNode,
    type SetStateAction,
    useContext,
    useState,
} from "react";

export type Router = {
	pathname: "home";
	setPathname: Dispatch<SetStateAction<Router["pathname"]>>;
	page: ReactNode;
};

const routerPrototype: Router = {
	pathname: "home",
	setPathname: () => {},
	page: <></>,
};

export const RouterContext = createContext<Router>(routerPrototype);

const routing: Record<Router["pathname"], FC> = {
	home: HomePage,
};

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
	const [pathname, setPathname] = useState<Router["pathname"]>(routerPrototype.pathname);

	const Page = routing[pathname];
	return (
		<RouterContext.Provider
			value={{
				pathname,
				setPathname,
				page: <Page />,
			}}
		>
			{children}
		</RouterContext.Provider>
	);
};

export const useRouter = () => {
	const context = useContext(RouterContext);
	if (context === null) {
		throw new Error("useRouter must be used within a RouterProvider");
	}

	return context;
};
