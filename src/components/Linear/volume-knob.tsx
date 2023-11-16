import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeKnob = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={5} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 7v4"
      />
      <path
        fill="currentColor"
        d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.697 5.282a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415ZM18.717 17.303a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415ZM18.717 6.697a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415ZM6.697 18.718a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415Z"
      />
    </svg>
  );
};
export default SvgVolumeKnob;
