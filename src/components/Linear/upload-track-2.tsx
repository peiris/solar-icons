import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13 15V7"
      />
      <circle cx={11} cy={15} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16 10a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
      />
    </svg>
  );
};
export default SvgUploadTrack2;
