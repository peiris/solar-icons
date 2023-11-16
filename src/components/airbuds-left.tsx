import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsLeft = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.588 5.588 0 0 1 7.56 2h.104A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5M8 5v3" />
      <circle cx={5.5} cy={5.5} r={5.5} transform="matrix(-1 0 0 1 21 11)" />
      <path d="M14 14v5h3M14 5.1A5.006 5.006 0 0 1 17.9 9" />
    </svg>
  );
};
export default SvgAirbudsLeft;
