import React from 'react'


function GifList({ gifs }) {
console.log("these gifs", gifs)
  const showGif = () => {
    return gifs.map((gif, idx) => {
      return(
        <li
          key={idx}
          className="gifs-list"
          ><img src={gif.embed_url} alt=""/>
        </li>
      )
    })
  }

  return(
    <div>
      <ul>
        {showGif()}
      </ul>
    </div>
  )
}

export default GifList
