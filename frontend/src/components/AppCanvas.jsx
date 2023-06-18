import React, { useEffect, useRef } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

const CANVAS_WIDTH = window.innerWidth < 600 ? window.innerWidth.toString() : "480" 
const TEXT_WIDTH = parseInt(CANVAS_WIDTH)-20;
const TOP_POSITION = 100
const SCALE = TEXT_WIDTH /1000
const DEFAULT_LEFT = 100

const textStyleChanged = (originalTextRef, newStyle)=>{
  if (originalTextRef.fill != newStyle?.fill || originalTextRef.fontSize != newStyle?.fontSize || originalTextRef.fontFamily != newStyle?.fontFamily){
    return true
  }
  else return false
}

function AppCanvas({ selectedImage, addedText, textStyle }) {
  const { editor, onReady } = useFabricJSEditor();
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {

    
    const addImage=()=>{
   
      fabric.util.loadImage(selectedImage, (img) => {
        // Ensure the previous image has been removed from the canvas
        editor.canvas.remove(imageRef.current);

        const image = new fabric.Image(img);

        imageRef.current = image

        image.scaleToWidth(CANVAS_WIDTH);
        image.set({
          evented: false,
          selectable: false,
          lockMovement: true,
          lockScaling: true,
        });
    
        editor?.canvas.add(image);
        editor.canvas.sendBackwards(image)
        
        editor.canvas.requestRenderAll()

    });
  }


    const addText = () => {
        const text = new fabric.Textbox(addedText, {
          ...textStyle,
          width: TEXT_WIDTH,
          textWrapping: "char",
          top:TOP_POSITION,
          left:textStyle.left * SCALE || DEFAULT_LEFT
        });
        textRef.current = text;
        editor.canvas.add(text);
    };

    if (editor && !textRef.current) {
      addText();
    } 
    else if (editor && textRef.current && textStyleChanged(textRef.current, textStyle)) {
      editor.canvas.remove(textRef.current);
      addText();
    }

    if (editor  && !imageRef.current?._element ) {
       addImage()
    } 
    else if(editor && imageRef.current && imageRef.current._element != selectedImage ){
      editor.canvas.remove(imageRef.current);
      addImage()
    }

    if (editor){
      editor.canvas.setDimensions({
        width: CANVAS_WIDTH,
        height: CANVAS_WIDTH,
      });
    }

    
  }, [editor, textRef, imageRef]);

  return (
    <div
      id="canvas"
      style={{
        width: "30rem",
        height: "30rem",
        position: "relative",
        position: "relative",
        margin: "auto",
        overflow: "hidden",
      }}
    >

      <FabricJSCanvas id={"testcanvas"} className="text" onReady={onReady} />
    </div>
  );
}

export default AppCanvas;

