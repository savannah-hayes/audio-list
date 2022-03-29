import React, { useState, useEffect } from 'react'

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=112024")
      .then(res => res.json())
      .then(data => setAlbums(data.album))
  }, [])


  return (
    <div>
      {albums.map(album => (
        <div>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum}></img>
          <h2>{album.strAlbum}</h2>
          <h3>{album.strArtist}</h3>
        </div>
      ))}
    </div>
  )
}

export default AlbumList;