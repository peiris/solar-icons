import * as React from "react";
import type { SVGProps } from "react";
const SvgScreencast2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 18.415a3.02 3.02 0 0 0 .828-.587C22 16.657 22 14.771 22 11v-1M4 18.415a3.02 3.02 0 0 1-.828-.587C2 16.657 2 14.771 2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828"
      />
      <path
        stroke="currentColor"
        
        d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z"
      />
    </svg>
  );
};
export default SvgScreencast2;
