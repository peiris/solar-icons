import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugCircle = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.091 10.091 0 0 0 22 12.083C22 6.514 17.523 2 12 2c-1.821 0-3.53.491-5 1.349"
      />
      <path
        stroke="currentColor"
        
        d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0v-.2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M13.5 11V9M10.5 11V9"
      />
    </svg>
  );
};
export default SvgPlugCircle;
