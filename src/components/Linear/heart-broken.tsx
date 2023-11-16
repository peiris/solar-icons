import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartBroken = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M12 5.5C7.5.826 2 4.275 2 9.138 2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5m0-15C16.5.826 22 4.275 22 9.138c0 4.863-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5m0-15-1.5 3L14 11l-3 3.5 2 2-1 4"
      />
    </svg>
  );
};
export default SvgHeartBroken;
