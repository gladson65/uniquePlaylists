import { useState } from "react";


// unique playlist function (subsets II)
function uniquePlaylists(songs) {
    // sort songs array first
    songs.sort((a, b) => a - b);
    let playlists = [];

    // backtracking helper function
    function backtrack(start, current) {
        playlists.push([...current]);

        for (let i = start; i < songs.length; i++) {
            if (i > start && songs[i] === songs[i - 1]) continue;
            current.push(songs[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return playlists
}

// playlistGenerator function
function playlistGenerator() {
    const [ input, setInput ] = useState("");
    const [ playlists, setPlaylists ] = useState([]);

    // handle playlists generator
    function handleGenerator() {
        let songs = input.split(",").map((song) => song.trim()).filter(Boolean);
        let result =  uniquePlaylists(songs);
        setPlaylists(result);
    }


    return (
        <>
            <div className="header-section">
                <h1>Unique Playlists Generator</h1>
                <p>Enter song names separated by commas</p>

                {/* input and the button div */}
                <div className="inputButton">
                    <input 
                        type="text"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        placeholder="Shape of you, Blinding lights, Shape of you"
                    />

                    <button onClick={handleGenerator}>
                        Generate Playlists
                    </button>
                </div>              
            </div>

            {/* display playlists */}
            <div className="displayPlaylists">
                {
                    playlists.length > 0 ?
                    <>
                        {
                            playlists.map((playlist, i) => {
                                return (
                                    <div key={i}>
                                        {
                                            playlist.length > 0 ? playlist.join("🎵") : "🎵 Empty playlist" 
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                    <>
                    
                    </>
                }
            </div>


        </>
    )
}