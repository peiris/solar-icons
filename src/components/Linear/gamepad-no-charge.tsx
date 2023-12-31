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
        
        d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.308 2.308 0 0 1-2.666 0l-.502-.355A4.241 4.241 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16-2.383.846-4.022 3.935-3.903 10.943.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19c1.615 0 2.385-1.169 2.569-1.753M14 17l-4 4M10 17l4 4M7.5 9v3M6 10.5h3"
      />
      <path
        fill="currentColor"
        d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
};
export default SvgGamepadNoCharge;
