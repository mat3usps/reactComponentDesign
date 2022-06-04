import { useState } from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

export default function SpeakersList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToogle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakersRecUpdate = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        };
        const speakerDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakersRecUpdate : rec;
        });

        console.log("🚀 ~ onFavoriteToogle ~ ", speakersRecUpdate);
        setSpeakersData(speakerDataNew);
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker
                            showSessions={showSessions}
                            onFavoriteToogle={() => {
                                onFavoriteToogle(speaker.id);
                            }}
                            speaker={speaker}
                            key={speaker.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
