import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepadNoCharge = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581A34.554 34.554 0 0 0 21.918 12M7.596 17.247C7.412 17.83 6.642 19 5.026 19a3.2 3.2 0 0 1-1.392-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78l.502.354a2.308 2.308 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16 1.337.475 2.44 1.656 3.13 3.84M14 17l-4 4M10 17l4 4M7.5 9v3M6 10.5h3"
      />
      <path
        fill="currentColor"
        d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
};
export default SvgGamepadNoCharge;
