import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m14.664 5.479 3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99 0 .899-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823-.295-.133-.295-.611-.295-1.57v-2.344c-3.6 0-7.5 1.714-9 4.571 0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823Z"
      />
    </svg>
  );
};
export default SvgForward;
