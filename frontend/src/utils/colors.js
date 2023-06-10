import chroma from 'chroma-js';

const getComplementaryColor = (color) => {
  
const chromaObj = chroma(color)
  
const red = chromaObj.get("rgb.r");
const green = chromaObj.get("rgb.g");
const blue = chromaObj.get("rgb.b");

const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

const contrastingColor = brightness > 127 ? 'black' : 'white';

return contrastingColor
};




export {getComplementaryColor}