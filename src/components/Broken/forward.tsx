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
        
        d="M8 10.13c1.613-1.153 3.455-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823l3.972 3.53c1.568 1.395 2.353 2.092 2.353 2.99 0 .899-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823-.295-.133-.295-.611-.295-1.57v-2.344c-3.6 0-7.5 1.714-9 4.571 0-2.431.377-4.378 1-5.925"
      />
    </svg>
  );
};
export default SvgForward;
