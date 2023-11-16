import * as React from "react";
import type { SVGProps } from "react";
const SvgImport = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 4v10m0 0 3-3m-3 3-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 20a8 8 0 0 1-8-8m16 0a7.985 7.985 0 0 1-3 6.245"
      />
    </svg>
  );
};
export default SvgImport;
