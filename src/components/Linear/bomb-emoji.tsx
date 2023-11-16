import * as React from "react";
import type { SVGProps } from "react";
const SvgBombEmoji = (props: SVGProps<SVGSVGElement>) => {
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
        cx={9.5}
        cy={14.5}
        r={7.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 16h2"
      />
      <path
        fill="currentColor"
        d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z"
      />
      <ellipse cx={9} cy={12.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m17 7-2 2"
      />
      <path
        stroke="currentColor"
        
        d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315l.654-1.659Z"
      />
    </svg>
  );
};
export default SvgBombEmoji;
