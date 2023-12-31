import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskSad = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 11v1c0 5.49-4.239 8.155-6.899 9.286-.721.307-1.082.46-2.101.46-1.02 0-1.38-.153-2.101-.46C7.239 20.155 3 17.49 3 12V6.719c0-2.19 0-3.285.707-3.884.708-.6 1.789-.42 3.95-.059l1.055.176c1.64.273 2.46.41 3.288.41.828 0 1.648-.137 3.288-.41l1.054-.176c2.163-.36 3.244-.54 3.95.059C21 3.434 21 4.529 21 6.719V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M13.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1"
      />
    </svg>
  );
};
export default SvgMaskSad;
