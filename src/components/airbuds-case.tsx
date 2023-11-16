import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCase = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-2Z" />
      <path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2ZM21 9h-3.5M7 9H3" />
    </svg>
  );
};
export default SvgAirbudsCase;
