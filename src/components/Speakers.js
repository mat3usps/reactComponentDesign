import { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakerToolbar from "./SpeakerToolbar";

export default function Speakers({ theme, setTheme }) {
    const [showSessions, setShowSession] = useState(true);
    return (
        <>
            <SpeakerToolbar
                theme={theme}
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSession={setShowSession}
            />
            <SpeakersList showSessions={showSessions} setShowSession={setShowSession} />
        </>
    );
}
