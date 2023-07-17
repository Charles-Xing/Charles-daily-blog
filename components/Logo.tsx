import React from "react";
import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover border-[#F2780D] border-2 border-solid rounded-full"
        height={50}
        width={50}
        src="/MyPhoto.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
