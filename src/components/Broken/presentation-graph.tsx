import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationGraph = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5.207 0 .374.167.707.5l.586.586c.333.333.5.5.707.5.207 0 .374-.167.707-.5L15 8.5M12 21v-4M10 22l2-1M14 22l-2-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 2v8.5c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h2.286c3.232 0 4.849 0 5.853-.952C20 15.096 20 13.564 20 10.5V10m0-8v4"
      />
    </svg>
  );
};
export default SvgPresentationGraph;
