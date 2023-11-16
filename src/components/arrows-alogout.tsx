import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsALogout = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 20a8 8 0 1 1 0-16M10 12h10m0 0-3-3m3 3-3 3" />
    </svg>
  );
};
export default SvgArrowsALogout;
