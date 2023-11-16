import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseLines = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2.11 11H22M22 17h-3.5m-16 0h11M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6m4 16c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828C19.657 6 17.771 6 14 6"
      />
    </svg>
  );
};
export default SvgSuitcaseLines;
