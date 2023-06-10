import { useRef, useState } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.min";


import TextInput from "./components/TextInput";
import WrapperPage from "./pages/WrapperPage";
import AppButton from "./components/AppButton";
import CanvaWrapper from "./components/CanvaWrapper";
import apiEndpoint from "./api/apiEndpoint";

const CANVAS_WIDTH = "1080px"

function App() {
  const [url, setUrl] = useState("");
  const numberOfSlide = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const downloadPdf = () => {
    let element = document.querySelectorAll("#canvas");

    const container = document.createElement("div");

    element.forEach((item) => {

      // refernce the original canvas
      const originalCanvasLower =  item.querySelector(".lower-canvas")
      const originalCanvasUpper =  item.querySelector(".upper-canvas")

      // create a new element
      const clonedElement = document.createElement("div");
      
      //Copy the origianl element 
      clonedElement.innerHTML = item.innerHTML;

      //Select the cloned canvas 
      const clonedCanvasLower = clonedElement.querySelector(".lower-canvas")
      const clonedCanvasUpper = clonedElement.querySelector(".upper-canvas")

      
      const clonedCanvasContextLower = clonedCanvasLower.getContext("2d");
      const clonedCanvasContextUpper = clonedCanvasUpper.getContext("2d");

      // cloned canvas draws the contents of the original canvas 
      clonedCanvasContextLower.drawImage(originalCanvasLower, 0, 0);
      clonedCanvasContextUpper.drawImage(originalCanvasUpper, 0, 0);
      
      clonedCanvasLower.style.position = "relative";
      clonedCanvasLower.style.width = CANVAS_WIDTH
      clonedCanvasLower.style.height = CANVAS_WIDTH

      clonedCanvasUpper.style.position = "relative";
      clonedCanvasUpper.style.width = CANVAS_WIDTH
      clonedCanvasUpper.style.height = CANVAS_WIDTH

      clonedElement.style.width = CANVAS_WIDTH
      clonedElement.style.height = CANVAS_WIDTH

      container.appendChild(clonedElement);  
    });

    const options = {
      filename: "carousel.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale:2},
      jsPDF: { unit: "px", format: [1080, 1080], orientation: "portrait" },
    };


    html2pdf().set(options).from(container).save();
  };

  const getArticle = () => {

    setIsLoading(true);
    setIsError(false)

    

    fetch(`${apiEndpoint}?` + new URLSearchParams({ article_url: url , number_of_points: numberOfSlide?.current.value }), {})
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data.response.response);
      })
      .catch((error) => {
        setIsError(true)
      });
  };

  return (


    <WrapperPage>


      <div className="flex flex-col justify-center align-middle  gap-4 mb-12 mt-10 w-full  items-center  lg:gap-8 lg:w-1/3" >
      <h1>dsgasdgsgd</h1>
        <TextInput sx={{width:"70%"}} required label={"Url"} value={url} onChange={(event)=>setUrl(event.target.value)} />
        <TextInput sx={{width:"70%"}} label={"Number Of Slides"} inputRef={numberOfSlide} type={"number"} />
        <AppButton  sx={{width:"70%"}} name={"Generate"} onClick={() => getArticle()} disabled={url.length === 0}/>
      </div>

      <div className="lg:gap-8 flex flex-col items-center">

      <CanvaWrapper isLoading={isLoading} data={data} isError={isError} />
      <AppButton name={"download"} onClick={() => downloadPdf()} />
    </div>

      
    </WrapperPage>
  );
}

export default App;