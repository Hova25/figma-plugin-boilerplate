import {useRouter} from "@ui-src/src/providers/RouterProvider";

export const AppEntrypoint = () => {
    const {page} = useRouter();
    return (
        <main className="flex flex-col">
            <div className="flex-1">{page}</div>
        </main>
    );
};
