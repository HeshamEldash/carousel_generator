import React from "react";

function WrapperPage({ children }) {
  return (
    <div className="flex flex-col items-center  w-full h-screen bg-slate-100 pad py-20">
 
       {children}
    </div>
  );
}

export default WrapperPage;
