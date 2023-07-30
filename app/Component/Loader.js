import Image from "next/image";
import React from "react";
import loader from "../images/loader.gif"

const Loader = () => {
  return (
    <div className="loader">
      {/* <h1>Loading Please Wait !!</h1> */}
      <Image src={loader}  alt="Loading Please wait" width={200} height={200}/>
    </div>
  );
};

export default Loader;
