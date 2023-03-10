import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-1">
      <Image
        className="object-cover"
        height={30}
        width={30}
        src="/kt-logo-light.webp"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
