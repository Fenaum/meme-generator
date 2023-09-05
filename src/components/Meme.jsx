import { useState, useEffect } from "react";

export default function Meme(prop) {
    let [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    );

    const [allMemes, setAllMemes] = useState({});
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (!res.ok) {
          throw new error("Network response was not ok");
        }
        return res.json();
      })
      .then((memeData) => setAllMemes(memeData))
      .catch((error) => {
        console.log("error fetching datta:", error)
      })
    }, []);
    
    function getImg() {
        const randomIndex = Math.floor(Math.random() * allMemes.data.memes.length);
        const randomMemeImg = allMemes.data.memes[randomIndex].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: randomMemeImg
        }));
    };

    function handleChange(event) {
        const {value, name} = event.target;
        setMeme((prevMeme) => (
            {
                ...prevMeme,
                [name]: value
            }
        ));
    }

    return (
      <main className="meme-generator">
        <div className="meme-inputs">
          <input
            className="meme-input"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input
            className="meme-input"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
          <button onClick={getImg} className="meme-button">
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img className="memeImg" src={meme.randomImg}></img>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    );
};