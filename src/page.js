import React from "react";
import HomePage from "./HomePage";
import JsonData from "./data.json";

function Page({ activeLink }) {
  if (activeLink === 0) {
    return <HomePage />;
  } else {
    const link = [
      { name: "Gard Alma", link: "https://www.youtube.com/embed/crAqfj9mfHU" },
      { name: "Yumruklar", link: "https://www.youtube.com/embed/NmHUCtvxCDk" },
      { name: "Tekmeler", link: "https://www.youtube.com/embed/WGAcQIazR_k" },
      { name: "Dirsekler", link: "https://www.youtube.com/embed/ouDc9hCHrBs" },
      { name: "Dizler", link: "https://www.youtube.com/embed/ouDc9hCHrBs" },
    ][activeLink - 1];
    const data = JsonData[activeLink];

    return (
      <div>
        <p>{data.title}</p>
        <iframe title={link.name} src={link.link} allowFullScreen></iframe>
        <iframe
          width="560"
          height="315"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Page;
