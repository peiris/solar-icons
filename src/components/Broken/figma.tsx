import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 8.667H8.667m3.333 0V2H8.667a3.333 3.333 0 0 0 0 6.667m3.333 0v6.666H8.667M12 8.667h3.333m-6.666 0a3.333 3.333 0 0 0 0 6.666m0 0A3.333 3.333 0 1 0 12 18.667m3.333-10a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm0 0a3.333 3.333 0 0 0 0-6.667"
      />
    </svg>
  );
};
export default SvgFigma;
