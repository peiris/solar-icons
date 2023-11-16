import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M16 21a6 6 0 0 0 4.472-10M12 21a6 6 0 0 1 0-12h2"
      />
    </svg>
  );
};
export default SvgLinkRound;
