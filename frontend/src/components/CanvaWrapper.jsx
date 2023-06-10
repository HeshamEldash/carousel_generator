import React, { useState } from "react";
import AppCanvas from "./AppCanvas";
import AppImageList from "./AppImageList";
import AppCarousel from "./AppCarousel";

function CanvaWrapper({ isLoading, data, isError}) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
 

  if (isError) return <div style={{height:"40rem"}} className="w-1/2 flex justify-center" ><h2 className="mt-1rem text-2xl">Sorry an error has occured.... Please try again!  </h2></div>

  if(isLoading) return <div  style={{height:"40rem"}} className="w-1/2 flex justify-center "><h2 className="mt-1rem text-2xl">Loading....  </h2></div>

  return (
    <>
      <div className="w-full flex justify-center">
          <AppCarousel>
            {data?
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
            ]:
            <AppCanvas
                selectedImage={selectedTemplate?.start}
                addedText={"This is how the text will look like!"}
                textStyle={selectedTemplate?.textStyle}
              />
        
             }


          </AppCarousel>
      </div>

      <AppImageList selectImage={setSelectedTemplate} />
    </>
  );
}

export default CanvaWrapper;
