import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneCallingRounded = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 2s2.2.2 5 3 3 5 3 5M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14.156 14.156 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382"
      />
    </svg>
  );
};
export default SvgPhoneCallingRounded;
