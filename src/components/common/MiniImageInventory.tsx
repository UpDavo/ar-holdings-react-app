import { useState, useEffect, useRef } from "react";

function MiniImageIventory(props: any) {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    setLoading(false);
  };
  return (
    <div className="w-20 h-20 m-2 rounded-lg">
      <div
        style={{ display: loading ? "block" : "none" }}
        className="flex items-center"
      >
        <button className="mt-[25%] ml-3 btn btn-outline loading border-none"></button>
      </div>
      <div className="bg-cover" style={{ display: loading ? "none" : "block" }}>
        <img
          className="bg-cover h-full w-full rounded-lg"
          src={props.image == "None" ? "/img/generic-product.jpg" : props.image}
          alt="product_image"
          onLoad={imageLoaded}
        ></img>
      </div>
    </div>
  );
}

export default MiniImageIventory;
