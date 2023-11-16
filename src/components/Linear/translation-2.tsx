import * as React from "react";
import type { SVGProps } from "react";
const SvgTranslation2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.243 16.243a6 6 0 1 0-8.485 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19.071 19.071A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.969 9.969 0 0 0 2.929 7.071"
      />
      <circle cx={12} cy={12} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        
        d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342.054-.003.108-.003.162 0 .593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.34 1.34 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.345 1.345 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z"
      />
    </svg>
  );
};
export default SvgTranslation2;
