import { useRef, useState } from "react";
import TextInput from "./components/TextInput";
import WrapperPage from "./pages/WrapperPage";
import AppButton from "./components/AppButton";
import CanvaWrapper from "./components/CanvaWrapper";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import apiEndpoint from "./api/apiEndpoint";

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
      const clonedItem = item.cloneNode(true);
      clonedItem.style.width = "1080px";
      clonedItem.style.height = "1080px";
      container.appendChild(clonedItem);
    });

    const options = {
      filename: "carousel.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: [1080, 1080], orientation: "portrait" },
    };

    html2pdf().set(options).from(container).save();
  };

  const getArticle = () => {

    setIsLoading(true);

    fetch(`${apiEndpoint}?` + new URLSearchParams({ article_url: url , number_of_points: numberOfSlide?.current.value }), {})
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data.response.response);
      })
      .catch((error) => console.error(error));
  };

  return (


    <WrapperPage>


      <div className="flex justift-center align-middle gap-8 mb-10 mt-10">
        <TextInput required label={"Url"} value={url} onChange={(event)=>setUrl(event.target.value)} />
        <TextInput label={"Number Of Slides"} inputRef={numberOfSlide} type={"number"} />
        <AppButton name={"Generate"} onClick={() => getArticle()} disabled={url.length === 0}/>
      </div>


      <CanvaWrapper isLoading={isLoading} data={data} />

      <AppButton name={"download"} onClick={() => downloadPdf()} />

      
    </WrapperPage>
  );
}

export default App;
