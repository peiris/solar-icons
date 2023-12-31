import * as React from "react";
import type { SVGProps } from "react";
const SvgPenNewRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588 8.413 13.9"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649-5.964 5.965c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122.579-1.735c.18-.542.27-.813.392-1.068.144-.301.32-.586.524-.848.174-.223.376-.425.78-.83l5.965-5.964Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPenNewRound;
