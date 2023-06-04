import React from "react";

function AppCanvas({ selectedImage, addedText , textStyle}) {

  return (
    <div id="canvas"  style={{ width:"30rem",height:"30rem",position: "relative", position:"relative", margin:"auto", overflow:"hidden"}}>
      {selectedImage ? (
        <img src={selectedImage} style={{ position: "absolute", maxWidth:"100%", maxHeight:"100%" }} />
      ) : (
        <div className="h-full bg-white" style={{width:"30rem"}}></div>
      )}

      {addedText && <p style={{ position: "absolute", ...textStyle }}>{addedText}</p>}
    </div>
  );
}

export default AppCanvas;
