import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTubeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.209 2.209 0 0 0 1.32 1.787l1.661.69m0 0-3.512 3.527a3.789 3.789 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4l10.75-10.797 5.376 5.399-1.81 1.818M13 16.355l3-3.014m5-3.492L14.182 3"
      />
    </svg>
  );
};
export default SvgTestTubeMinimalistic;
