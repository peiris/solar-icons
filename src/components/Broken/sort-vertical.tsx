import * as React from "react";
import type { SVGProps } from "react";
const SvgSortVertical = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16 18v-2m0-10 4 4.125M16 6l-4 4.125M16 6v7M8 18l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"
      />
    </svg>
  );
};
export default SvgSortVertical;
