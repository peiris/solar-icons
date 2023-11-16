import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburgerMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M20 7H4M20 12H4M20 17H4" />
    </svg>
  );
};
export default SvgHamburgerMenu;
