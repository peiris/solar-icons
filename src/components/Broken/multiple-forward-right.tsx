import * as React from "react";
import type { SVGProps } from "react";
const SvgMultipleForwardRight = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M6 10.13c1.613-1.153 3.454-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823l3.971 3.53c1.569 1.395 2.353 2.092 2.353 2.99 0 .899-.784 1.596-2.353 2.99l-3.972 3.53c-.716.637-1.074.956-1.37.823-.294-.133-.294-.611-.294-1.57v-2.344c-3.6 0-7.5 1.714-9 4.571 0-2.431.377-4.378 1-5.925"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.539 4.5 5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"
      />
    </svg>
  );
};
export default SvgMultipleForwardRight;
