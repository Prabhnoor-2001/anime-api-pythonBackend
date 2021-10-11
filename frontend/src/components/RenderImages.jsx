import React from "react";

function RenderImages(props) {
  let list = [];
  for (const [key, value] of Object.entries(props.listOfAnime)) {
    list.push({ name: key, image_url: value });
  }

  return (
    <div className="imageContainer">
      {list.map((anime) => {
        console.log(anime);
        return (
          <div key={anime.name}>
            <figure>
              <a href={anime.image_url}>
                <img src={anime.image_url}></img>
              </a>
              <figcaption>{anime.name}</figcaption>
            </figure>
          </div>
          // <li key={anime.mal_id}>{anime.image_url}</li>
        );
      })}
    </div>
  );
}
export default RenderImages;
