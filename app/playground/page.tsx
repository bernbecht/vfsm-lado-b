import React from "react";
import "./noise.scss";
import Image from "next/image";

const Page = () => {
  return (
    <div className="noise-container">
      <Image
        src="https://vamosfalarsobremusica.com.br/wp-content/uploads/2021/12/lado_b_16_1.jpg"
        alt=""
        width={250}
        height={250}
        className="rounded-lg	drop-shadow-md"
      />
      <div className="noise-bkg"></div>
    </div>
  );
};

export default Page;
