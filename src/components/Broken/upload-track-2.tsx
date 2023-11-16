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
        strokeLinejoin="round"
        
        d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10 0-1.821.487-3.53 1.338-5M21.8 14c.131-.646.2-1.315.2-2 0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338"
      />
    </svg>
  );
};
export default SvgUploadTrack2;
