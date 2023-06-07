import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { SketchPicker } from "react-color";

import templates from "../utils/templates";

function AppImageList({ selectImage: selectedTemplate }) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleChange = (color) => {
    setSelectedColor(color.hex);

  };

  const  setTemplate = (color)=>{
    console.log(color)
    const canvas = document.createElement("canvas");
    const width = 1080;
    const height = 1080;
    const backgroundColor = color.hex; // Hex color code for white
    canvas.width = width;
    canvas.height = height;

    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext("2d");

    // Set the background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const image = new Image();
    image.src = canvas.toDataURL();

    const template =   
      {
        start: image.src,
        middle:image.src,
        end:image.src,
        textStyle:{
          position: "absolute",
          fontSize: "2em",
          color: "white",
          top: "25%",
          lineBreak: "auto",
          left: "10px",
          fontFamily: "cursive",
        }
      }

    selectedTemplate(template);
  }

  return (
    <div
      style={{
        backgroundColor: "red",
        maxWidth: "50%",
        height: "100px",
        minWidth: "50px",
        marginBottom: "5rem",
        overflow: "auto",
        display: "flex",
      }}
    >
      {/* <div
        style={{
          backgroundColor: selectedColor,
          width: "120px",
          height: "100px",
        }}
        onClick={handleClick}
      >
        {showPicker && (
          <div style={{ position: "absolute", marginLeft: "-15rem" }}>
            <SketchPicker color={selectedColor} onChange={handleChange}  onChangeComplete={(color)=>setTemplate(color)}/>{" "}
          </div>
        )}
      </div> */}

      {templates.map((item, index) => (
        <ImageListItem key={index} onClick={() => selectedTemplate(item)}>
          <img
            src={`${item.start}?w=164&h=164fit=crop&auto=format`}
            srcSet={`${item.start}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </div>
  );

  return (
    <ImageList
      sx={{ maxWidth: "70rem", height: 100 }}
      cols={templates.length}
      rowHeight={120}
    >
      {templates.map((item, index) => (
        <ImageListItem
          key={index}
          style={{ width: 100, height: 10 }}
          onClick={() => selectedTemplate(item)}
        >
          <img
            src={`${item.start}?w=164&h=164fit=crop&auto=format`}
            srcSet={`${item.start}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default AppImageList;
