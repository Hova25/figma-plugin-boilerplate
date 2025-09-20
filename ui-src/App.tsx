import "./App.css";
import { AppEntrypoint } from "@ui-src/src/app/AppEntrypoint";
import { Providers } from "@ui-src/src/providers/Providers";

function App() {
	return (
		<Providers>
			<AppEntrypoint />
		</Providers>
	);
}

export default App;
