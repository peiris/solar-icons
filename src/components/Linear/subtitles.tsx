import * as React from "react";
import type { SVGProps } from "react";
const SvgSubtitles = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 16H6M14 13h4M14 16h-1.5M9.5 13h2M18 16h-1.5M6 13h1"
      />
    </svg>
  );
};
export default SvgSubtitles;
