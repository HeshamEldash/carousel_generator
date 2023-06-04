import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import templates from "../utils/templates";


function AppImageList({ selectImage: selectedTemplate}) {
  return (
    <ImageList
      sx={{ maxWidth: "70rem", height: 100 }}
      cols={templates.length}
      rowHeight={120}

    >
      {templates.map((item,index) => (
        <ImageListItem
          key={index}
          style={{ width: 100, height: 10 }}
          onClick={()=>selectedTemplate(item)}
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
