import * as React from "react";
import type { SVGProps } from "react";
const SvgStructure = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M16.093 4.256A.754.754 0 0 0 16 4.25H8a.756.756 0 0 0-.093.006 3.006 3.006 0 0 1 0 1.488c.03.004.061.006.093.006h8a.756.756 0 0 0 .093-.006 3.008 3.008 0 0 1 0-1.488ZM19 8c.257 0 .506-.032.744-.093.004.03.006.061.006.093v8a.753.753 0 0 1-.006.093 3.004 3.004 0 0 0-1.488 0A.753.753 0 0 1 18.25 16V8c0-.032.002-.063.006-.093.238.06.487.093.744.093ZM16.093 18.256A.753.753 0 0 0 16 18.25H8a.752.752 0 0 0-.093.006 3.006 3.006 0 0 1 0 1.488c.03.004.061.006.093.006h8a.753.753 0 0 0 .093-.006 3.004 3.004 0 0 1 0-1.488ZM5 8c-.257 0-.506-.032-.744-.093A.756.756 0 0 0 4.25 8v8c0 .032.002.063.006.093a3.008 3.008 0 0 1 1.488 0A.757.757 0 0 0 5.75 16V8a.756.756 0 0 0-.006-.093C5.506 7.967 5.257 8 5 8Z" />
      </g>
    </svg>
  );
};
export default SvgStructure;
