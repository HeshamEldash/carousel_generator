// import { createContext, useRef, useState } from 'react';

// const itemData = [
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },  
//     {
//       img: testImage,
//     },
//     {
//       img: testImage2,
//     },
//   ];

// export const CanvaContext = createContext();


// export default function CanvasContextProvider() {


//   const canvasRef = useRef(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleDraw = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     context.clearRect(0, 0, canvas.width, canvas.height);

//     const image = document.createElement("img");
//     image.src = selectedImage;
//     console.log("image drawn");
//     context.drawImage(image, 0, 0);
//   };

//     return (
//         <CanvaContext.Provider value={contextData}>
//           {props.children}
//         </CanvaContext.Provider>
//       );
// }

