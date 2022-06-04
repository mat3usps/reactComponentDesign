function Session({ title, room }) {
    return (
        <span className="session w-100">
            {title}
            <strong>Room: {room.name}</strong>
        </span>
    );
}

function Sessions({ sessions }) {
    return (
        <div className="session-box card h-250" style={{ padding: "10px" }}>
            <Session {...sessions[0]} />
        </div>
    );
}

function SpeakerImage({ id, first, last }) {
    return (
        <div className="speaker-img d-flex flex-column justify-content-center align-items-center">
            <img className="contain-fit" src={`/images/speaker-${id}.jpg`} width="300" alt={`${first}${last}`} />
        </div>
    );
}

function SpeakerFavorite({ favorite, onFavoriteToogle }) {
    return (
        <div className="action padB1">
            <span onClick={onFavoriteToogle}>
                <i className={favorite ? "fa fa-star orange" : "fa fa-star-o orange"} />
                {"  "}Favorite {"  "}
            </span>
        </div>
    );
}

function SpeakerDemographics({ onFavoriteToogle, favorite, bio, first, last, twitterHandle, company }) {
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="textruncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite favorite={favorite} onFavoriteToogle={onFavoriteToogle} />
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Speaker({ speaker, showSessions, onFavoriteToogle }) {
    const { id, first, last, sessions } = speaker;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4" style={{ height: "50 0px" }}>
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker} onFavoriteToogle={onFavoriteToogle} />
            </div>
            {showSessions ? <Sessions sessions={sessions} /> : <></>}
        </div>
    );
}
