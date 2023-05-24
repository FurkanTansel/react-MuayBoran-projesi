import React, { useState } from "react";
import Page from "./page";

function App() {
  const [activeLink, setActiveLink] = useState(0);

  const Links = [
    { name: "Gard Alma", link: "https://www.youtube.com/embed/crAqfj9mfHU" },
    { name: "Yumruklar", link: "https://www.youtube.com/embed/NmHUCtvxCDk" },
    { name: "Tekmeler", link: "https://www.youtube.com/embed/WGAcQIazR_k" },
    { name: "Dirsekler", link: "https://www.youtube.com/embed/ouDc9hCHrBs" },
    { name: "Dizler", link: "https://www.youtube.com/embed/prf7FQyOkzY" },
  ];

  return (
    <div className="App">
      <button
        onClick={() => {
          setActiveLink(activeLink + 1);
        }}
      >
        Geç
      </button>
      <Page activeLink={activeLink} />
    </div>
  );
}

export default App;
