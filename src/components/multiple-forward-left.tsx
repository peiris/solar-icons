import * as React from "react";
import type { SVGProps } from "react";
const SvgMultipleForwardLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m11.336 5.479-3.973 3.53C5.795 10.405 5.01 11.102 5.01 12c0 .899.785 1.596 2.353 2.99l3.972 3.53c.716.637 1.074.956 1.37.823.295-.133.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-9.142-5.334-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57-.296-.132-.653.186-1.37.823Z" />
      <path d="M8.462 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823l5.09 4.333" />
    </svg>
  );
};
export default SvgMultipleForwardLeft;
