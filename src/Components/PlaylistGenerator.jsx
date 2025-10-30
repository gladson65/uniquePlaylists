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

    return (
        <>
        
        </>
    )
}