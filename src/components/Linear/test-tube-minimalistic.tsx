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
        
        d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.209 2.209 0 0 0 1.32 1.787l1.661.69m0 0 7.239-7.271-5.376-5.399-10.75 10.798a3.83 3.83 0 0 0 0 5.399 3.789 3.789 0 0 0 5.375 0L13 16.355Zm8-6.506L14.182 3"
      />
    </svg>
  );
};
export default SvgTestTubeMinimalistic;
