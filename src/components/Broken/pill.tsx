import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.765 6.765 0 0 1 21.894 14M2.107 10a6.765 6.765 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"
      />
      <path
        stroke="currentColor"
        
        d="M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806"
      />
    </svg>
  );
};
export default SvgPill;
