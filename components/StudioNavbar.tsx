import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  // props 是一个用于传递属性值的对象。组件可以通过这些属性值来接收外部传递的数据或回调函数。
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex text-[#F2780D] items-center font-bold">
          <ArrowUturnLeftIcon className="w-6 h-6 mr-2" />
          Go To Website
        </Link>

        <div className="justify-center hidden p-5 border-[#F2780D] border-2 rounded-lg md:flex">
          <h1 className="font-bold text-white">
            Want coding challenges & solutions sent to your inbox daily?{" "}
          </h1>
          <Link
            href="https://www.papareact.com/universityofcode"
            className="text-[#F2780D] font-bold ml-2"
          >
            www.papareact.com/university
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
