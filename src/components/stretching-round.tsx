import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingRound = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={14.5} cy={4.5} r={2.5} />
      <path d="M19 21.996v-3.947c0-1.776-1.605-3.13-3.373-2.844m-7.679-1.77-.025-.024c-1.042-1.007-.237-2.626.67-3.268.907-.643 4.752-1.643 4.752 3.291C13.345 18.13 9.695 22 5 22" />
    </svg>
  );
};
export default SvgStretchingRound;
