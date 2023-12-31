import * as React from "react";
import type { SVGProps } from "react";
const SvgBillCross = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        fillRule="evenodd"
        d="M6.333 2h11.334c.31 0 .464 0 .595.012 1.45.133 2.6 1.34 2.727 2.861.011.137.011.3.011.624V20.26c0 .872-1.059 1.243-1.558.544a.841.841 0 0 0-1.384 0l-.433.606a1.367 1.367 0 0 1-2.25 0 1.367 1.367 0 0 0-2.25 0 1.367 1.367 0 0 1-2.25 0 1.367 1.367 0 0 0-2.25 0 1.367 1.367 0 0 1-2.25 0l-.433-.605a.841.841 0 0 0-1.384 0c-.5.698-1.558.327-1.558-.545V5.497c0-.324 0-.487.011-.624.127-1.521 1.277-2.728 2.728-2.861C5.869 2 6.024 2 6.333 2Zm4.197 5.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94l-1.47-1.47ZM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBillCross;
