import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ArtistDetail = () => {
  const { albumId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/2/album.php?m=${albumId}`)
      .then(res => res.json())
      .then(data => setAlbums(data.album[0]))
  }, [])

  return (
    <div>
      {albums && (
        <div key={albums.idAlbum}>
          <img src={`${albums.strAlbumThumb}/preview`} alt={albums.strAlbum} />
          <h1>{albums.strAlbum}</h1>
          <h3>Released: {albums.intYearReleased}</h3>
          <h3>Genre: {albums.strGenre}</h3>
        </div>
      )}
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default ArtistDetail