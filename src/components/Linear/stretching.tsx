import * as React from "react";
import type { SVGProps } from "react";
const SvgStretching = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={14.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.976v-2.62a1.5 1.5 0 0 0-2.091-1.38L8.342 10.95a1.5 1.5 0 0 0-.456 2.453L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165"
      />
    </svg>
  );
};
export default SvgStretching;
