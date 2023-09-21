import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <GlobalStyle/>
		<App/>
	</React.StrictMode>
);
