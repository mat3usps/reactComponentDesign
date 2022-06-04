import { useState } from "react";

import Header from "./Header";
import Speakers from "./Speakers";

export default function App() {
    const [theme, setTheme] = useState("light");
    return (
        <div className={theme === "light" ? "light container-fluid" : "dark container-fluid"}>
            <Header theme={theme} />
            <Speakers theme={theme} setTheme={setTheme} />
        </div>
    );
}
