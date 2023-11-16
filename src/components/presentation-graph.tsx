import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationGraph = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5.207 0 .374.167.707.5l.586.586c.333.333.5.5.707.5.207 0 .374-.167.707-.5L15 8.5M12 21v-4M10 22l2-1M14 22l-2-1" />
      <path d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952C4 15.096 4 13.564 4 10.5V2" />
    </svg>
  );
};
export default SvgPresentationGraph;
