import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudBoltMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634m9.49-3.228A5.724 5.724 0 0 1 20 8.061"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m10 22 4.286-3.692H10l4.286-3.693"
      />
    </svg>
  );
};
export default SvgCloudBoltMinimalistic;
