import React, { useState, useEffect } from 'react';

function Searchbar() {

  const [searchQuery, setSearchQuery] = useState([]);
  const [songs, setSongs] = useState([]);

  const handleSearch = (e) => {
    let inputdata = (e.target.value).toLowerCase();
    setSearchQuery(inputdata);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a song" style={{height: '35px', flexShrink: '4',width: '30vw', borderRadius: '35px', background: 'gray', padding: '10px', border: 'none'}} onChange={handleSearch} />
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default Searchbar;
