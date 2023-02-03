import React from "react";
import ThreeSixty from "react-360-view";
import x from "../components/imgpsh_fullsize_anim.jpg"
const Realtor = () => {
  return (
    <div>
      <ThreeSixty
        amount={36}
        imagePath={x}
        fileName={x}
        
      />
    </div>
  );
};

export default Realtor;
