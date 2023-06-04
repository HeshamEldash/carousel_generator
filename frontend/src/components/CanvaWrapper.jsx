import React, { useState } from "react";
import AppCanvas from "./AppCanvas";
import AppImageList from "./AppImageList";
import AppCarousel from "./AppCarousel";

function CanvaWrapper({ isLoading, data }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
 
  return (
    <>
      <div className="w-1/2 flex justify-center" style={{height:"40rem",}}>
        {isLoading ? (
          <h2 className="mt-1rem">Loading....</h2>
        ) : (
          <AppCarousel>
          

            {data?
              [
              <AppCanvas
                selectedImage={selectedTemplate?.start}
                addedText={data?.title}
                textStyle={selectedTemplate?.textStyle}
              />,

              ...data?.middle_points?.map((point, index) => (
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
            ]:
            <AppCanvas
                selectedImage={selectedTemplate?.start}
                addedText={"This is how the text will look like!"}
                textStyle={selectedTemplate?.textStyle}
              />
        
             }


          </AppCarousel>
        )}
      </div>

      <AppImageList selectImage={setSelectedTemplate} />
    </>
  );
}

export default CanvaWrapper;
