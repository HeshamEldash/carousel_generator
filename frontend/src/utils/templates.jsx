import testImage from "../../public/testimage.jpg";
import {a,b,c} from "../assets/template_1/template1.js"
import {a2,b2,c2} from "../assets/template_2/template2.js"



export default [
    // {
    //   start: null,
    //   middle:testImage,
    //   end:testImage,
    //   textStyle:{
    //     position: "absolute",
    //     fontSize: "2em",
    //     color: "white",
    //     top: "25%",
    //     lineBreak: "auto",
    //     left: "10px",
    //     fontFamily: "cursive",
    //   }
    // },
    {
      start: a,
      middle:b,
      end:c,
      textStyle:{
        position: "absolute",
        fontSize: "2em",
        color: "white",
        top: "25%",
        lineBreak: "auto",
        left: "10px",
        fontFamily: "cursive",
      }
    },
    {
      start: a2,
      middle:b2,
      end:c2,
      textStyle:{
        position: "absolute",
        fontSize: "2em",
        color: "black",
        top: "10%",
        lineBreak: "auto",
        left: "15%",
        marginRight:"50px",
        fontFamily: "sans-serif",
      }
    }
    
  ];
  