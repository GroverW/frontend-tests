import React from 'react';
import './GifList.css';

export default function GifList({ gifs }) {
  console.log(gifs);
  return (
    <div className="GifList">
      <div className="container">
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.media[0].gif.url}
            alt={gif.title}
          />
        ))}
      </div>
    </div>
  )
}