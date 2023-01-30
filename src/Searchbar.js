import { useState } from "react";
import PhotoCard from "./PhotoCard";
import "./Searchbar.css";
   export default function Searchbar() {
    const [searchInput, setSearchInput] = useState("");
    const [photosData, setPhotosData] = useState([]);
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchInput);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=940ac2844e1ede61da8609351cd8036f&tags=${searchInput}&per_page=12&format=json&nojsoncallback=1`;
    fetch(url)
      .then((response) => response.json())
        .then((data) => {
            setPhotosData(data.photos.photo);
            console.log(data)
        });
  };

  const handleInput = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
    };
    
      const photos = photosData.map((photo) => {
        const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
        return (
          <PhotoCard url={imageUrl} title={ photo.title} />
        );
     });

       return (
         <>
           <form className="search-bar-form" onSubmit={handleSubmit}>
             <input
               className="search-bar-input"
               onChange={handleInput}
               type="text"
               placeholder="Search Anything..."
             ></input>
             <button className="submit-button" type="submit">
               Go!
             </button>
           </form>
           <h1 className="search-results-text">{`Photo Results for ${searchInput} ...`} </h1>
           <div className="photo-container">
             { photos}
           </div>
         </>
       )
     }