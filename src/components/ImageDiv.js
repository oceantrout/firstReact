import "./ImageDiv.css";
import { useState } from "react";

function ImageDiv() {
  const srcImanage = {
    imagelocation: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1592409065737-a253f2900fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    ],
    altText: [
      "london",
      "Amsterdam",
      "Sydney",
      "Tokyo",
      "Dalas",
      "Paris",
      "Athens",
      "dubai",
    ],
  };

  const [bigSRC, setSRC] = useState(
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
  );

  function likeBtnClicked(event) {
    const element = event.currentTarget;
    var newSrc = element.src;
    setSRC(newSrc);
    console.log(bigSRC);
  }
  return (
    <div id="thumbnails">
      <img
        className="thumb"
        src={srcImanage.imagelocation[0]}
        alt={srcImanage.altText[0]}
        onClick={likeBtnClicked}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[1]}
        alt={srcImanage.altText[1]}
        onClick={likeBtnClicked}
        // onClick={changeSRC(srcImanage.imagelocation[1])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[2]}
        alt={srcImanage.altText[2]}
        onClick={likeBtnClicked}

        // onClick={changeSRC(srcImanage.imagelocation[2])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[3]}
        alt={srcImanage.altText[3]}
        onClick={likeBtnClicked}

        //  onClick={changeSRC(srcImanage.imagelocation[3])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[4]}
        alt={srcImanage.altText[4]}
        onClick={likeBtnClicked}

        // onClick={changeSRC(srcImanage.imagelocation[4])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[5]}
        alt={srcImanage.altText[5]}
        onClick={likeBtnClicked}

        // onClick={changeSRC(srcImanage.imagelocation[5])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[6]}
        alt={srcImanage.altText[6]}
        onClick={likeBtnClicked}

        // onClick={changeSRC(srcImanage.imagelocation[6])}
      />
      <img
        className="thumb"
        src={srcImanage.imagelocation[7]}
        alt={srcImanage.altText[7]}
        onClick={likeBtnClicked}

        // onClick={changeSRC(srcImanage.imagelocation[7])}
      />
      <img id="bigimage" src={bigSRC} alt="bigimage" />
    </div>
  );
}

export default ImageDiv;
