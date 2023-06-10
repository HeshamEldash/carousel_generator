import React from "react";

function WrapperPage({ children }) {
  return (
    <div className="flex flex-col   w-full h-screen bg-slate-100 py-24 overflow-scroll lg:flex-wrap justify-center content-around px-3">
 
       {children}
    </div>
  );
}

export default WrapperPage;
