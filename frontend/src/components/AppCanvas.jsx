import React, { useEffect, useRef } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function AppCanvas({ selectedImage, addedText , textStyle}) {
  const { editor, onReady } = useFabricJSEditor();

  const textRef= useRef()


  useEffect(()=>{
    const addText = ()=>{
      const text = new fabric.Text("addedText")
      textRef.current = text    
      editor.canvas.add(text)
      editor.canvas.setDimensions({width:"100%", height:"100%"})
  }
    if (editor && !textRef.current ){
      addText()
    }


  },[editor,textRef])

  return (
    <div id="canvas"  style={{ width:"30rem",height:"30rem",position: "relative", position:"relative", margin:"auto", overflow:"hidden"}}>
      {selectedImage ? (
        <img src={selectedImage} style={{ position: "absolute", maxWidth:"100%", maxHeight:"100%" }} />
      ) : (
        <div className="h-full bg-white" style={{width:"30rem"}}></div>
      )}

      {addedText && <p style={{ position: "absolute", ...textStyle }}>{addedText}</p>}

      <FabricJSCanvas id={"testcanvas"} className="text" onReady={onReady} />
   
    </div>
  );
}

export default AppCanvas;
