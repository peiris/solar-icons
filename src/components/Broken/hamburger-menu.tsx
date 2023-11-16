import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburgerMenu = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 7h3m13 0h-9M20 17h-3M4 17h9M4 12h16"
      />
    </svg>
  );
};
export default SvgHamburgerMenu;
