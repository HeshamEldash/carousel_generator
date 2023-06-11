import React, { useState, useEffect } from "react";

import AppCanvas from "./AppCanvas";
import AppImageList from "./AppImageList";
import AppCarousel from "./AppCarousel";
import templates from "../utils/templates";

function CanvaWrapper({ isLoading, data, isError, uploadedtemplate }) {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  useEffect(() => {
   
    const file = uploadedtemplate[0]?.file;
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataURL = event.target.result;

        const template = {
          start: dataURL,
          middle: dataURL,
          end: dataURL,
          textStyle: {
            fontSize: "20",
            fill: "white",
            lineBreak: "auto",
            fontFamily: "cursive",
            top: 100,
            left: 40,
          },
        };

        setSelectedTemplate(template);
      };
      reader.readAsDataURL(file);

    }

  }, [uploadedtemplate]);


  if (isError)
    return (
      <div style={{ height: "40rem" }} className="w-1/2 flex justify-center">
        <h2 className="mt-1rem text-2xl">
          Sorry an error has occured.... Please try again!{" "}
        </h2>
      </div>
    );

  if (isLoading)
    return (
      <div style={{ height: "40rem" }} className="w-1/2 flex justify-center ">
        <h2 className="mt-1rem text-2xl">Loading.... </h2>
      </div>
    );



  return (
    <>
      <div className="w-full flex justify-center">
        <AppCarousel>
          {data ? (
            [
              <AppCanvas
                selectedImage={selectedTemplate?.start}
                addedText={data?.title}
                textStyle={selectedTemplate?.textStyle}
              />,

              ...data?.middle_points?.map((point) => (
                <AppCanvas
                  key={point}
                  selectedImage={selectedTemplate?.middle}
                  addedText={point}
                  textStyle={selectedTemplate?.textStyle}
                />
              )),

              <AppCanvas
                selectedImage={selectedTemplate?.end}
                addedText={data?.summary}
                textStyle={selectedTemplate?.textStyle}
              />,
            ]
          ) : (
            <AppCanvas
              selectedImage={selectedTemplate?.start}
              addedText={"This is how the text will look like!"}
              textStyle={selectedTemplate?.textStyle}
            />
          )}
        </AppCarousel>
      </div>

      <AppImageList selectImage={setSelectedTemplate} />
    </>
  );
}

export default CanvaWrapper;
